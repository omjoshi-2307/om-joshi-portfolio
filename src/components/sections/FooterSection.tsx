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
    <footer className="w-full border-t border-border py-12 bg-surface-footer text-muted-foreground transition-colors">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <span className="font-semibold text-foreground">{siteIdentity.name}</span>
          <span className="text-border">/</span>
          <span>© {new Date().getFullYear()}</span>
          <span className="text-border">/</span>
          <span>Pune, India (IST UTC+5:30)</span>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-[11px] text-muted-subtle hidden md:inline">
            DESIGNED WITH EDITORIAL RESTRAINT
          </span>

          <a
            href="#top"
            onClick={handleBackToTop}
            className="group inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-accent rounded-sm py-1.5 px-3 border border-border bg-surface hover:bg-card shadow-subtle"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-accent transition-transform duration-200 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </Container>
    </footer>
  );
};
