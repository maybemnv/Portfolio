import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Socials from '@/components/Socials/Socials';
import GithubActivity from '@/components/GithubActivity/GithubActivity';
import Projects from '@/components/Projects/Projects';
import Experience from '@/components/Experience/Experience';
import Skills from '@/components/Skills/Skills';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';

export default function Home() {
  return (
    <div className="relative" style={{ backgroundColor: 'var(--bg-color)' }}>
      <div className="scanline" />
      <Navbar />
      <main className="max-w-5xl mx-auto px-5 pt-24">
        <Hero />
        <About />
        <Socials />
        <GithubActivity />
        <Projects />
        <Experience />
        <Skills />
      </main>
      <ScrollToTop />
    </div>
  );
}
