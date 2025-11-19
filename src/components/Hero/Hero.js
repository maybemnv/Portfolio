import React from 'react';
import { portfolioData } from '../../data/portfolio';
import './Hero.css';

const Hero = () => {
  const { personalInfo } = portfolioData;

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <div className="status-badge">
            <span className="status-dot"></span>
            SYSTEM_ONLINE
          </div>
          
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
          <div className="neural-box sharp-box">
            <div className="neural-grid">
              {/* Simulated Nodes */}
              {[...Array(12)].map((_, i) => (
                <div key={i} className="node" style={{ 
                  left: `${Math.random() * 80 + 10}%`, 
                  top: `${Math.random() * 80 + 10}%`,
                  animationDelay: `${Math.random() * 2}s`
                }}></div>
              ))}
              {/* Simulated Connections (SVG lines could go here, using CSS lines for simplicity) */}
              <div className="scan-line"></div>
            </div>
            <div className="neural-overlay">
              <span>NEURAL_NET_V1.0</span>
              <span>TRAINING...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
