import React from 'react';
import { Sparkles } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface CaseStudyLearningsProps {
  learnings: string[];
  className?: string;
}

export const CaseStudyLearnings: React.FC<CaseStudyLearningsProps> = ({
  learnings,
  className,
}) => {
  return (
    <div className={cn('flex flex-col gap-6 py-10 border-b border-border', className)}>
      <div className="flex items-center gap-2 text-xs font-mono text-accent font-semibold uppercase tracking-wider">
        <Sparkles className="w-3.5 h-3.5 text-accent" />
        <span>KEY RETROSPECTIVE TAKEAWAYS</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {learnings.map((learning, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border border-border bg-card shadow-subtle flex flex-col justify-between gap-4"
          >
            <span className="font-mono text-xs text-muted-subtle font-bold">
              0{index + 1}
            </span>
            <p className="text-sm text-foreground font-medium leading-relaxed">
              {learning}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
