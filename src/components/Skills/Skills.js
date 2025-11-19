import React from 'react';
import { portfolioData } from '../../data/portfolio';
import './Skills.css';

const Skills = () => {
  return (
    <section className="section-padding" id="skills">
      <h2 className="section-title">
        <span className="hash">#</span> Skills_&_Parameters
      </h2>

      <div className="skills-layout">
        {/* Left: Skill Tags */}
        <div className="skills-container">
          {Object.entries(portfolioData.skills).map(([category, skills]) => (
            <div key={category} className="skill-category">
              <h3 className="category-title">{category}</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item sharp-box">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right: Visualization */}
        <div className="skills-viz sharp-box">
          <h3 className="viz-title">Feature_Importance</h3>
          <div className="bar-chart">
            {['Python', 'Machine Learning', 'Data Analysis', 'React/Frontend', 'Backend/API'].map((label, i) => (
              <div key={i} className="bar-row">
                <span className="bar-label">{label}</span>
                <div className="bar-track">
                  <div 
                    className="bar-fill" 
                    style={{ width: `${[95, 90, 85, 75, 80][i]}%`, animationDelay: `${i * 0.1}s` }}
                  ></div>
                </div>
                <span className="bar-value">{[0.95, 0.90, 0.85, 0.75, 0.80][i]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
