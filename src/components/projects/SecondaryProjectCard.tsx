import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { ProjectVisual } from './ProjectVisual';
import type { ProjectItem } from '@/types/projects';
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
    className={className}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export interface SecondaryProjectCardProps {
  project: ProjectItem;
  className?: string;
}

export const SecondaryProjectCard: React.FC<SecondaryProjectCardProps> = ({ project, className }) => {
  const prefersReduced = useReducedMotion();

  return (
    <motion.article
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl border border-border bg-card/60 backdrop-blur-xs shadow-xs',
        className
      )}
    >
      <div className="flex flex-col gap-6">
        {/* Context Tag */}
        <div className="flex items-center justify-between pb-4 border-b border-border/70 text-xs font-mono text-muted-foreground">
          <span className="text-foreground font-semibold uppercase">{project.context}</span>
          <span className="px-2 py-0.5 rounded bg-surface border border-border text-[10px] uppercase">
            {project.category}
          </span>
        </div>

        {/* Title & Subtitle */}
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base font-medium text-foreground/90">
            {project.subtitle}
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Visual Motif */}
        <ProjectVisual type={project.visualType} />

        {/* Key Contributions */}
        {project.myContributions && project.myContributions.length > 0 && (
          <div className="space-y-2 pt-2">
            <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider block">
              Key Contributions & Learnings
            </span>
            <div className="space-y-1.5">
              {project.myContributions.map((contrib) => (
                <div key={contrib} className="flex items-start gap-2 text-xs text-foreground">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                  <span>{contrib}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.mainTechnologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded bg-surface border border-border text-[11px] font-mono text-foreground font-medium"
            >
              {tech}
            </span>
          ))}
          {project.supportingTechnologies?.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 rounded bg-surface/50 border border-border text-[10px] font-mono text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Repository Action Button */}
      {project.repositoryUrl && (
        <div className="pt-6 mt-6 border-t border-border/70">
          <a
            href={project.repositoryUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center justify-between w-full px-4 py-3 rounded-lg border border-border bg-surface/80 hover:bg-surface text-foreground text-xs font-mono font-medium transition-all duration-200 active:scale-[0.98] cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <GitHubIcon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              <span>{project.repositoryName || 'View Source Code'}</span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-accent transition-colors" />
          </a>
        </div>
      )}
    </motion.article>
  );
};
