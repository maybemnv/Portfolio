'use client';

import { portfolioData } from '@/data/portfolio';
import { useInView } from '@/hooks/useInView';

export default function Skills() {
  const { ref, inView } = useInView();
  const { featureImportance } = portfolioData;

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
                {skills.map((skill) => (
                  <div key={skill.name} className="sharp-box flex items-center gap-2 px-4 py-2 text-sm text-text-primary">
                    <span className="text-accent flex items-center" aria-hidden="true">{skill.icon}</span>
                    <span className="font-sans">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Feature importance chart */}
        <div className="sharp-box p-8 h-fit" role="img" aria-label={`Feature importance chart: ${featureImportance.map((f) => `${f.label} at ${Math.round(f.value * 100)}%`).join(', ')}`}>
          <h3 className="font-mono text-accent text-sm mb-8">Feature_Importance</h3>
          <div className="flex flex-col gap-6">
            {featureImportance.map((feature, i) => (
              <div key={feature.label} className="grid grid-cols-[110px_1fr_36px] items-center gap-3 font-mono text-xs">
                <span className="text-text-secondary">{feature.label}</span>
                <div className="h-1 bg-border relative">
                  {inView && (
                    <div
                      className="h-full bg-accent animate-fill-bar"
                      style={{
                        animationDelay: `${i * 0.1}s`,
                        '--bar-width': `${Math.round(feature.value * 100)}%`,
                      } as React.CSSProperties}
                    />
                  )}
                </div>
                <span className="text-accent text-right">{feature.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
