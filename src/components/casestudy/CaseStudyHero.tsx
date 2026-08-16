import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import type { ProjectCaseStudy } from '@/types/projects';
import { useReducedMotion } from '@/hooks/useReducedMotion';
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

export interface CaseStudyHeroProps {
  caseStudy: ProjectCaseStudy;
  onBackToWork: () => void;
  className?: string;
}

export const CaseStudyHero: React.FC<CaseStudyHeroProps> = ({
  caseStudy,
  onBackToWork,
  className,
}) => {
  const prefersReduced = useReducedMotion();

  return (
    <div className={cn('flex flex-col gap-8 pt-8 pb-12 border-b border-border', className)}>
      {/* Top Back Link & Context Metadata */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <a
          href="/#projects"
          onClick={(e) => {
            e.preventDefault();
            onBackToWork();
          }}
          aria-label="Back to selected work index on homepage"
          className="group inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors cursor-pointer rounded-sm focus-visible:outline-2 focus-visible:outline-accent"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-150 group-hover:-translate-x-1 text-accent" aria-hidden="true" />
          <span>BACK TO SELECTED WORK</span>
        </a>

        <div className="flex items-center gap-3 text-xs font-mono">
          <span className="text-accent font-semibold uppercase tracking-widest">
            {caseStudy.context}
          </span>
          {caseStudy.timeline && (
            <>
              <span className="text-border-strong" aria-hidden="true">•</span>
              <span className="text-muted-subtle">{caseStudy.timeline}</span>
            </>
          )}
        </div>
      </div>

      {/* Main Monumental Heading & Subtitle */}
      <div className="flex flex-col gap-4 max-w-4xl">
        <motion.h1
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="section-monumental text-foreground uppercase tracking-tight"
        >
          {caseStudy.title}
        </motion.h1>

        <motion.p
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-foreground/90 leading-tight"
        >
          {caseStudy.subtitle}
        </motion.p>

        <motion.p
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="editorial-lead text-muted-foreground mt-2 max-w-3xl"
        >
          {caseStudy.summary}
        </motion.p>
      </div>

      {/* Action Links Bar */}
      {(caseStudy.links.liveDemo || caseStudy.links.repository) && (
        <motion.div
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-3 pt-2"
        >
          {caseStudy.links.liveDemo && (
            <a
              href={caseStudy.links.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live product demo for ${caseStudy.title} (opens in a new tab)`}
              className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-md bg-accent hover:bg-accent-hover text-accent-foreground text-xs font-mono font-semibold transition-colors duration-150 shadow-subtle cursor-pointer focus-visible:outline-2 focus-visible:outline-accent active:scale-[0.98]"
            >
              <span>View Live Product Demo</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          )}

          {caseStudy.links.repository && (
            <a
              href={caseStudy.links.repository}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source code repository for ${caseStudy.title} (opens in a new tab)`}
              className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-md border border-border hover:border-border-strong bg-elevated hover:bg-card text-foreground text-xs font-mono font-medium transition-colors duration-150 shadow-subtle cursor-pointer focus-visible:outline-2 focus-visible:outline-accent active:scale-[0.98]"
            >
              <GitHubIcon className="w-4 h-4 text-muted-foreground" />
              <span>{caseStudy.links.repositoryName || 'View Source Code'}</span>
            </a>
          )}
        </motion.div>
      )}
    </div>
  );
};
