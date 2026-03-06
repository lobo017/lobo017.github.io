'use client';

import { skillCategories } from '@/data/portfolio';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
import { CategoryCard, ToolkitPanel } from '@/components/spline/ToolkitPanel';

export function SkillsGrid() {
  return (
    <section className="section-shell" id="skills" aria-label="Technical Skills">
      <Reveal>
        <SectionHeading
          eyebrow="Skills"
          title="Technical toolkit"
          subtitle="These are some of the tools I use most often. The stack usually depends on the problem."
        />
      </Reveal>
      <Reveal delay={0.1}>
        <ToolkitPanel>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            {skillCategories.map((cat, index) => (
              <CategoryCard
                key={cat.label}
                label={cat.label}
                skills={cat.skills}
                index={index}
              />
            ))}
          </div>
        </ToolkitPanel>
      </Reveal>
    </section>
  );
}
