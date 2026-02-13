import { projects } from '@/data/portfolio';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Projects() {
  return (
    <section className="section-shell" id="projects" aria-label="Projects">
      <Reveal>
        <SectionHeading
          eyebrow="Projects"
          title="Flagship builds"
          subtitle="Tools for productivity, analysis, and discovery."
        />
      </Reveal>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.08}>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full no-underline">
              <article className="card-surface group h-full p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-accent/60">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="rounded-full border border-cyan-600/40 px-3 py-1 text-xs text-cyan-200">{project.status}</span>
                </div>
                <p className="text-slate-300">{project.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag} className="rounded-md bg-slate-800 px-2 py-1 text-xs text-slate-200">
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
