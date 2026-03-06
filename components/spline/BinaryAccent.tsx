'use client';

/**
 * BinaryAccent - ambient data-stream accent for the Contact section.
 *
 * Shows three vertical columns of cascading binary digits (0s and 1s)
 * at very low opacity. Desktop only, aria-hidden, prefers-reduced-motion safe.
 *
 * Swap-in path: Wrap in <SplineWrapper sceneUrl="..."> when ready.
 */

export function BinaryAccent() {
  // Three columns with different character sequences, speeds, and opacities
  const columns = [
    {
      chars: ['1','0','1','1','0','1','0','0','1','1','0','1','1','0','0'],
      duration: '18s',
      opacity: 0.055,
      delay: '0s',
    },
    {
      chars: ['0','1','0','1','1','0','0','1','0','1','1','0','1','0','1'],
      duration: '22s',
      opacity: 0.04,
      delay: '-7s',
    },
    {
      chars: ['1','1','0','0','1','0','1','1','1','0','0','1','0','1','0'],
      duration: '26s',
      opacity: 0.03,
      delay: '-14s',
    },
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute right-0 top-0 hidden h-full w-24 overflow-hidden md:flex items-start justify-around"
      style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 20%, rgba(0,0,0,0.4) 80%, transparent 100%)' }}
    >
      {columns.map((col, ci) => (
        <div
          key={ci}
          className="flex flex-col"
          style={{
            animation: `binary-fall ${col.duration} linear infinite`,
            animationDelay: col.delay,
            opacity: col.opacity,
            fontFamily: "'Courier New', monospace",
            fontSize: '11px',
            lineHeight: '1.8',
            color: '#06b6d4',
            letterSpacing: '0.05em',
          }}
        >
          {/* Repeat chars 3× so the loop is seamless */}
          {[...col.chars, ...col.chars, ...col.chars].map((c, i) => (
            <span key={i}>{c}</span>
          ))}
        </div>
      ))}
    </div>
  );
}
