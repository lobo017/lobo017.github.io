import { experienceItems } from '@/data/portfolio';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Experience() {
  return (
    <section className="section-shell" id="experience" aria-label="Experience">
      <Reveal>
        <SectionHeading eyebrow="Experience" title="Impact through dependable support and systems thinking." />
      </Reveal>
      <ol className="relative ml-4 border-l border-cyan-900/40 pl-8">
        {experienceItems.map((item, index) => (
          <Reveal key={item.role} delay={0.08 * index}>
            <li className="mb-8">
              <span className="absolute -left-[7px] mt-2 h-3.5 w-3.5 rounded-full bg-accent shadow-glow" aria-hidden />
              <div className="card-surface p-6">
                <p className="text-sm uppercase tracking-wide text-cyan-300">{item.period}</p>
                <h3 className="mt-2 text-xl font-semibold">{item.role}</h3>
                <p className="text-slate-300">{item.company}</p>
                <p className="mt-3 text-slate-300">{item.summary}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
