'use client';

import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 font-mono text-sm text-accent border border-accent bg-bg/90 backdrop-blur-sm px-4 py-3 transition-all hover:bg-accent hover:text-black hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}
