'use client';

import { portfolioData } from '@/data/portfolio';
import { useInView } from '@/hooks/useInView';

export default function About() {
  const { ref, inView } = useInView();
  const { about } = portfolioData.personalInfo;

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-8 animate-section ${inView ? 'visible' : ''}`}
    >
      <div className="sharp-box p-6 font-mono text-sm">
        <div className="text-accent mb-4 text-xs border-b border-border pb-2">
          ~/manav/about.sh
        </div>
        {about.map((para, i) => (
          <div key={i} className="flex gap-3 mb-4 last:mb-0">
            <span className="text-accent shrink-0">&gt;_</span>
            <p className="text-text-secondary leading-relaxed">{para}</p>
          </div>
        ))}
        <span className="inline-block w-2 h-4 bg-accent mt-2" style={{ animation: 'blink 1s step-end infinite' }} />
      </div>
    </section>
  );
}
