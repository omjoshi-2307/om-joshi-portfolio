import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Layers, Sparkles } from 'lucide-react';
import { ProjectVisual } from './ProjectVisual';
import type { ProjectItem } from '@/types/projects';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

export interface FeaturedProjectCardProps {
  project: ProjectItem;
  className?: string;
}

export const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({ project, className }) => {
  const prefersReduced = useReducedMotion();

  return (
    <motion.article
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 28 }}
      whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'relative flex flex-col gap-10 p-8 sm:p-10 md:p-12 rounded-3xl border border-border bg-card/60 backdrop-blur-xs shadow-sm',
        className
      )}
    >
      {/* 1. Card Top Bar & Context Marker */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border/70 text-xs font-mono">
        <div className="flex items-center gap-2 text-accent font-semibold uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>FEATURED PRODUCT // {project.context}</span>
        </div>

        <div className="flex items-center gap-3 text-muted-foreground">
          <span className="px-2.5 py-0.5 rounded bg-surface border border-border text-[11px] font-semibold text-foreground">
            WEB3 ESCROW
          </span>
          <span>STELLAR ECOSYSTEM</span>
        </div>
      </div>

      {/* 2. Main Title & Pitch Narrative */}
      <div className="flex flex-col gap-4 max-w-3xl">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-foreground tracking-tight">
          {project.title}
        </h3>
        <p className="text-lg sm:text-xl font-medium text-foreground/90 leading-snug">
          {project.subtitle}
        </p>
        <p className="editorial-lead text-muted-foreground">
          {project.summary}
        </p>
      </div>

      {/* 3. High-Impact Architectural Visual Composition */}
      <ProjectVisual type={project.visualType} />

      {/* 4. Problem & Solution Breakdown Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        {project.problem && (
          <div className="p-6 rounded-2xl bg-surface/50 border border-border flex flex-col gap-2">
            <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
              01 // THE CHALLENGE
            </span>
            <h4 className="text-base font-bold text-foreground">Rental Deposit Uncertainty</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.problem}
            </p>
          </div>
        )}

        {project.solution && (
          <div className="p-6 rounded-2xl bg-surface/50 border border-border flex flex-col gap-2">
            <span className="text-[11px] font-mono text-accent uppercase tracking-wider">
              02 // THE ARCHITECTURAL SOLUTION
            </span>
            <h4 className="text-base font-bold text-foreground">Decentralized Escrow Smart Contracts</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.solution}
            </p>
          </div>
        )}
      </div>

      {/* 5. Dedicated Contribution Section (Accurate Factual Framing) */}
      {project.myContributions && project.myContributions.length > 0 && (
        <div className="p-6 sm:p-8 rounded-2xl bg-surface/70 border border-border flex flex-col gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-foreground font-bold uppercase tracking-wider">
            <Layers className="w-4 h-4 text-accent" />
            <span>MY PRIMARY CONTRIBUTIONS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
            {project.myContributions.map((contrib) => (
              <div key={contrib} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="leading-snug">{contrib}</span>
              </div>
            ))}
          </div>

          {project.teamContext && (
            <p className="mt-2 text-[11px] font-mono text-muted-foreground border-t border-border/60 pt-3">
              Note: {project.teamContext}
            </p>
          )}
        </div>
      )}

      {/* 6. Technology Stack Hierarchy */}
      <div className="flex flex-col gap-4 pt-2 border-t border-border/80">
        <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
          TECHNOLOGY STACK ARCHITECTURE
        </span>

        {/* Primary Stack */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-muted-foreground mr-2">Client & Server:</span>
          {project.mainTechnologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-md bg-card border border-border text-xs font-mono font-medium text-foreground shadow-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Blockchain & Integration Stack */}
        {project.supportingTechnologies && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-muted-foreground mr-2">Blockchain & Data:</span>
            {project.supportingTechnologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-md bg-surface border border-border text-xs font-mono text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
};
