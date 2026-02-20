'use client';

import { useRef, useEffect, useCallback, useState } from 'react';
import { techStack } from '@/data/portfolio';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const AUTO_SPEED = 0.5;   // px per frame at rest (~30 px/s @ 60fps)
const FRICTION = 0.955;   // velocity multiplier per frame (lower = more drag)
const BLEND_ZONE = 0.8;   // velocity (px/ms) at which blending starts
const BLEND_END = 0.02;   // velocity (px/ms) below which throw is fully replaced by auto-scroll

function MarqueeTrack() {
  return (
    <div className="flex shrink-0 gap-3 pr-3">
      {techStack.map((tech) => (
        <span
          key={tech}
          className="whitespace-nowrap rounded-full border border-cyan-700/40 bg-cyan-900/10 px-4 py-2 text-sm text-cyan-100 select-none"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

export function TechMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const rafRef = useRef<number>(0);
  const [dragging, setDragging] = useState(false);

  // Drag state
  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);

  // Velocity tracking — rolling window of last 3 pointer samples
  const pointerSamples = useRef<{ x: number; t: number }[]>([]);
  const velocityRef = useRef(0); // px/ms — positive = scrolling left (content moves left)
  const throwingRef = useRef(false);

  const getCopyWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track || !track.children[0]) return 1;
    return (track.children[0] as HTMLElement).offsetWidth;
  }, []);

  const wrapOffset = useCallback(
    (offset: number) => {
      const w = getCopyWidth();
      return ((offset % w) + w) % w;
    },
    [getCopyWidth],
  );

  // --- Main animation loop ---
  useEffect(() => {
    let lastTime = performance.now();

    const tick = (now: number) => {
      const dt = now - lastTime;
      lastTime = now;

      if (!dragging) {
        if (throwingRef.current) {
          // Apply friction
          velocityRef.current *= FRICTION;

          const absVel = Math.abs(velocityRef.current);

          if (absVel < BLEND_END) {
            // Throw fully decayed — pure auto-scroll
            throwingRef.current = false;
            velocityRef.current = 0;
            offsetRef.current = wrapOffset(offsetRef.current + AUTO_SPEED);
          } else {
            // Smooth blend: as velocity decays through the blend zone,
            // gradually mix in auto-scroll so there's no sudden jump
            const blendFactor = absVel < BLEND_ZONE
              ? 1 - (absVel - BLEND_END) / (BLEND_ZONE - BLEND_END)
              : 0;

            const throwComponent = velocityRef.current * dt;
            const autoComponent = AUTO_SPEED * blendFactor;
            offsetRef.current = wrapOffset(
              offsetRef.current + throwComponent + autoComponent,
            );
          }
        } else {
          // Normal auto-scroll
          offsetRef.current = wrapOffset(offsetRef.current + AUTO_SPEED);
        }

        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [wrapOffset, dragging]);

  // --- Pointer handlers ---
  const onPointerDown = (e: React.PointerEvent) => {
    setDragging(true);
    throwingRef.current = false;
    velocityRef.current = 0;
    dragStartX.current = e.clientX;
    dragStartOffset.current = offsetRef.current;
    pointerSamples.current = [{ x: e.clientX, t: performance.now() }];
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    const delta = dragStartX.current - e.clientX;
    offsetRef.current = wrapOffset(dragStartOffset.current + delta);

    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
    }

    // Record sample for velocity calculation (keep last 3)
    const now = performance.now();
    pointerSamples.current.push({ x: e.clientX, t: now });
    if (pointerSamples.current.length > 5) {
      pointerSamples.current.shift();
    }
  };

  const onPointerUp = () => {
    setDragging(false);

    // Calculate release velocity from recent samples
    const samples = pointerSamples.current;
    if (samples.length >= 2) {
      const first = samples[0];
      const last = samples[samples.length - 1];
      const dtMs = last.t - first.t;

      if (dtMs > 0) {
        // Positive velocity = dragged left = offset increases
        const rawVelocity = (first.x - last.x) / dtMs; // px/ms
        velocityRef.current = rawVelocity;
        throwingRef.current = Math.abs(rawVelocity) > 0.05;
      }
    }

    pointerSamples.current = [];
  };

  return (
    <section className="section-shell overflow-hidden" aria-label="Tech Stack">
      <Reveal>
        <SectionHeading eyebrow="Toolbox" title="My Toolkit" />
      </Reveal>
      <div
        className="card-surface overflow-hidden py-5"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
          cursor: dragging ? 'grabbing' : 'grab',
          touchAction: 'pan-y',
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div ref={trackRef} className="flex w-max will-change-transform">
          <MarqueeTrack />
          <MarqueeTrack />
        </div>
      </div>
    </section>
  );
}
