'use client';

import { useState, useEffect, useRef } from 'react';

export function useScrollSpy(ids: string[]): string {
  const [active, setActive] = useState('');
  const idsKey = ids.join(',');
  const idsRef = useRef(ids);
  idsRef.current = ids;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { threshold: 0.4 }
    );

    idsRef.current.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idsKey]);

  return active;
}
