import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const highlights = [
  { label: 'Studying', value: 'M.S. Applied Cognition & Neuroscience' },
  { label: 'Working at', value: 'UT Dallas OIT' },
  { label: 'Focus', value: 'Automation, Data, Systems' },
  { label: 'Led', value: 'President & VP Internal Affairs, KTP' },
];

export function About() {
  return (
    <section className="section-shell" id="about" aria-label="About Ethan Lobo">
      <Reveal>
        <SectionHeading eyebrow="About" title="How I think about problems." />
      </Reveal>
      <Reveal delay={0.1}>
        <div className="card-surface p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-[2fr_1fr] md:gap-12">
            {/* Narrative column */}
            <div className="max-w-3xl leading-relaxed text-slate-200">
              <p>
                I notice inefficiencies the way most people notice typos. Once I see one, I cannot leave it alone. That instinct shaped how I approach everything: software, data, teams, and processes.
              </p>
              <p className="mt-4">
                I started in Cognitive Science at UT Dallas because I wanted to understand how people process information and make decisions. That curiosity led me toward engineering. Now, finishing my M.S. in Applied Cognition and Neuroscience, I spend my time building tools and workflows that actually improve how people work. Whether that means automating reporting pipelines for a renewables company or diagnosing identity management failures across a university, the question is always the same: what is this system doing, and how should it work instead?
              </p>
              <p className="mt-4">
                Outside of technical work, I care about the people around me. As President and VP of Internal Affairs for Kappa Theta Pi, I learned that good teams run on honest feedback, clear communication, and patience. I carry that into everything. Long term, I want to lead teams that build things worth using. Not just write code, but shape how it gets built and why.
              </p>
            </div>

            {/* Quick-glance stats column */}
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
