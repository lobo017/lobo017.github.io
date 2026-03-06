'use client';

/**
 * ToolkitPanel - glass terminal panel wrapping the skills section.
 *
 * Provides a polished "software interface" aesthetic:
 *   - Window chrome header (traffic-light dots + monospace label)
 *   - Glassmorphism background
 *   - Subtle perspective hover-lift on each category card
 *
 * Swap-in path: Place a <SplineWrapper sceneUrl="..."> behind the glass layer.
 */

import { motion } from 'framer-motion';

// ── category icon set (SVG, no emoji) ───────────────────────────────────────
export type SkillCategory =
  | 'Languages'
  | 'Backend & Data'
  | 'Infra & Tools'
  | 'AI / ML'
  | 'Frontend';

function CategoryIcon({ category }: { category: string }) {
  const cls = 'w-4 h-4 text-cyan-400 shrink-0';
  switch (category) {
    case 'Languages':
      return (
        <svg className={cls} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case 'Backend & Data':
      return (
        <svg className={cls} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v4c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
          <path d="M3 9v6c0 1.66 4.03 3 9 3s9-1.34 9-3V9" />
        </svg>
      );
    case 'Infra & Tools':
      return (
        <svg className={cls} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      );
    case 'AI / ML':
      return (
        <svg className={cls} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="2" />
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      );
    case 'Frontend':
    default:
      return (
        <svg className={cls} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        </svg>
      );
  }
}

// ── WindowChrome - the fake OS title bar ─────────────────────────────────────
function WindowChrome() {
  return (
    <div className="flex items-center gap-3 border-b border-cyan-900/30 px-5 py-3">
      {/* Traffic-light dots */}
      <span className="h-3 w-3 rounded-full bg-red-500/50" />
      <span className="h-3 w-3 rounded-full bg-yellow-500/50" />
      <span className="h-3 w-3 rounded-full bg-green-500/50" />
      <p className="ml-2 font-mono text-xs text-slate-500 tracking-wide select-none">
        toolkit.sh
      </p>
    </div>
  );
}

// ── Exported card ─────────────────────────────────────────────────────────────
interface CategoryCardProps {
  label: string;
  skills: string[];
  index: number;
}

export function CategoryCard({ label, skills, index }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.07 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="rounded-xl border border-cyan-900/20 bg-slate-900/50 p-5 backdrop-blur-sm"
    >
      <div className="mb-3 flex items-center gap-2">
        <CategoryIcon category={label} />
        <h3 className="text-sm font-medium uppercase tracking-widest text-cyan-400">
          {label}
        </h3>
      </div>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-md border border-slate-700/60 bg-slate-800/70 px-2.5 py-1 font-mono text-xs text-slate-200"
          >
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

// ── ToolkitPanel wrapper ───────────────────────────────────────────────────────
interface ToolkitPanelProps {
  children: React.ReactNode;
}

export function ToolkitPanel({ children }: ToolkitPanelProps) {
  return (
    <div className="glass-panel overflow-hidden">
      <WindowChrome />
      <div className="p-6 md:p-8">
        {children}
      </div>
    </div>
  );
}
