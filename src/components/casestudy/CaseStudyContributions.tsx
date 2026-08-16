import React from 'react';
import type { ProjectCaseStudy } from '@/types/projects';
import { CheckCircle2, Shield } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface CaseStudyContributionsProps {
  contributions: ProjectCaseStudy['contributions'];
  className?: string;
}

export const CaseStudyContributions: React.FC<CaseStudyContributionsProps> = ({
  contributions,
  className,
}) => {
  return (
    <div className={cn('p-8 sm:p-12 rounded-xl border border-border bg-surface shadow-subtle flex flex-col gap-6 my-10', className)}>
      <div className="flex items-center justify-between pb-4 border-b border-border text-xs font-mono">
        <span className="text-accent font-bold uppercase tracking-wider flex items-center gap-2">
          <Shield className="w-4 h-4 text-accent" />
          <span>{contributions.title}</span>
        </span>
        <span className="text-muted-subtle uppercase">VERIFIED SCOPE</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contributions.points.map((point, index) => (
          <div key={index} className="flex items-start gap-3 text-sm text-foreground">
            <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
            <span className="leading-relaxed">{point}</span>
          </div>
        ))}
      </div>

      {contributions.note && (
        <p className="mt-2 pt-4 border-t border-border text-xs font-mono text-muted-subtle">
          {contributions.note}
        </p>
      )}
    </div>
  );
};
