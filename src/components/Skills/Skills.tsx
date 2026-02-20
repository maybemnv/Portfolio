'use client';

import { portfolioData } from '@/data/portfolio';
import { useInView } from '@/hooks/useInView';

const FEATURE_LABELS = ['Python', 'Machine Learning', 'Data Analysis', 'React/Frontend', 'Backend/API'];
const FEATURE_WIDTHS = [95, 90, 85, 75, 80];
const FEATURE_VALUES = [0.95, 0.90, 0.85, 0.75, 0.80];

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 animate-section ${inView ? 'visible' : ''}`}
    >
      <h2 className="section-title text-white text-2xl">
        <span className="hash">#</span> Skills_&amp;_Parameters
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16">
        {/* Skill tags */}
        <div className="flex flex-col gap-10">
          {Object.entries(portfolioData.skills).map(([category, skills]) => (
            <div key={category}>
              <h3 className="font-mono text-sm text-text-secondary mb-4 pb-2 border-b border-border">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <div key={i} className="sharp-box flex items-center gap-2 px-4 py-2 text-sm text-text-primary">
                    <span className="text-accent flex items-center">{skill.icon}</span>
                    <span className="font-sans">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Feature importance chart */}
        <div className="sharp-box p-8 h-fit">
          <h3 className="font-mono text-accent text-sm mb-8">Feature_Importance</h3>
          <div className="flex flex-col gap-6">
            {FEATURE_LABELS.map((label, i) => (
              <div key={i} className="grid grid-cols-[110px_1fr_36px] items-center gap-3 font-mono text-xs">
                <span className="text-text-secondary">{label}</span>
                <div className="h-1 bg-border relative">
                  {inView && (
                    <div
                      className="h-full bg-accent animate-fill-bar"
                      style={{
                        animationDelay: `${i * 0.1}s`,
                        '--bar-width': `${FEATURE_WIDTHS[i]}%`,
                      } as React.CSSProperties}
                    />
                  )}
                </div>
                <span className="text-accent text-right">{FEATURE_VALUES[i]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
