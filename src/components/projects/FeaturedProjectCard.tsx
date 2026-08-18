import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ExternalLink, Sparkles, ArrowRight } from 'lucide-react';
import { ProjectVisual } from './ProjectVisual';
import type { ProjectItem } from '@/types/projects';
import { useRouter } from '@/hooks/useRouter';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { usePointer } from '@/hooks/usePointer';
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

export interface FeaturedProjectCardProps {
  project: ProjectItem;
  className?: string;
}

export const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({ project, className }) => {
  const prefersReduced = useReducedMotion();
  const { navigate } = useRouter();
  const { setPointerState, resetPointerState } = usePointer();

  return (
    <motion.article
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'group/featured relative flex flex-col gap-8 p-6 sm:p-10 md:p-12 rounded-xl border border-border bg-card shadow-subtle hover:border-border-strong transition-colors',
        className
      )}
    >
      {/* 1. Context Marker & Status */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-border text-xs font-mono">
        <div className="flex items-center gap-2 text-accent font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
          <span>FEATURED BUILD // {project.context}</span>
        </div>

        <div className="flex items-center gap-3 text-muted-foreground">
          <span className="px-2.5 py-0.5 rounded-sm bg-elevated border border-border text-[10px] font-semibold text-foreground font-mono">
            WEB3 ESCROW PROTOCOL
          </span>
          <span className="text-[11px] font-mono">STELLAR NETWORK</span>
        </div>
      </div>

      {/* 2. Interactive Large Visual Architecture (Dominant Visual - 60-70%) */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => navigate(project.slug)}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && navigate(project.slug)}
        onMouseEnter={() => setPointerState('view', 'VIEW')}
        onMouseLeave={resetPointerState}
        aria-label={`Interactive architectural schematic for ${project.title}. Press Enter to read full case study.`}
        className="cursor-pointer transition-transform duration-200 group-hover/featured:scale-[1.005] rounded-lg focus-visible:outline-2 focus-visible:outline-accent"
      >
        <ProjectVisual type={project.visualType} />
      </div>

      {/* 3. Headline & Subtitle & Actions Bar */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pt-2">
        <div className="flex flex-col gap-2 max-w-2xl">
          <h3 className="project-monumental text-foreground uppercase tracking-tight">
            {project.title}
          </h3>
          <p className="text-lg sm:text-xl font-bold text-foreground/90 font-display">
            {project.subtitle}
          </p>
          <p className="editorial-lead text-muted-foreground text-sm sm:text-base">
            {project.summary}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <a
            href={project.slug}
            onClick={(e) => {
              e.preventDefault();
              navigate(project.slug);
            }}
            onMouseEnter={() => setPointerState('link')}
            onMouseLeave={resetPointerState}
            aria-label={`Read dedicated case study for ${project.title}`}
            className="group/btn inline-flex items-center gap-2 px-5 py-3 min-h-[44px] rounded-md bg-accent hover:bg-accent-hover text-accent-foreground text-xs font-mono font-semibold transition-colors duration-150 shadow-subtle active:scale-[0.98] cursor-pointer focus-visible:outline-2 focus-visible:outline-accent"
          >
            <span>Read Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover/btn:translate-x-0.5" aria-hidden="true" />
          </a>

          <a
            href="https://sure-d.vercel.app/"
            target="_blank"
            rel="noreferrer noopener"
            onMouseEnter={() => setPointerState('link')}
            onMouseLeave={resetPointerState}
            aria-label={`Open live product demo for ${project.title} (opens in a new tab)`}
            className="inline-flex items-center gap-2 px-4 py-3 min-h-[44px] rounded-md border border-border hover:border-border-strong bg-elevated text-foreground text-xs font-mono font-medium transition-colors duration-150 shadow-subtle active:scale-[0.98] cursor-pointer focus-visible:outline-2 focus-visible:outline-accent"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" aria-hidden="true" />
          </a>

          {project.repositoryUrl && (
            <a
              href={project.repositoryUrl}
              target="_blank"
              rel="noreferrer noopener"
              onMouseEnter={() => setPointerState('link')}
              onMouseLeave={resetPointerState}
              aria-label={`View GitHub repository for ${project.title} (opens in a new tab)`}
              className="inline-flex items-center gap-2 px-4 py-3 min-h-[44px] rounded-md border border-border hover:border-border-strong bg-elevated text-foreground text-xs font-mono font-medium transition-colors duration-150 active:scale-[0.98] cursor-pointer focus-visible:outline-2 focus-visible:outline-accent"
            >
              <GitHubIcon className="w-3.5 h-3.5 text-muted-foreground" />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>

      {/* 4. Compact Contribution & Technology Bar */}
      {project.myContributions && project.myContributions.length > 0 && (
        <div className="p-5 rounded-lg bg-surface border border-border flex flex-col gap-3">
          <div className="flex items-center justify-between border-b border-border pb-2 text-[11px] font-mono text-muted-foreground font-semibold uppercase tracking-wider">
            <span>MY ROLE CONTRIBUTIONS</span>
            <span>STELLAR BUILD STATION SPRINT</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.myContributions.map((contrib) => (
              <div key={contrib} className="flex items-center gap-2 text-xs text-foreground">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" aria-hidden="true" />
                <span>{contrib}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. Technology Stack Pills */}
      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border">
        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mr-2">
          STACK:
        </span>
        {project.mainTechnologies.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 rounded-sm bg-elevated border border-border text-[11px] font-mono font-medium text-foreground"
          >
            {tech}
          </span>
        ))}
        {project.supportingTechnologies?.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 rounded-sm bg-card border border-border text-[10px] font-mono text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
};
