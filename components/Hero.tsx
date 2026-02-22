'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="section-shell pb-16 pt-32 md:pb-24 md:pt-44" aria-label="Hero">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-4 inline-block rounded-full border border-cyan-700/40 bg-cyan-900/20 px-4 py-1 text-sm text-cyan-200"
      >
        Python · Backend Systems · Data Pipelines
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="name-shimmer mb-3 text-6xl font-extrabold tracking-tight md:text-8xl"
      >
        Ethan Lobo
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-3xl text-2xl font-semibold leading-snug text-slate-300 md:text-3xl"
      >
        I use Python to build backend systems, automate workflows, and turn messy data into something useful.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400"
      >
        M.S. Applied Cognition &amp; Neuroscience at UT Dallas. I think in systems: how data flows, where processes break, and what can be automated. I write code that&apos;s clean, tested, and built to last.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="mt-8 flex flex-wrap gap-4"
      >
        <a
          href="/Ethan_Lobo_Backend_Data_Focused_Engineer_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 font-medium text-slate-950 transition-colors hover:bg-cyan-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Download Resume
        </a>
        <a
          href="#projects"
          className="focus-ring inline-flex items-center gap-2 rounded-lg border border-cyan-700/50 px-5 py-2.5 font-medium text-cyan-100 transition-colors hover:bg-cyan-900/30"
        >
          View Projects
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/></svg>
        </a>
        <a
          href="#contact"
          className="focus-ring inline-flex items-center gap-2 rounded-lg border border-slate-600/50 px-5 py-2.5 font-medium text-slate-300 transition-colors hover:border-cyan-700/50 hover:text-cyan-200 hover:bg-cyan-900/20"
        >
          Get in touch
        </a>
      </motion.div>
    </section>
  );
}
