import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, AlertCircle, Lightbulb } from 'lucide-react';
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

export interface SecondaryProjectCardProps {
  project: ProjectItem;
  className?: string;
}

export const SecondaryProjectCard: React.FC<SecondaryProjectCardProps> = ({ project, className }) => {
  const prefersReduced = useReducedMotion();
  const { navigate } = useRouter();
  const { setPointerState, resetPointerState } = usePointer();

  return (
    <motion.article
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
      whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'group/card relative flex flex-col justify-between gap-6 p-6 sm:p-8 rounded-lg border border-border bg-card shadow-card hover:border-border-strong transition-colors',
        className
      )}
    >
      <div className="flex flex-col gap-5">
        {/* Context Tag Header */}
        <div className="flex items-center justify-between pb-3 border-b border-border text-xs font-mono text-muted-foreground">
          <span className="text-foreground font-semibold uppercase">{project.context}</span>
          <span className="px-2 py-0.5 rounded bg-surface border border-border text-[10px] uppercase font-mono font-semibold">
            {project.category}
          </span>
        </div>

        {/* Visual Schematic */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => navigate(project.slug)}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && navigate(project.slug)}
          onMouseEnter={() => setPointerState('view', 'VIEW')}
          onMouseLeave={resetPointerState}
          aria-label={`Visual schematic for ${project.title}. Press Enter to read full case study.`}
          className="cursor-pointer transition-transform duration-200 group-hover/card:scale-[1.006] rounded focus-visible:outline-2 focus-visible:outline-accent"
        >
          <ProjectVisual type={project.visualType} />
        </div>

        {/* Title & Subtitle */}
        <div className="flex flex-col gap-1.5 pt-1">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm font-semibold text-foreground/90 font-display">
            {project.subtitle}
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-0.5 font-sans">
            {project.summary}
          </p>
        </div>

        {/* Problem & Solution Mini-Blocks */}
        {(project.problem || project.solution) && (
          <div className="flex flex-col gap-2 p-3.5 rounded bg-surface border border-border text-xs">
            {project.problem && (
              <div className="flex items-start gap-2">
                <AlertCircle className="w-3.5 h-3.5 text-accent-secondary shrink-0 mt-0.5" />
                <div>
                  <span className="text-muted-foreground font-mono text-[10px] uppercase font-semibold">Problem: </span>
                  <span className="text-foreground/90 font-sans">{project.problem}</span>
                </div>
              </div>
            )}
            {project.solution && (
              <div className="flex items-start gap-2 pt-1.5 border-t border-border/60">
                <Lightbulb className="w-3.5 h-3.5 text-signal shrink-0 mt-0.5" />
                <div>
                  <span className="text-muted-foreground font-mono text-[10px] uppercase font-semibold">Solution: </span>
                  <span className="text-foreground/90 font-sans">{project.solution}</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* My Contribution Snippet */}
        {project.myContributions && project.myContributions.length > 0 && (
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] font-mono text-muted-subtle uppercase tracking-wider">
              KEY CONTRIBUTIONS:
            </span>
            <div className="flex flex-col gap-1 text-xs text-foreground">
              {project.myContributions.slice(0, 2).map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 text-accent shrink-0 mt-0.5" />
                  <span className="font-sans text-xs">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
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
              className="px-2 py-0.5 rounded bg-card border border-border text-[10px] font-mono text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Actions: Case Study & Repository Button */}
      <div className="flex items-center gap-3 pt-4 border-t border-border">
        <a
          href={project.slug}
          onClick={(e) => {
            e.preventDefault();
            navigate(project.slug);
          }}
          onMouseEnter={() => setPointerState('link')}
          onMouseLeave={resetPointerState}
          aria-label={`Read dedicated case study for ${project.title}`}
          className="group inline-flex items-center justify-center gap-2 flex-1 min-h-[44px] px-4 py-2.5 rounded bg-accent hover:bg-accent-hover text-white text-xs font-mono font-semibold transition-colors duration-150 active:scale-[0.98] cursor-pointer focus-visible:outline-2 focus-visible:outline-accent"
        >
          <span>Read Case Study</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true" />
        </a>

        {project.repositoryUrl && (
          <a
            href={project.repositoryUrl}
            target="_blank"
            rel="noreferrer noopener"
            onMouseEnter={() => setPointerState('link')}
            onMouseLeave={resetPointerState}
            aria-label={`View GitHub repository for ${project.title} (opens in a new tab)`}
            className="group inline-flex items-center justify-center min-h-[44px] px-4 py-2.5 rounded border border-border hover:border-border-strong bg-card hover:bg-elevated text-foreground text-xs font-mono font-medium transition-colors duration-150 active:scale-[0.98] cursor-pointer shrink-0 focus-visible:outline-2 focus-visible:outline-accent"
          >
            <div className="flex items-center gap-2">
              <GitHubIcon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              <span>GitHub</span>
            </div>
          </a>
        )}
      </div>
    </motion.article>
  );
};
