'use client';

import { useState, useEffect, useCallback } from 'react';
import { useScrollSpy } from '@/hooks/useScrollSpy';

const NAV_ITEMS = [
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
];

const NAV_IDS = NAV_ITEMS.map((item) => item.id);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(NAV_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = useCallback((id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-bg/80 backdrop-blur-md border-b border-border' : 'py-6'}`}>
        <div className="max-w-5xl mx-auto px-5 flex justify-between items-center">
          <button
            onClick={() => scrollTo('root')}
            className="font-mono font-bold text-2xl text-white tracking-tighter cursor-pointer"
            aria-label="Manav Kaushal — Home"
          >
            MK<span className="text-accent">.</span>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-8 list-none">
            {NAV_ITEMS.map(({ label, id }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`font-mono text-sm relative pb-1 transition-colors duration-200 cursor-pointer
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-px after:bg-accent
                    after:transition-all after:duration-200
                    ${active === id ? 'text-accent after:w-full' : 'text-text-secondary hover:text-accent after:w-0 hover:after:w-full'}`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden font-mono text-text-secondary hover:text-accent transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? '✕' : '≡'}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        role="navigation"
        aria-label="Mobile navigation"
        className={`fixed top-0 left-0 w-full z-40 bg-bg border-b border-border transition-all duration-300 overflow-hidden md:hidden
        ${open ? 'max-h-64 pt-20' : 'max-h-0'}`}
      >
        <ul className="flex flex-col list-none px-5 pb-6 gap-6">
          {NAV_ITEMS.map(({ label, id }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className={`font-mono text-sm transition-colors cursor-pointer w-full text-left
                  ${active === id ? 'text-accent' : 'text-text-secondary hover:text-accent'}`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
