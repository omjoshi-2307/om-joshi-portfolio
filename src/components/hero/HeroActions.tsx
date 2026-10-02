import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { usePointer } from '@/hooks/usePointer';
import { siteIdentity } from '@/config/identity';
import { cn } from '@/utils/cn';

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export interface HeroActionsProps {
  className?: string;
  onHoverPrimary?: (isHovered: boolean) => void;
  onHoverSecondary?: (isHovered: boolean) => void;
}

export const HeroActions: React.FC<HeroActionsProps> = ({
  className,
  onHoverPrimary,
  onHoverSecondary,
}) => {
  const prefersReduced = useReducedMotion();
  const { setPointerState, resetPointerState } = usePointer();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: prefersReduced ? 'auto' : 'smooth',
      });
    }
  };

  return (
    <motion.div
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
      animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn('flex flex-wrap items-center gap-3 pt-2', className)}
    >
      {/* 1. Primary Action: View Projects */}
      <a
        href="#projects"
        onClick={(e) => handleScrollTo(e, 'projects')}
        onMouseEnter={() => {
          onHoverPrimary?.(true);
          setPointerState('link');
        }}
        onMouseLeave={() => {
          onHoverPrimary?.(false);
          resetPointerState();
        }}
        className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] rounded bg-accent hover:bg-accent-hover text-white text-xs font-mono font-semibold transition-colors duration-150 shadow-subtle active:scale-[0.98] cursor-pointer focus-visible:outline-2 focus-visible:outline-accent"
      >
        <span>View Projects</span>
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true" />
      </a>

      {/* 2. GitHub Profile */}
      <a
        href={siteIdentity.socials.github}
        target="_blank"
        rel="noreferrer noopener"
        onMouseEnter={() => {
          onHoverSecondary?.(true);
          setPointerState('link');
        }}
        onMouseLeave={() => {
          onHoverSecondary?.(false);
          resetPointerState();
        }}
        aria-label="Om Joshi on GitHub (opens in new tab)"
        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] rounded border border-border hover:border-border-strong bg-card hover:bg-elevated text-foreground text-xs font-mono font-medium transition-colors duration-150 shadow-subtle active:scale-[0.98] cursor-pointer focus-visible:outline-2 focus-visible:outline-accent"
      >
        <GitHubIcon className="w-4 h-4 text-muted-foreground" />
        <span>GitHub</span>
      </a>

      {/* 3. LinkedIn Profile */}
      <a
        href={siteIdentity.socials.linkedin}
        target="_blank"
        rel="noreferrer noopener"
        onMouseEnter={() => {
          onHoverSecondary?.(true);
          setPointerState('link');
        }}
        onMouseLeave={() => {
          onHoverSecondary?.(false);
          resetPointerState();
        }}
        aria-label="Om Joshi on LinkedIn (opens in new tab)"
        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] rounded border border-border hover:border-border-strong bg-card hover:bg-elevated text-foreground text-xs font-mono font-medium transition-colors duration-150 shadow-subtle active:scale-[0.98] cursor-pointer focus-visible:outline-2 focus-visible:outline-accent"
      >
        <LinkedInIcon className="w-4 h-4 text-muted-foreground" />
        <span>LinkedIn</span>
      </a>

      {/* 4. Contact Shortcut */}
      <a
        href="#contact"
        onClick={(e) => handleScrollTo(e, 'contact')}
        onMouseEnter={() => setPointerState('link')}
        onMouseLeave={resetPointerState}
        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] rounded border border-border hover:border-border-strong bg-card hover:bg-elevated text-muted-foreground hover:text-foreground text-xs font-mono font-medium transition-colors duration-150 shadow-subtle active:scale-[0.98] cursor-pointer focus-visible:outline-2 focus-visible:outline-accent"
      >
        <Mail className="w-3.5 h-3.5 text-muted-foreground" aria-hidden="true" />
        <span>Get in touch</span>
      </a>
    </motion.div>
  );
};
