'use client';

import { useEffect } from 'react';

export function ScrollReveal() {
  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motion.matches || !('IntersectionObserver' in window)) return;
    const elements = [
      ...document.querySelectorAll<HTMLElement>('[data-reveal]'),
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08 },
    );
    elements.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight) return;
      element.classList.add('reveal-ready');
      observer.observe(element);
    });
    const showAll = () => {
      if (motion.matches)
        elements.forEach((element) => element.classList.add('is-visible'));
    };
    motion.addEventListener('change', showAll);
    return () => {
      observer.disconnect();
      motion.removeEventListener('change', showAll);
      elements.forEach((element) => element.classList.remove('reveal-ready'));
    };
  }, []);
  return null;
}
