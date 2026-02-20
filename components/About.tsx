import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const highlights = [
  { label: 'Studying', value: 'M.S. Applied Cognition & Neuroscience' },
  { label: 'Working at', value: 'UT Dallas OIT' },
  { label: 'Focus', value: 'Computational Models & Intelligent Systems.' },
  { label: 'Led', value: 'President & VP Internal Affairs, KTP' },
];

export function About() {
  return (
    <section className="section-shell" id="about" aria-label="About Ethan Lobo">
      <Reveal>
        <SectionHeading eyebrow="About" title="Things to know" />
      </Reveal>
      <Reveal delay={0.1}>
        <div className="card-surface p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-[2fr_1fr] md:gap-12">
            {/* Narrative column */}
            <div className="max-w-3xl leading-relaxed text-slate-200">
              <p>
                I notice inefficiencies the way most people notice typos — once I see one, I can&apos;t leave it alone. That instinct shapes how I approach everything: software, data, teams, processes.
              </p>
              <p className="mt-4">
                I started in Cognitive Science at UT Dallas because I wanted to understand how people process information and make decisions. That curiosity pulled me toward engineering. Now, finishing my M.S. in Applied Cognition and Neuroscience, I spend most of my time building tools and workflows that actually improve how people work — automating reporting pipelines for a renewables company, diagnosing identity management failures across a 30k-user university, that kind of thing. The question is always the same: what is this system doing, and how should it work instead?
              </p>
              <p className="mt-4">
                Outside of technical work, I care about the people around me. As President and VP of Internal Affairs for Kappa Theta Pi, I learned that good teams run on honest feedback, clear communication, and patience. I carry that into everything. Long term, I want to lead teams that build things worth using — not just write code, but shape how it gets built and why.
              </p>
            </div>

            {/* Quick-glance column */}
            <div className="flex flex-col gap-4">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-xl border border-cyan-900/20 bg-slate-900/40 px-4 py-3">
                  <p className="text-xs font-medium uppercase tracking-widest text-cyan-400">{item.label}</p>
                  <p className="mt-1 text-sm text-slate-200">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
