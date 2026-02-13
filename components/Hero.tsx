'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const phrases = [
  'finding the optimization nobody else noticed.',
  'building tools that remove friction.',
  'thinking in systems, not isolated tasks.',
  'turning messy data into clear decisions.',
  'automating what should never be manual.',
];

function RotatingTagline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-block h-[1.4em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={phrases[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
          className="inline-block text-accent"
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero() {
  return (
    <section className="section-shell pb-16 pt-32 md:pb-24 md:pt-44" aria-label="Hero">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-4 inline-block rounded-full border border-cyan-700/40 bg-cyan-900/20 px-4 py-1 text-sm text-cyan-200"
      >
        Systems Thinker. Builder. Problem Solver.
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
        <RotatingTagline />
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400"
      >
        I studied how people think, then started building the software they actually need. My work sits at the intersection of cognitive science, data, and engineering. I gravitate toward systems that can be made simpler, faster, or more reliable.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="mt-8 flex flex-wrap gap-4"
      >
        <a
          href="#projects"
          className="focus-ring inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 font-medium text-slate-950 transition-colors hover:bg-cyan-300"
        >
          View projects
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/></svg>
        </a>
        <a
          href="#contact"
          className="focus-ring inline-flex items-center gap-2 rounded-lg border border-cyan-700/50 px-5 py-2.5 font-medium text-cyan-100 transition-colors hover:bg-cyan-900/30"
        >
          Get in touch
        </a>
      </motion.div>
    </section>
  );
}
