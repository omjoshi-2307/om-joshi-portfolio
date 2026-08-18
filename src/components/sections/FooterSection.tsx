import React from 'react';
import { Container } from '@/components/layout/Container';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { usePointer } from '@/hooks/usePointer';
import { ArrowUp } from 'lucide-react';
import { siteIdentity } from '@/config/identity';

export const FooterSection: React.FC = () => {
  const prefersReduced = useReducedMotion();
  const { setPointerState, resetPointerState } = usePointer();

  const handleBackToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: prefersReduced ? 'auto' : 'smooth',
    });
  };

  return (
    <footer className="w-full border-t border-border py-10 sm:py-12 bg-surface-footer text-muted-foreground transition-colors font-mono text-xs">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand Identity & Copyright */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1 text-center md:text-left">
          <span className="font-semibold text-foreground">{siteIdentity.name}</span>
          <span className="text-border" aria-hidden="true">/</span>
          <span>© {new Date().getFullYear()}</span>
          <span className="text-border" aria-hidden="true">/</span>
          <span className="text-muted-subtle">B.Tech IT</span>
        </div>

        {/* Center: Geographic Coordinates */}
        <div className="flex items-center gap-2 text-muted-subtle text-[11px] text-center">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
          <span>Pune, Maharashtra, India // IST (UTC+5:30)</span>
        </div>

        {/* Right: Text-First Socials & Back-to-Top Link */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-3">
            <a
              href={siteIdentity.socials.github}
              target="_blank"
              rel="noreferrer noopener"
              onMouseEnter={() => setPointerState('link')}
              onMouseLeave={resetPointerState}
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              aria-label="GitHub Profile (opens in new tab)"
            >
              GitHub
            </a>
            <span className="text-border" aria-hidden="true">•</span>
            <a
              href={siteIdentity.socials.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              onMouseEnter={() => setPointerState('link')}
              onMouseLeave={resetPointerState}
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              aria-label="LinkedIn Profile (opens in new tab)"
            >
              LinkedIn
            </a>
            <span className="text-border" aria-hidden="true">•</span>
            <a
              href={siteIdentity.socials.x}
              target="_blank"
              rel="noreferrer noopener"
              onMouseEnter={() => setPointerState('link')}
              onMouseLeave={resetPointerState}
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              aria-label="X Profile (opens in new tab)"
            >
              X
            </a>
          </div>

          <span className="text-border hidden sm:inline" aria-hidden="true">|</span>

          {/* Inline Back to Top Trigger */}
          <a
            href="#top"
            onClick={handleBackToTop}
            onMouseEnter={() => setPointerState('link')}
            onMouseLeave={resetPointerState}
            className="group inline-flex items-center gap-1.5 text-foreground hover:text-accent transition-colors cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-accent rounded-sm py-1 px-2 border border-border bg-surface hover:bg-elevated shadow-subtle min-h-[36px]"
            aria-label="Back to top of page"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3 text-accent transition-transform duration-150 group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
        </div>
      </Container>
    </footer>
  );
};
