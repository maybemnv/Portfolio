import React from 'react';
import { portfolioData } from '../../data/portfolio';
import './Projects.css';

const Projects = () => {
  return (
    <section className="section-padding" id="projects">
      <h2 className="section-title">
        <span className="hash">#</span> Projects
      </h2>
      
      <div className="projects-grid">
        {portfolioData.projects.map((project, index) => (
          <div key={index} className="project-card sharp-box">
            <div className="card-header">
              <h3 className="project-name">{project.name}</h3>
              <span className="project-date">{project.timeline}</span>
            </div>
            
            <p className="project-desc">{project.description}</p>
            
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
            
            <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
              git checkout &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
