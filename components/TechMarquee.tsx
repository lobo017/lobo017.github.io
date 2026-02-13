'use client';

import { useRef, useEffect, useCallback } from 'react';
import { techStack } from '@/data/portfolio';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const SPEED = 0.5; // px per frame (~30 px/s at 60fps)

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
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);

  // Get the width of one copy (first child)
  const getCopyWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track || !track.children[0]) return 1;
    return (track.children[0] as HTMLElement).offsetWidth;
  }, []);

  // Wrap offset so it always stays within [0, copyWidth)
  const wrapOffset = useCallback(
    (offset: number) => {
      const w = getCopyWidth();
      return ((offset % w) + w) % w;
    },
    [getCopyWidth],
  );

  // Animation loop
  useEffect(() => {
    const tick = () => {
      if (!isDragging.current) {
        offsetRef.current = wrapOffset(offsetRef.current + SPEED);
        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [wrapOffset]);

  // --- Pointer handlers ---
  const onPointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragStartOffset.current = offsetRef.current;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const delta = dragStartX.current - e.clientX;
    offsetRef.current = wrapOffset(dragStartOffset.current + delta);
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
    }
  };

  const onPointerUp = () => {
    isDragging.current = false;
  };

  return (
    <section className="section-shell overflow-hidden" aria-label="Tech Stack">
      <Reveal>
        <SectionHeading eyebrow="Toolbox" title="The Stack" />
      </Reveal>
      <div
        className="card-surface overflow-hidden py-5"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
          cursor: isDragging.current ? 'grabbing' : 'grab',
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
