import React from 'react';
import { Container } from '@/components/layout/Container';
import { ExplorationHeader } from './ExplorationHeader';
import { ExplorationVisualMotif } from './ExplorationVisualMotif';
import { ExplorationCard } from './ExplorationCard';
import { ExplorationCameo } from './ExplorationCameo';
import { EXPLORATION_AREAS } from '@/data/exploration';
import { ArrowDownRight } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface ExplorationSectionProps {
  className?: string;
}

export const ExplorationSection: React.FC<ExplorationSectionProps> = ({ className }) => {
  const handleScrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('about');
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
      id="exploration"
      aria-label="Om Joshi Current Research and Technical Exploration"
      className={cn(
        'relative py-24 sm:py-32 md:py-36 bg-surface-lavender border-t border-border transition-colors',
        className
      )}
    >
      <Container className="flex flex-col gap-16 sm:gap-20">
        {/* Section Header */}
        <ExplorationHeader />

        {/* 1. Branching Open-Ended Motif */}
        <ExplorationVisualMotif />

        {/* 2. Exploration Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {EXPLORATION_AREAS.map((area, index) => (
            <ExplorationCard
              key={area.id}
              area={area}
              className={index === 0 ? 'md:col-span-2 lg:col-span-2' : undefined}
            />
          ))}
        </div>

        {/* 3. Forward-Looking Character Cameo */}
        <ExplorationCameo />

        {/* 4. Transition Bridge to About Section */}
        <div className="pt-12 mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-dashed border-border text-xs font-mono">
          <div className="flex items-center gap-2.5 text-muted-foreground">
            <span className="text-accent font-semibold">06 // NEXT CHAPTER</span>
            <span>•</span>
            <span>The personal background, engineering principles & mindset</span>
          </div>

          <a
            href="#about"
            onClick={handleScrollToAbout}
            className="group inline-flex items-center gap-2 text-foreground hover:text-accent font-semibold transition-colors cursor-pointer select-none"
          >
            <span>Proceed to background & story</span>
            <ArrowDownRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>
        </div>
      </Container>
    </section>
  );
};
