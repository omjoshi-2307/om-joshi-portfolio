import React from 'react';
import type { ProjectCaseStudy } from '@/types/projects';
import { cn } from '@/utils/cn';

export interface CaseStudyOverviewProps {
  caseStudy: ProjectCaseStudy;
  className?: string;
}

export const CaseStudyOverview: React.FC<CaseStudyOverviewProps> = ({
  caseStudy,
  className,
}) => {
  return (
    <div className={cn('grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 border-b border-border', className)}>
      {/* Left Column: Role & Team Context */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        <div>
          <span className="text-[11px] font-mono text-muted-subtle uppercase tracking-widest block pb-3 border-b border-border">
            ROLE & RESPONSIBILITIES
          </span>
          <ul className="mt-4 space-y-2">
            {caseStudy.role.map((r) => (
              <li key={r} className="text-sm text-foreground flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Distribution */}
        <div className="pt-4">
          <span className="text-[11px] font-mono text-muted-subtle uppercase tracking-widest block pb-3 border-b border-border">
            TECHNOLOGY STACK
          </span>
          <div className="mt-4 flex flex-wrap gap-2">
            {caseStudy.technologies.frontend?.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-sm bg-elevated border border-border text-xs font-mono text-foreground font-medium"
              >
                {tech}
              </span>
            ))}
            {caseStudy.technologies.backend?.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-sm bg-elevated border border-border text-xs font-mono text-foreground font-medium"
              >
                {tech}
              </span>
            ))}
            {caseStudy.technologies.hardware?.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-sm bg-elevated border border-border text-xs font-mono text-foreground font-medium"
              >
                {tech}
              </span>
            ))}
            {caseStudy.technologies.blockchain?.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-sm bg-accent-soft border border-accent/20 text-xs font-mono text-accent font-semibold"
              >
                {tech}
              </span>
            ))}
            {caseStudy.technologies.core.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-sm bg-card border border-border text-xs font-mono text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column: Problem vs Solution Statements */}
      <div className="lg:col-span-7 flex flex-col gap-6">
        {/* The Problem */}
        <div className="p-6 sm:p-8 rounded-xl border border-border bg-card shadow-subtle flex flex-col gap-3">
          <div className="flex items-center justify-between pb-3 border-b border-border text-xs font-mono">
            <span className="text-muted-subtle uppercase tracking-wider">THE CORE PROBLEM</span>
            <span className="text-foreground font-bold">01 // CHALLENGE</span>
          </div>
          <h3 className="text-lg font-bold text-foreground font-display">
            {caseStudy.problemStatement.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {caseStudy.problemStatement.description}
          </p>
        </div>

        {/* The Solution */}
        <div className="p-6 sm:p-8 rounded-xl border border-border bg-elevated shadow-subtle flex flex-col gap-3">
          <div className="flex items-center justify-between pb-3 border-b border-border text-xs font-mono">
            <span className="text-accent uppercase tracking-wider font-semibold">THE ARCHITECTURAL PROPOSAL</span>
            <span className="text-accent font-bold">02 // SOLUTION</span>
          </div>
          <h3 className="text-lg font-bold text-foreground font-display">
            {caseStudy.solutionStatement.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {caseStudy.solutionStatement.description}
          </p>
        </div>
      </div>
    </div>
  );
};
