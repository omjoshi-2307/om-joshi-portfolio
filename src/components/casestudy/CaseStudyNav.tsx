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
    <nav
      aria-label="Case Study Pagination"
      className={cn(
        'flex flex-col sm:flex-row items-center justify-between gap-6 pt-12 pb-16 border-t border-border mt-8',
        className
      )}
    >
      {/* Previous Project Link */}
      <a
        href={navigation.previous.slug}
        onClick={(e) => {
          e.preventDefault();
          onNavigate(navigation.previous.slug);
        }}
        aria-label={`Previous case study: ${navigation.previous.title}`}
        className="group flex flex-col items-start gap-1 p-3 rounded-lg hover:bg-surface transition-colors text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-accent w-full sm:w-auto"
      >
        <span className="flex items-center gap-1.5 text-[11px] font-mono text-muted-subtle uppercase tracking-wider">
          <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-150 group-hover:-translate-x-1 text-accent" aria-hidden="true" />
          <span>PREVIOUS</span>
        </span>
        <span className="text-lg sm:text-xl font-display font-bold text-foreground group-hover:text-accent transition-colors">
          {navigation.previous.title}
        </span>
      </a>

      {/* Middle: Back to All Work */}
      <a
        href="/#projects"
        onClick={(e) => {
          e.preventDefault();
          onNavigate('/#projects');
        }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border bg-card hover:bg-elevated text-xs font-mono text-muted-foreground hover:text-foreground transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-accent"
        aria-label="Return to all selected projects on homepage"
      >
        <span>Back to Selected Work</span>
      </a>

      {/* Next Project Link */}
      <a
        href={navigation.next.slug}
        onClick={(e) => {
          e.preventDefault();
          onNavigate(navigation.next.slug);
        }}
        aria-label={`Next case study: ${navigation.next.title}`}
        className="group flex flex-col items-end gap-1 p-3 rounded-lg hover:bg-surface transition-colors text-right cursor-pointer focus-visible:outline-2 focus-visible:outline-accent w-full sm:w-auto"
      >
        <span className="flex items-center gap-1.5 text-[11px] font-mono text-muted-subtle uppercase tracking-wider">
          <span>NEXT</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1 text-accent" aria-hidden="true" />
        </span>
        <span className="text-lg sm:text-xl font-display font-bold text-foreground group-hover:text-accent transition-colors">
          {navigation.next.title}
        </span>
      </a>
    </nav>
  );
};
