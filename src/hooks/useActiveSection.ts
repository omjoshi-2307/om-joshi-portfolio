import { useState, useEffect } from 'react';
import type { SectionId } from '@/types';

export function useActiveSection(sectionIds: SectionId[], defaultSection: SectionId = 'hero'): SectionId {
  const [activeSection, setActiveSection] = useState<SectionId>(defaultSection);

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionIds.length) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160; // Offset for navbar header height

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            return;
          }
        }
      }

      setActiveSection(defaultSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, defaultSection]);

  return activeSection;
}
