import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const highlights = [
  { label: 'Education', value: 'M.S. Applied Cognition & Neuroscience, UT Dallas' },
  { label: 'Current role', value: 'Service Desk Analyst, UTD OIT' },
  { label: 'Focus areas', value: 'Systems Design, Web Applications, Automation, Data Pipelines' },
  { label: 'Leadership', value: 'President & VP Internal Affairs, Kappa Theta Pi' },
  { label: 'Driven by', value: 'Building tools that actually get used' },
];

export function About() {
  return (
    <section className="section-shell" id="about" aria-label="About Ethan Lobo">
      <Reveal>
        <SectionHeading eyebrow="About" title="About" />
      </Reveal>
      <Reveal delay={0.1}>
        <div className="card-surface p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-[2fr_1fr] md:gap-12">
            {/* Narrative column */}
            <div className="max-w-3xl space-y-4 leading-relaxed text-slate-200">
              <p>
                I originally studied cognitive science because I was interested in how people process information and make decisions. Over time that interest pulled me toward software and system design.
              </p>
              <p>
                When I start working on a problem, I usually begin by asking what the system actually needs to do. From there I choose the tools that make the most sense for the job.
              </p>
              <p>
                Most of my time now goes into building tools, web apps, and automation systems. Sometimes that means writing backend services or data pipelines. 
                <br/>
                <br/>
                Other times it means building interfaces that make complicated systems easier to use.
              </p>
              <p>
                Outside of technical work I served as President and VP of Internal Affairs for Kappa Theta Pi. That experience taught me a lot about running projects, coordinating teams, and turning ideas into finished work.
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
