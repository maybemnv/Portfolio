'use client';

import { portfolioData } from '@/data/portfolio';

export default function Socials() {
  const { social } = portfolioData.personalInfo;

  return (
    <section id="socials" className="pb-12 flex justify-center">
      <div className="flex flex-wrap gap-3 justify-center">
        {social.map((item) => (
          <a
            key={item.name}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${item.name} (opens in new tab)`}
            className="sharp-box flex items-center gap-3 px-5 py-3 min-w-[130px] justify-center text-text-primary transition-all duration-200"
          >
            <span className="text-accent text-lg flex items-center" aria-hidden="true">{item.icon}</span>
            <span className="font-mono text-sm uppercase">{item.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
