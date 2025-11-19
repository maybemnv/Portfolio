import React from 'react';
import { portfolioData } from '../../data/portfolio';
import './Hero.css';

const Hero = () => {
  const { personalInfo } = portfolioData;

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="glitch-text" data-text={personalInfo.name}>
            {personalInfo.name}
          </h1>
          <h2 className="hero-title">
            <span className="bracket">[</span>
            {personalInfo.title}
            <span className="bracket">]</span>
          </h2>
          <p className="hero-bio">{personalInfo.about[0]}</p>
          
          <div className="hero-actions">
            <a href={personalInfo.social.email} className="btn-sharp">
              Initialize_Contact()
            </a>
            <a href={personalInfo.social.github} target="_blank" rel="noreferrer" className="btn-sharp outline">
              View_Source
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="dither-box">
            <div className="code-stream">
              {Array(20).fill(0).map((_, i) => (
                <div key={i} className="code-line" style={{ animationDelay: `${i * 0.1}s` }}>
                  {`> analyzing_data_stream_${Math.floor(Math.random() * 9999)}`}
                </div>
              ))}
            </div>
            <div className="dither-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
