import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Experience } from '@/components/Experience';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { TechMarquee } from '@/components/TechMarquee';

export default function Home() {
  return (
    <main className="pb-16">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <TechMarquee />
      <Contact />
    </main>
  );
}
