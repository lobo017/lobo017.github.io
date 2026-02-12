import { techStack } from '@/data/portfolio';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const repeated = [...techStack, ...techStack];

export function TechMarquee() {
  return (
    <section className="section-shell overflow-hidden" aria-label="Tech Stack">
      <Reveal>
        <SectionHeading eyebrow="Toolbox" title="Technologies I ship with" />
      </Reveal>
      <div className="card-surface overflow-hidden py-5">
        <div className="animate-marquee flex min-w-max gap-3 px-3">
          {repeated.map((tech, index) => (
            <span key={`${tech}-${index}`} className="rounded-full border border-cyan-700/40 bg-cyan-900/10 px-4 py-2 text-sm text-cyan-100">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
