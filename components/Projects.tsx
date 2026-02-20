'use client';

import { projects } from '@/data/portfolio';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="ml-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

// Slight rotation variations so cards don't all hover identically
const hoverRotations = ['-0.6deg', '0.4deg', '-0.3deg', '0.5deg', '-0.4deg'];

export function Projects() {
  return (
    <section className="section-shell" id="projects" aria-label="Projects">
      <Reveal>
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          subtitle="A collection of tools and experiments built to simplify workflows and solve practical problems."
        />
      </Reveal>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.08}>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full no-underline">
              <article
                className="project-card card-surface group flex h-full flex-col p-6 transition-all duration-300 hover:border-accent/60 hover:shadow-glow"
                style={{
                  ['--hover-rotate' as string]: hoverRotations[index % hoverRotations.length],
                }}
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="flex items-center text-xl font-semibold">
                    {project.title}
                    <ExternalLinkIcon />
                  </h3>
                  <span className="rounded-full border border-cyan-600/40 bg-cyan-950/30 px-3 py-1 text-xs font-medium text-cyan-200">
                    {project.status}
                  </span>
                </div>
                <p className="leading-relaxed text-slate-300">{project.description}</p>
                <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                  {project.tags.map((tag) => (
                    <li key={tag} className="rounded-md border border-slate-700/50 bg-slate-800/80 px-2.5 py-1 text-xs font-medium text-slate-200">
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
