'use client';

import { GitHubCalendar } from 'react-github-calendar';
import { useInView } from '@/hooks/useInView';
import { portfolioData } from '@/data/portfolio';

const theme = { dark: ['#0d1117', '#1f2937', '#1e3a8a', '#2563eb', '#60a5fa'] };

export default function GithubActivity() {
  const { ref, inView } = useInView();

  return (
    <section
      id="github-activity"
      ref={ref as React.RefObject<HTMLElement>}
      className={`mb-8 animate-section ${inView ? 'visible' : ''}`}
      aria-label="GitHub contribution activity"
    >
      <div className="sharp-box p-6">
        <h3 className="font-mono text-white text-lg mb-6">
          <span className="text-accent">#</span> git_commit_log
        </h3>
        <div className="overflow-x-auto pb-2 flex justify-center">
          <GitHubCalendar
            username={portfolioData.personalInfo.githubUsername}
            colorScheme="dark"
            theme={theme}
            blockSize={12}
            blockMargin={4}
            fontSize={12}
          />
        </div>
      </div>
    </section>
  );
}
