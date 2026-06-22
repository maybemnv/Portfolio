'use client';

import Image from 'next/image';
import { portfolioData } from '@/data/portfolio';
import { useInView } from '@/hooks/useInView';

export default function Experience() {
  const { ref, inView } = useInView();
  const { experience, education } = portfolioData;

  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 animate-section ${inView ? 'visible' : ''}`}
    >
      <h2 className="section-title text-white text-2xl">
        <span className="hash">#</span> Training_History
      </h2>

      <div className="font-mono flex flex-col gap-6">
        {/* Header */}
        <div className="hidden sm:grid grid-cols-4 text-xs text-text-secondary px-4 pb-2 border-b border-border" aria-hidden="true">
          <span>EPOCH</span><span>LOSS</span><span>ACCURACY</span><span>VAL_ACC</span>
        </div>

        {experience.map((exp, i) => (
          <div key={`exp-${exp.company}`} className="flex flex-col gap-2 pl-4 border-l-2 border-border hover:border-accent transition-colors group">
            <div className="hidden sm:grid grid-cols-4 text-xs text-text-secondary" aria-hidden="true">
              <span className="text-text-primary font-bold group-hover:text-accent transition-colors">
                Epoch {experience.length - i}/{experience.length + education.length}
              </span>
              <span>0.0{i + 1}2</span>
              <span>0.9{8 + i}</span>
              <span>0.9{7 + i}</span>
            </div>
            <div className="sharp-box p-5">
              <div className="flex flex-wrap justify-between items-center mb-1 gap-2">
                <h3 className="text-white text-sm font-bold">{exp.role}</h3>
                <span className="text-accent text-sm">@ {exp.company}</span>
              </div>
              <p className="text-text-secondary text-xs">{exp.timeline}</p>
              {exp.logo && (
                <Image
                  src={exp.logo}
                  alt={exp.company}
                  width={112}
                  height={28}
                  className="h-7 w-auto mt-3 grayscale hover:grayscale-0 transition-all"
                  loading="lazy"
                />
              )}
            </div>
          </div>
        ))}

        {education.map((edu, i) => (
          <div key={`edu-${edu.school}`} className="flex flex-col gap-2 pl-4 border-l-2 border-border hover:border-accent/40 transition-colors group">
            <div className="hidden sm:grid grid-cols-4 text-xs text-text-secondary" aria-hidden="true">
              <span className="text-text-primary group-hover:text-accent/60 transition-colors">Epoch {i + 1}/Init</span>
              <span>0.8{i}5</span>
              <span>0.7{i}2</span>
              <span>0.6{9 + i}</span>
            </div>
            <div className="sharp-box p-5 opacity-70">
              <div className="flex flex-wrap justify-between items-center mb-1 gap-2">
                <h3 className="text-white text-sm font-bold">{edu.degree}</h3>
                <span className="text-accent/70 text-sm">@ {edu.school}</span>
              </div>
              <p className="text-text-secondary text-xs">{edu.timeline}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
