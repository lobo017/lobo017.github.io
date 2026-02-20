import { skillCategories } from '@/data/portfolio';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function SkillsGrid() {
  return (
    <section className="section-shell" id="skills" aria-label="Technical Skills">
      <Reveal>
        <SectionHeading eyebrow="Skills" title="Technical toolkit" />
      </Reveal>
      <Reveal delay={0.1}>
        <div className="card-surface p-8 md:p-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((cat) => (
              <div key={cat.label}>
                <h3 className="mb-3 text-sm font-medium uppercase tracking-widest text-cyan-400">
                  {cat.label}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-cyan-700/40 bg-cyan-900/10 px-3.5 py-1.5 text-sm text-cyan-100"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
