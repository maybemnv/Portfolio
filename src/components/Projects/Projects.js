import React from 'react';
import { portfolioData } from '../../data/portfolio';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

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
            
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                <FaGithub /> git checkout
              </a>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer" className="project-link demo-link">
                  <FaExternalLinkAlt /> live demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
