import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { ProjectCaseStudy } from '@/types/projects';
import { cn } from '@/utils/cn';

export interface CaseStudyNavProps {
  navigation: ProjectCaseStudy['navigation'];
  onNavigate: (slug: string) => void;
  className?: string;
}

export const CaseStudyNav: React.FC<CaseStudyNavProps> = ({
  navigation,
  onNavigate,
  className,
}) => {
  return (
    <nav aria-label="Case Study Pagination" className={cn('grid grid-cols-1 sm:grid-cols-2 gap-4 pt-12 pb-16', className)}>
      {/* Previous Project Link */}
      <a
        href={navigation.previous.slug}
        onClick={(e) => {
          e.preventDefault();
          onNavigate(navigation.previous.slug);
        }}
        aria-label={`Previous case study: ${navigation.previous.title}`}
        className="group relative p-6 sm:p-8 rounded-xl border border-border bg-card hover:border-border-strong hover:bg-elevated transition-colors text-left flex flex-col justify-between gap-4 cursor-pointer shadow-subtle focus-visible:outline-2 focus-visible:outline-accent active:scale-[0.99]"
      >
        <span className="flex items-center gap-2 text-xs font-mono text-muted-subtle uppercase tracking-widest">
          <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-150 group-hover:-translate-x-1 text-accent" aria-hidden="true" />
          <span>PREVIOUS CASE STUDY</span>
        </span>
        <span className="text-xl sm:text-2xl font-display font-bold text-foreground group-hover:text-accent transition-colors">
          {navigation.previous.title}
        </span>
      </a>

      {/* Next Project Link */}
      <a
        href={navigation.next.slug}
        onClick={(e) => {
          e.preventDefault();
          onNavigate(navigation.next.slug);
        }}
        aria-label={`Next case study: ${navigation.next.title}`}
        className="group relative p-6 sm:p-8 rounded-xl border border-border bg-card hover:border-border-strong hover:bg-elevated transition-colors text-right flex flex-col justify-between items-end gap-4 cursor-pointer shadow-subtle focus-visible:outline-2 focus-visible:outline-accent active:scale-[0.99]"
      >
        <span className="flex items-center gap-2 text-xs font-mono text-muted-subtle uppercase tracking-widest">
          <span>NEXT CASE STUDY</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1 text-accent" aria-hidden="true" />
        </span>
        <span className="text-xl sm:text-2xl font-display font-bold text-foreground group-hover:text-accent transition-colors">
          {navigation.next.title}
        </span>
      </a>
    </nav>
  );
};
