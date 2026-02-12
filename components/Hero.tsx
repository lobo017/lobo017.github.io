'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="section-shell pb-12 pt-28 md:pt-36" aria-label="Hero">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 inline-block rounded-full border border-cyan-700/40 bg-cyan-900/20 px-4 py-1 text-sm text-cyan-200"
      >
        Available for Software Development & Data Analytics roles
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl"
      >
        Ethan Lobo: Software Developer &amp; Cognitive Scientist.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-6 max-w-2xl text-lg text-slate-300"
      >
        I transform Applied Cognition &amp; Neuroscience insights into efficient, human-centered software systems that are measurable, scalable, and intuitive.
      </motion.p>
    </section>
  );
}
