import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Experience } from '@/components/Experience';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { TechMarquee } from '@/components/TechMarquee';

export default function Home() {
  return (
    <main className="pb-0">
      <Header />
      <Hero />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Experience />
      <div className="section-divider" />
      <Projects />
      <div className="section-divider" />
      <TechMarquee />
      <div className="section-divider" />
      <Contact />
      <Footer />
    </main>
  );
}
