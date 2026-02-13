import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Contact() {
  return (
    <section
      className="relative overflow-hidden"
      id="contact"
      aria-label="Contact Ethan Lobo"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-cyan-950/20 pointer-events-none" aria-hidden />

      <div className="section-shell relative">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let's talk."
            subtitle="Open to engineering, analytics, and leadership-track roles."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="card-surface grid gap-6 p-8 md:grid-cols-[2fr_1fr] md:items-center">
            <p className="leading-relaxed text-slate-300">
              If you are working on something interesting, or if you think we could build something better together, I want to hear about it. Email and LinkedIn are the fastest ways to reach me.
            </p>
            <div className="flex flex-col gap-3">
              <a
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 font-medium text-slate-950 transition hover:bg-cyan-300"
                href="mailto:ethan4lobo@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                Send a message
              </a>
              <a
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-cyan-700/50 px-4 py-2.5 font-medium text-cyan-100 transition hover:bg-cyan-900/30"
                href="https://www.linkedin.com/in/ethanlobo/"
                target="_blank"
                rel="noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
