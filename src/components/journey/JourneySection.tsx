import React, { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { JourneyHeader } from './JourneyHeader';
import { JourneyImageMarquee } from './JourneyImageMarquee';
import { JourneyActiveContent } from './JourneyActiveContent';
import { JOURNEY_STAGES } from '@/data/journey';
import { ArrowDownRight } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface JourneySectionProps {
  className?: string;
}

/**
 * Technical Evolution & Journey Section.
 * Open editorial composition featuring a continuous Right-to-Left moving gallery
 * of large rectangular visual panels and selected chapter storytelling below.
 */
export const JourneySection: React.FC<JourneySectionProps> = ({ className }) => {
  const [selectedStageId, setSelectedStageId] = useState<string>(JOURNEY_STAGES[0].id);

  const selectedStage =
    JOURNEY_STAGES.find((s) => s.id === selectedStageId) || JOURNEY_STAGES[0];
  const currentStageIndex = JOURNEY_STAGES.findIndex(
    (s) => s.id === selectedStageId
  );

  const handleNextStage = () => {
    const nextIndex = (currentStageIndex + 1) % JOURNEY_STAGES.length;
    setSelectedStageId(JOURNEY_STAGES[nextIndex].id);
  };

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
        {/* 1. Section Eyebrow & Headline */}
        <JourneyHeader />

        {/* 2. Large Rectangular Image Marquee Gallery (Open layout) */}
        <JourneyImageMarquee
          stages={JOURNEY_STAGES}
          selectedStageId={selectedStage.id}
          onSelectStage={setSelectedStageId}
          className="my-4 sm:my-6 md:my-8"
        />

        {/* 3. Selected Chapter Content Area */}
        <div className="pt-10 sm:pt-14 md:pt-18">
          <JourneyActiveContent
            stage={selectedStage}
            onNextStage={handleNextStage}
          />
        </div>

        {/* 4. Transition Bridge to Projects Section */}
        <div className="pt-16 mt-16 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-dashed border-border/80 text-xs font-mono">
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
