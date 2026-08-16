import { useState, useEffect } from 'react';

interface ScrollPosition {
  scrollY: number;
  isScrolled: boolean;
  scrollDirection: 'up' | 'down' | null;
}

/**
 * Highly optimized scroll position hook that avoids unnecessary React re-renders.
 */
export function useScrollPosition(threshold = 24): ScrollPosition {
  const [scrollState, setScrollState] = useState<ScrollPosition>({
    scrollY: 0,
    isScrolled: false,
    scrollDirection: null,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const isScrolled = currentScrollY > threshold;
          const direction = currentScrollY > lastScrollY ? 'down' : currentScrollY < lastScrollY ? 'up' : null;

          setScrollState((prev) => {
            // Only update state when values genuinely change to prevent render thrashing
            if (
              prev.isScrolled === isScrolled &&
              prev.scrollDirection === direction &&
              Math.abs(prev.scrollY - currentScrollY) < 10
            ) {
              return prev;
            }

            return {
              scrollY: currentScrollY,
              isScrolled,
              scrollDirection: direction,
            };
          });

          lastScrollY = currentScrollY;
          ticking = false;
        });

        ticking = true;
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrollState;
}

/**
 * Specialized hook for header background/blur changes with zero re-renders outside threshold transitions.
 */
export function useIsScrolled(threshold = 24): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentIsScrolled = window.scrollY > threshold;
          setIsScrolled((prev) => (prev !== currentIsScrolled ? currentIsScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
}
