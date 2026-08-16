import { useState, useEffect, useCallback } from 'react';

export function useRouter() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname;
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((to: string, options: { scrollToTop?: boolean } = { scrollToTop: true }) => {
    if (typeof window === 'undefined') return;

    if (to.startsWith('/#')) {
      // Navigating back to homepage anchor
      if (window.location.pathname !== '/') {
        window.history.pushState({}, '', to);
        setCurrentPath('/');
        setTimeout(() => {
          const elementId = to.replace('/#', '');
          const el = document.getElementById(elementId);
          if (el) {
            const headerOffset = 80;
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        }, 100);
      } else {
        const elementId = to.replace('/#', '');
        const el = document.getElementById(elementId);
        if (el) {
          const headerOffset = 80;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }
      return;
    }

    if (to.startsWith('#')) {
      // Local hash anchor
      const elementId = to.replace('#', '');
      const el = document.getElementById(elementId);
      if (el) {
        const headerOffset = 80;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
      return;
    }

    // Full route navigation
    window.history.pushState({}, '', to);
    setCurrentPath(to);

    if (options.scrollToTop !== false) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return {
    currentPath,
    navigate,
    isHome: currentPath === '/' || currentPath === '',
    isCaseStudy: currentPath.startsWith('/work/'),
  };
}
