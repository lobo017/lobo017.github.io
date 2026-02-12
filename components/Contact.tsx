import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Contact() {
  return (
    <section className="section-shell" id="contact" aria-label="Contact Ethan Lobo">
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something meaningful."
          subtitle="Open to software engineering and data analytics opportunities."
        />
      </Reveal>
      <Reveal delay={0.1}>
        <div className="card-surface grid gap-6 p-8 md:grid-cols-[2fr_1fr] md:items-center">
          <p className="text-slate-300">
            The fastest way to connect is through GitHub or LinkedIn. I’d love to discuss opportunities where thoughtful engineering,
            analytics, and human-centered design intersect.
          </p>
          <div className="flex flex-col gap-3">
            <a
              className="focus-ring inline-flex items-center justify-center rounded-lg bg-accent px-4 py-2 font-medium text-slate-950 transition hover:bg-cyan-300"
              href="https://github.com/lobo017"
              target="_blank"
              rel="noreferrer"
            >
              GitHub /lobo017
            </a>
            <a
              className="focus-ring inline-flex items-center justify-center rounded-lg border border-cyan-700/50 px-4 py-2 font-medium text-cyan-100 transition hover:bg-cyan-900/30"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
