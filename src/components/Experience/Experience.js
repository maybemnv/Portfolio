import React from 'react';
import { portfolioData } from '../../data/portfolio';
import './Experience.css';

const Experience = () => {
  const { experience, education } = portfolioData;

  return (
    <section className="section-padding" id="experience">
      <h2 className="section-title">
        <span className="hash">#</span> Training_History
      </h2>

      <div className="experience-container">
        <div className="log-header">
          <span>EPOCH</span>
          <span>LOSS</span>
          <span>ACCURACY</span>
          <span>VAL_ACC</span>
        </div>

        {/* Work Experience */}
        {experience.map((exp, index) => (
          <div key={`exp-${index}`} className="log-entry">
            <div className="log-meta">
              <span className="epoch-count">Epoch {experience.length - index}/{experience.length + education.length}</span>
              <span className="metric-value">0.0{index + 1}2</span>
              <span className="metric-value">0.9{8 + index}</span>
              <span className="metric-value">0.9{7 + index}</span>
            </div>
            <div className="log-details sharp-box">
              <div className="role-header">
                <h3 className="role-title">{exp.role}</h3>
                <span className="company-name">@ {exp.company}</span>
              </div>
              <p className="timeline-date">{exp.timeline}</p>
              {exp.logo && (
                <img src={exp.logo} alt={exp.company} className="company-logo" />
              )}
            </div>
          </div>
        ))}

        {/* Education (treated as early training epochs) */}
        {education.map((edu, index) => (
          <div key={`edu-${index}`} className="log-entry education">
             <div className="log-meta">
              <span className="epoch-count">Epoch {index + 1}/Init</span>
              <span className="metric-value">0.8{index}5</span>
              <span className="metric-value">0.7{index}2</span>
              <span className="metric-value">0.6{9 + index}</span>
            </div>
            <div className="log-details sharp-box">
              <div className="role-header">
                <h3 className="role-title">{edu.degree}</h3>
                <span className="company-name">@ {edu.school}</span>
              </div>
              <p className="timeline-date">{edu.timeline}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
