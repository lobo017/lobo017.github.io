import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const highlights = [
  { label: 'Education', value: 'M.S. Applied Cognition & Neuroscience, UT Dallas' },
  { label: 'Current role', value: 'Service Desk Analyst, UTD OIT' },
  { label: 'Focus areas', value: 'Python · Backend Systems · Data Pipelines · Automation' },
  { label: 'Leadership', value: 'President & VP Internal Affairs, Kappa Theta Pi' },
  { label: 'Driven by', value: 'Root-cause analysis, workflow automation, system reliability' },
];

export function About() {
  return (
    <section className="section-shell" id="about" aria-label="About Ethan Lobo">
      <Reveal>
        <SectionHeading eyebrow="About" title="Who I am" />
      </Reveal>
      <Reveal delay={0.1}>
        <div className="card-surface p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-[2fr_1fr] md:gap-12">
            {/* Narrative column */}
            <div className="max-w-3xl space-y-4 leading-relaxed text-slate-200">
              <p>
                I notice broken processes the way most people notice typos. That instinct drives everything I build — Python pipelines that replace manual work, diagnostic scripts that find root causes, crawlers that structure messy data.
              </p>
              <p>
                I started in Cognitive Science because I wanted to understand how people process information and make decisions. That curiosity pulled me into engineering — where I could apply the same kind of structured thinking to systems, data, and automation.
              </p>
              <p>
                Now, finishing my M.S. in Applied Cognition &amp; Neuroscience at UT Dallas, I spend my time writing Python that does real work: automating reporting pipelines at a renewables company, diagnosing identity management failures across 30k+ users, and building crawlers that ingest and transform web data. The question is always the same: <em className="text-cyan-200 not-italic font-medium">where does this process break, and what can be automated instead?</em>
              </p>
              <p>
                Outside of technical work, I led Kappa Theta Pi as President and VP of Internal Affairs — managing teams, running events, and learning that good engineering culture runs on honest feedback and clear communication. Long term, I want to lead teams that build things worth maintaining.
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
