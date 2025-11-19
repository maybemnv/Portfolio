import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import './GithubActivity.css';

const GithubActivity = () => {
  const customTheme = {
    dark: ['#0d1117', '#1f2937', '#1e3a8a', '#2563eb', '#3b82f6']
  };

  return (
    <section className="github-section sharp-box">
      <h3 className="github-title">
        <span className="hash">#</span> git_commit_log
      </h3>
      <div className="calendar-container">
        <GitHubCalendar 
          username="maybemnv" 
          colorScheme="dark"
          theme={customTheme}
          blockSize={12}
          blockMargin={4}
          fontSize={12}
        />
      </div>
    </section>
  );
};

export default GithubActivity;
