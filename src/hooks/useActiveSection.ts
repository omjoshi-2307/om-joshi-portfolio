import { useState, useEffect } from 'react';
import type { SectionId } from '@/types';

/**
 * High-performance active section tracker using IntersectionObserver.
 * Eliminates continuous DOM reads and layout thrashing during scrolling.
 */
export function useActiveSection(sectionIds: SectionId[], defaultSection: SectionId = 'hero'): SectionId {
  const [activeSection, setActiveSection] = useState<SectionId>(defaultSection);

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionIds.length) return;

    if (typeof window.IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.id as SectionId;
              if (sectionIds.includes(id)) {
                setActiveSection((prev) => (prev !== id ? id : prev));
              }
            }
          });
        },
        {
          rootMargin: '-20% 0px -65% 0px',
          threshold: 0,
        }
      );

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });

      return () => {
        observer.disconnect();
      };
    } else {
      let ticking = false;
      const handleScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const scrollPosition = window.scrollY + 160;

            for (let i = sectionIds.length - 1; i >= 0; i--) {
              const id = sectionIds[i];
              const element = document.getElementById(id);
              if (element && scrollPosition >= element.offsetTop) {
                setActiveSection((prev) => (prev !== id ? id : prev));
                ticking = false;
                return;
              }
            }

            setActiveSection((prev) => (prev !== defaultSection ? defaultSection : prev));
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [sectionIds, defaultSection]);

  return activeSection;
}
