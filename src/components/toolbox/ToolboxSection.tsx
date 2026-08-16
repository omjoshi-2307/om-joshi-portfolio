import React from 'react';
import { Container } from '@/components/layout/Container';
import { ToolboxHeader } from './ToolboxHeader';
import { SkillCategoryCard } from './SkillCategoryCard';
import { ExplorationMatrix } from './ExplorationMatrix';
import { SKILL_CATEGORIES } from '@/data/skills';
import { ArrowDownRight } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface ToolboxSectionProps {
  className?: string;
}

export const ToolboxSection: React.FC<ToolboxSectionProps> = ({ className }) => {
  const handleScrollToExploration = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('exploration');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="toolbox"
      aria-label="Om Joshi Technical Toolbox and Skills Inventory"
      className={cn(
        'relative py-24 sm:py-32 md:py-36 bg-background border-t border-border/60 transition-colors',
        className
      )}
    >
      <Container className="flex flex-col gap-16 sm:gap-20">
        {/* Section Header */}
        <ToolboxHeader />

        {/* 1. Core Technical Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <SkillCategoryCard key={category.id} category={category} />
          ))}
        </div>

        {/* 2. Active Research & Frontier Exploration Matrix */}
        <ExplorationMatrix />

        {/* 3. Transition Bridge to Currently Exploring Section */}
        <div className="pt-12 mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-dashed border-border/80 text-xs font-mono">
          <div className="flex items-center gap-2.5 text-muted-foreground">
            <span className="text-accent font-semibold">05 // NEXT CHAPTER</span>
            <span>•</span>
            <span>Active learning & experimentation across emerging frontiers</span>
          </div>

          <a
            href="#exploration"
            onClick={handleScrollToExploration}
            className="group inline-flex items-center gap-2 text-foreground hover:text-accent font-semibold transition-colors cursor-pointer select-none"
          >
            <span>Proceed to current exploration</span>
            <ArrowDownRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>
        </div>
      </Container>
    </section>
  );
};
