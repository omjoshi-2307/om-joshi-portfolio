import React from 'react';
import type { CaseStudySection } from '@/types/projects';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface CaseStudyStorySectionProps {
  section: CaseStudySection;
  className?: string;
}

export const CaseStudyStorySection: React.FC<CaseStudyStorySectionProps> = ({
  section,
  className,
}) => {
  return (
    <div className={cn('grid grid-cols-1 lg:grid-cols-12 gap-8 py-10 border-b border-border', className)}>
      {/* Left Chapter Numeral & Title */}
      <div className="lg:col-span-4 flex flex-col gap-2">
        <span className="font-display font-extrabold text-3xl sm:text-4xl text-accent tracking-tighter">
          {section.number}
        </span>
        <h3 className="text-xl sm:text-2xl font-bold font-display text-foreground">
          {section.title}
        </h3>
      </div>

      {/* Right Content & Story Narrative */}
      <div className="lg:col-span-8 flex flex-col gap-6">
        {section.content.map((paragraph, idx) => (
          <p key={idx} className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {paragraph}
          </p>
        ))}

        {section.callout && (
          <blockquote className="my-2 p-6 rounded-r-lg border-l-2 border-accent bg-surface-soft text-foreground text-sm sm:text-base font-display font-semibold italic">
            {section.callout}
          </blockquote>
        )}

        {section.points && section.points.length > 0 && (
          <ul className="space-y-2.5 pt-2">
            {section.points.map((pt, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
