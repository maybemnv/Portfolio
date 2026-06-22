'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { portfolioData } from '@/data/portfolio';

const NeuralCanvas = dynamic(() => import('./NeuralCanvas'), { ssr: false });

export default function Hero() {
  const { personalInfo } = portfolioData;
  const emailLink = personalInfo.social.find((s) => s.name === 'Email')?.link ?? '#';
  const githubLink = personalInfo.social.find((s) => s.name === 'GitHub')?.link ?? '#';

  return (
    <section id="hero" className="min-h-[70vh] flex items-center py-8" aria-labelledby="hero-heading">
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-12 items-center w-full">
        {/* Left: text */}
        <div>
          {/* Avatar + status */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <Image
                src="https://avatars.githubusercontent.com/maybemnv"
                alt="Manav Kaushal"
                width={64}
                height={64}
                className="rounded-full ring-2 ring-accent ring-offset-2 ring-offset-bg"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-accent rounded-full shadow-[0_0_8px_#60a5fa] animate-pulse" aria-hidden="true" />
            </div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-accent border border-accent/30 bg-accent/5 px-3 py-1" aria-hidden="true">
              SYSTEM_ONLINE
            </div>
          </div>

          <h1 id="hero-heading" className="text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            {personalInfo.name}
          </h1>

          <h2 className="inline-block mt-2 mb-6 font-mono text-base text-accent bg-accent/10 px-2 py-1">
            <span className="text-text-secondary mr-2">[</span>
            {personalInfo.title}
            <span className="text-text-secondary ml-2">]</span>
          </h2>

          <p className="text-text-secondary text-base max-w-xl leading-relaxed mb-8">
            {personalInfo.about[0]}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={emailLink}
              aria-label="Contact via email"
              className="font-mono font-bold text-sm uppercase px-6 py-3 bg-accent text-black border border-accent transition-all duration-200 hover:bg-transparent hover:text-accent hover:shadow-[0_0_15px_rgba(96,165,250,0.4)] hover:-translate-y-0.5"
            >
              Initialize_Contact()
            </a>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View GitHub profile"
              className="font-mono text-sm uppercase px-6 py-3 border border-border text-text-primary transition-all duration-200 hover:border-accent hover:text-accent hover:-translate-y-0.5"
            >
              View_Source
            </a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download resume (opens in new tab)"
              className="font-mono text-sm uppercase px-6 py-3 border border-border text-text-primary transition-all duration-200 hover:border-accent hover:text-accent hover:-translate-y-0.5"
            >
              Download_Resume()
            </a>
          </div>
        </div>

        {/* Right: Three.js canvas */}
        <div className="hidden md:flex justify-end">
          <div className="sharp-box w-full max-w-sm h-72 overflow-hidden relative" aria-hidden="true">
            <NeuralCanvas />
            <div className="absolute bottom-2 right-3 font-mono text-xs text-accent/80 flex flex-col items-end">
              <span>NEURAL_NET_V1.0</span>
              <span>TRAINING...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
