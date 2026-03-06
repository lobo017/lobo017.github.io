'use client';

/**
 * NodeNetworkScene - animated Canvas scene evoking backend data infrastructure.
 *
 * Inspired by "Cloner City" - nodes represent services/systems, edges
 * represent data flow between them. Intentionally abstract, not literal.
 *
 * Architecture:
 *   requestAnimationFrame loop → node position update (float) → draw connections → draw nodes
 *
 * Swap-in path: Replace this component with:
 *   <SplineWrapper sceneUrl="YOUR_URL">
 *     <NodeNetworkScene />   ← this becomes the fallback
 *   </SplineWrapper>
 */

import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;    // velocity for gentle idle float
  vy: number;
  radius: number;
  pulsePhase: number;   // staggered glow pulse
  tier: 0 | 1 | 2;     // 0 = hub, 1 = mid, 2 = leaf - affects size/brightness
}

const COLORS = {
  hub:  'rgba(6, 182, 212, 1)',    // cyan-500 – brightest
  mid:  'rgba(6, 182, 212, 0.65)',
  leaf: 'rgba(6, 182, 212, 0.35)',
  edge: 'rgba(6, 182, 212, 0.12)',
};

export function NodeNetworkScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef   = useRef({ x: 0.5, y: 0.5 }); // normalized 0-1
  const frameRef   = useRef<number>(0);
  const nodesRef   = useRef<Node[]>([]);
  const reducedRef = useRef(false);

  useEffect(() => {
    reducedRef.current =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // ── build node grid ─────────────────────────────────────────────────────
    function buildNodes(w: number, h: number): Node[] {
      const nodes: Node[] = [];

      // Hub nodes - large, bright, sparsely placed
      const hubPositions = [
        [0.22, 0.28], [0.55, 0.18], [0.78, 0.55], [0.38, 0.72], [0.65, 0.82],
      ];
      hubPositions.forEach(([px, py]) => {
        const x = px * w; const y = py * h;
        nodes.push({ x, y, baseX: x, baseY: y, vx: 0, vy: 0,
          radius: 4.5, pulsePhase: Math.random() * Math.PI * 2, tier: 0 });
      });

      // Mid nodes
      const midCount = 12;
      for (let i = 0; i < midCount; i++) {
        const x = (0.08 + Math.random() * 0.84) * w;
        const y = (0.08 + Math.random() * 0.84) * h;
        nodes.push({ x, y, baseX: x, baseY: y,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          radius: 2.8, pulsePhase: Math.random() * Math.PI * 2, tier: 1 });
      }

      // Leaf nodes
      const leafCount = 22;
      for (let i = 0; i < leafCount; i++) {
        const x = (0.04 + Math.random() * 0.92) * w;
        const y = (0.04 + Math.random() * 0.92) * h;
        nodes.push({ x, y, baseX: x, baseY: y,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          radius: 1.6, pulsePhase: Math.random() * Math.PI * 2, tier: 2 });
      }

      return nodes;
    }

    // ── resize handler ───────────────────────────────────────────────────────
    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const w   = canvas!.offsetWidth;
      const h   = canvas!.offsetHeight;
      canvas!.width  = w * dpr;
      canvas!.height = h * dpr;
      ctx!.scale(dpr, dpr);
      nodesRef.current = buildNodes(w, h);
    }

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // ── mouse parallax ───────────────────────────────────────────────────────
    const handleMouse = (e: MouseEvent) => {
      const rect = canvas!.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top)  / rect.height,
      };
    };
    window.addEventListener('mousemove', handleMouse, { passive: true });

    // ── animation loop ───────────────────────────────────────────────────────
    let t = 0;
    const MAX_DIST = 160; // px - edge draw threshold

    function draw() {
      const w = canvas!.offsetWidth;
      const h = canvas!.offsetHeight;
      ctx!.clearRect(0, 0, w, h);

      const nodes = nodesRef.current;
      const reduced = reducedRef.current;

      if (!reduced) {
        t += 0.008;

        // Mouse parallax - hubs float more, leaves less
        const mx = (mouseRef.current.x - 0.5) * 2; // -1..1
        const my = (mouseRef.current.y - 0.5) * 2;

        nodes.forEach((n) => {
          const strength = n.tier === 0 ? 10 : n.tier === 1 ? 6 : 3;

          // Subtle float
          n.x = n.baseX + Math.sin(t + n.pulsePhase) * 3.5 + mx * strength;
          n.y = n.baseY + Math.cos(t * 0.7 + n.pulsePhase) * 3.5 + my * strength;
        });
      }

      // Draw edges first (below nodes)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]; const b = nodes[j];
          const dx = a.x - b.x; const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > MAX_DIST) continue;

          const alpha = (1 - dist / MAX_DIST) * 0.18;
          ctx!.beginPath();
          ctx!.moveTo(a.x, a.y);
          ctx!.lineTo(b.x, b.y);
          ctx!.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
          ctx!.lineWidth = 0.8;
          ctx!.stroke();
        }
      }

      // Draw nodes
      nodes.forEach((n) => {
        const pulse = reduced ? 1
          : 0.7 + 0.3 * Math.sin(t * 1.5 + n.pulsePhase);
        const r = n.radius * pulse;

        // Outer glow
        const grad = ctx!.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 4.5);
        const base  = n.tier === 0 ? 1 : n.tier === 1 ? 0.7 : 0.35;
        grad.addColorStop(0,   `rgba(6, 182, 212, ${base * 0.9})`);
        grad.addColorStop(0.4, `rgba(6, 182, 212, ${base * 0.3})`);
        grad.addColorStop(1,   'rgba(6, 182, 212, 0)');

        ctx!.beginPath();
        ctx!.arc(n.x, n.y, r * 4.5, 0, Math.PI * 2);
        ctx!.fillStyle = grad;
        ctx!.fill();

        // Solid core
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx!.fillStyle = n.tier === 0 ? COLORS.hub : n.tier === 1 ? COLORS.mid : COLORS.leaf;
        ctx!.fill();
      });

      frameRef.current = requestAnimationFrame(draw);
    }

    frameRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frameRef.current);
      ro.disconnect();
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="h-full w-full"
      style={{ display: 'block' }}
    />
  );
}
