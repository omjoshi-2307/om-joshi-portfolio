import React from 'react';
import { Container } from '@/components/layout/Container';
import { ToolboxHeader } from './ToolboxHeader';
import { TechnicalIndexGroup } from './TechnicalIndexGroup';
import { SKILL_CATEGORIES } from '@/data/skills';
import { ArrowDownRight } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface ToolboxSectionProps {
  className?: string;
}

export const ToolboxSection: React.FC<ToolboxSectionProps> = ({ className }) => {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
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
      id="skills"
      aria-label="02 — What I Build: Engineering Domains & Technical Craft"
      className={cn(
        'relative py-24 sm:py-32 md:py-36 bg-surface-soft border-t border-border transition-colors',
        className
      )}
    >
      <Container className="flex flex-col gap-14 sm:gap-18">
        {/* Section Header */}
        <ToolboxHeader />

        {/* 1. Structured Technical Index (5 Conceptual Domains: Dev, Security, AI/Data, Web3, Tools) */}
        <div className="flex flex-col">
          {SKILL_CATEGORIES.map((category, index) => (
            <TechnicalIndexGroup
              key={category.id}
              category={category}
              isFirst={index === 0}
            />
          ))}
        </div>

        {/* 2. Transition Bridge to 03 — Selected Work */}
        <div className="pt-12 mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-border text-xs font-mono">
          <div className="flex items-center gap-2.5 text-muted-foreground">
            <span className="text-accent font-semibold">03 // NEXT CHAPTER</span>
            <span>•</span>
            <span>Shipped prototypes, flagship Web3 escrow, and robotics builds</span>
          </div>

          <a
            href="#projects"
            onClick={handleScrollToProjects}
            className="group inline-flex items-center gap-2 text-foreground hover:text-accent font-semibold transition-colors cursor-pointer select-none"
          >
            <span>Proceed to selected work</span>
            <ArrowDownRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>
        </div>
      </Container>
    </section>
  );
};
