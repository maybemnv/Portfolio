import React from 'react';
import Hero from './components/Hero/Hero';
import Socials from './components/Socials/Socials';
import GithubActivity from './components/GithubActivity/GithubActivity';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <div className="scanline"></div>
      <div className="container">
        <Hero />
        <Socials />
        <GithubActivity />
        <Projects />
        <Experience />
        <Skills />
        
        <footer className="footer">
          <p className="dither-text">
            Designed & Built by Manav Kaushal
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;