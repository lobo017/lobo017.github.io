import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function About() {
  return (
    <section className="section-shell" id="about" aria-label="About Ethan Lobo">
      <Reveal>
        <SectionHeading eyebrow="About" title="How I think about problems." />
      </Reveal>
      <Reveal delay={0.1}>
        <div className="card-surface p-8 md:p-10">
          <p className="max-w-3xl leading-relaxed text-slate-200">
            I notice inefficiencies the way most people notice typos. Once I see one, I cannot leave it alone. That instinct shaped how I approach everything: software, data, teams, and processes.
            <br /><br />
            I started in Cognitive Science at UT Dallas because I wanted to understand how people process information and make decisions. That curiosity led me toward engineering. Now, finishing my M.S. in Applied Cognition and Neuroscience, I spend my time building tools and workflows that actually improve how people work. Whether that means automating reporting pipelines for a renewables company or diagnosing identity management failures across a university, the question is always the same: what is this system doing, and how should it work instead?
            <br /><br />
            Outside of technical work, I care about the people around me. As VP of Internal Affairs for Kappa Theta Pi, I learned that good teams run on honest feedback, clear communication, and patience. I carry that into everything. Long term, I want to lead teams that build things worth using. Not just write code, but shape how it gets built and why.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
