import React from 'react';
import { portfolioData } from '../../data/portfolio';
import './Socials.css';

const Socials = () => {
  const { social } = portfolioData.personalInfo;

  return (
    <section className="socials-section">
      <div className="socials-grid">
        {social.map((item, index) => (
          <a 
            key={index} 
            href={item.link} 
            target="_blank" 
            rel="noreferrer" 
            className="social-btn sharp-box"
          >
            <span className="social-icon">{item.icon}</span>
            <span className="social-name">{item.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Socials;
