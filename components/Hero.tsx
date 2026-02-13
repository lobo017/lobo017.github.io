'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const phrases = [
  'building tools that actually work.',
  'making sense of complex systems.',
  'cognitive science meets engineering.',
  'analyzing data, solving problems.',
  'reliable software, clear thinking.',
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
    <section className="section-shell pb-12 pt-28 md:pt-36" aria-label="Hero">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-4 inline-block rounded-full border border-cyan-700/40 bg-cyan-900/20 px-4 py-1 text-sm text-cyan-200"
      >
        Software Developer & Cognitive Scientist
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="mb-3 text-6xl font-extrabold tracking-tight text-foreground md:text-8xl"
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
        className="mt-5 max-w-2xl text-lg text-slate-400"
      >
        I combine engineering with cognitive science to create software that makes sense. I care about systems thinking, operational efficiency, and building tools that improve how people work.
      </motion.p>
    </section>
  );
}
