import React from 'react';
import { Container } from '@/components/layout/Container';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { ArrowUp } from 'lucide-react';
import { siteIdentity } from '@/config/identity';

export const FooterSection: React.FC = () => {
  const prefersReduced = useReducedMotion();

  const handleBackToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: prefersReduced ? 'auto' : 'smooth',
    });
  };

  return (
    <footer className="w-full border-t border-border/80 py-8 bg-surface/30 text-muted-foreground transition-colors">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-foreground">{siteIdentity.name}</span>
          <span>•</span>
          <span>© {new Date().getFullYear()}</span>
          <span>•</span>
          <span>Pune, India</span>
        </div>

        <a
          href="#top"
          onClick={handleBackToTop}
          className="group inline-flex items-center gap-1.5 hover:text-foreground transition-colors cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-accent rounded-sm py-1 px-2"
          aria-label="Back to top of page"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5 text-accent transition-transform duration-200 group-hover:-translate-y-0.5" />
        </a>
      </Container>
    </footer>
  );
};
