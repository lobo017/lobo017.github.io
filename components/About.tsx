import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function About() {
  return (
    <section className="section-shell" id="about" aria-label="About Ethan Lobo">
      <Reveal>
        <SectionHeading eyebrow="About" title="Cognitive Science & Software Engineering." />
      </Reveal>
      <Reveal delay={0.1}>
        <div className="card-surface p-8 md:p-10">
          <p className="max-w-3xl leading-relaxed text-slate-200">
            I think in systems. My background is in Cognitive Science, but I realized early on that I wanted to build the tools people use, not just study them.
            <br /><br />
            Currently, I’m wrapping up my Master’s in Applied Cognition and Neuroscience at UT Dallas while working in IT infrastructure. I act as a bridge between technical complexity and human needs—whether that’s analyzing production data for renewables or solving identity management issues for university staff.
            <br /><br />
            Outside of work, I value community. I’ve held leadership roles in Kappa Theta Pi and stay grounded through soccer and chess. I believe in mentorship, clear communication, and doing the work properly the first time.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
