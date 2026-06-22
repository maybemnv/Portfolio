'use client';

import { portfolioData } from '@/data/portfolio';
import { useInView } from '@/hooks/useInView';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const { ref, inView } = useInView();

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 animate-section ${inView ? 'visible' : ''}`}
    >
      <h2 className="section-title text-white text-2xl">
        <span className="hash">#</span> Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {portfolioData.projects.map((project) => (
          <div
            key={project.name}
            className="sharp-box p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-mono font-bold text-white text-base">{project.name}</h3>
                <span className="font-mono text-xs text-text-secondary shrink-0 ml-2">{project.timeline}</span>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-mono text-xs text-accent bg-accent/10 px-2 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3 mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.name} on GitHub`}
                className="flex items-center gap-2 font-mono text-sm text-text-primary border border-border px-3 py-2 transition-all hover:border-accent hover:text-accent"
              >
                <FaGithub aria-hidden="true" /> git checkout
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} live demo`}
                  className="flex items-center gap-2 font-mono text-sm text-text-primary border border-border px-3 py-2 transition-all hover:border-accent hover:text-accent"
                >
                  <FaExternalLinkAlt aria-hidden="true" /> live demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
