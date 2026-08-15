import React from 'react';
import { Container } from '@/components/layout/Container';
import { JourneyHeader } from './JourneyHeader';
import { JourneyChapter } from './JourneyChapter';
import { JOURNEY_STAGES } from '@/data/journey';
import { ArrowDownRight } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface JourneySectionProps {
  className?: string;
}

export const JourneySection: React.FC<JourneySectionProps> = ({ className }) => {
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
      id="journey"
      aria-label="Om Joshi Technical Evolution and Journey"
      className={cn(
        'relative py-24 sm:py-32 md:py-36 bg-background border-t border-border/60 transition-colors',
        className
      )}
    >
      <Container className="flex flex-col">
        {/* Section Header */}
        <JourneyHeader />

        {/* Chapters Stack */}
        <div className="flex flex-col gap-20 sm:gap-28">
          {JOURNEY_STAGES.map((stage, index) => (
            <JourneyChapter
              key={stage.id}
              stage={stage}
              isLast={index === JOURNEY_STAGES.length - 1}
            />
          ))}
        </div>

        {/* Transition Bridge to Projects Section */}
        <div className="pt-16 mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-dashed border-border/80 text-xs font-mono">
          <div className="flex items-center gap-2.5 text-muted-foreground">
            <span className="text-accent font-semibold">03 // NEXT CHAPTER</span>
            <span>•</span>
            <span>Deep dives into highlighted engineering artifacts & products</span>
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
