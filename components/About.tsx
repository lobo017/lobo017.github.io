import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function About() {
  return (
    <section className="section-shell" id="about" aria-label="About Ethan Lobo">
      <Reveal>
        <SectionHeading eyebrow="About" title="Built on science, driven by execution." />
      </Reveal>
      <Reveal delay={0.1}>
        <div className="card-surface p-8 md:p-10">
          <p className="max-w-3xl leading-relaxed text-slate-200">
            I completed both my BS and MS at The University of Texas at Dallas, where my MS focused on Applied Cognition &amp;
            Neuroscience. I enjoy connecting research rigor to practical product outcomes. Outside of engineering, I have served in
            leadership within Kappa Theta Pi and stay sharp through soccer and chess—experiences that reinforce teamwork,
            strategy, and resilience.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
