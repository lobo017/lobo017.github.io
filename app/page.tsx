import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Experience } from '@/components/Experience';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { SkillsGrid } from '@/components/SkillsGrid';

export default function Home() {
  return (
    <main id="main-content" className="pb-0">
      <Header />
      <Hero />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Experience />
      <div className="section-divider" />
      <Projects />
      <div className="section-divider" />
      <SkillsGrid />
      <div className="section-divider" />
      <Contact />
      <Footer />
    </main>
  );
}
