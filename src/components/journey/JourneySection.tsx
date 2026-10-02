import React from 'react';
import { Container } from '@/components/layout/Container';
import { JourneyHeader } from './JourneyHeader';
import { JourneyTimeline } from './JourneyTimeline';
import { JourneyCompanion } from './JourneyCompanion';
import { useRouter } from '@/hooks/useRouter';
import { ArrowDownRight } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface JourneySectionProps {
  className?: string;
}

/**
 * 04 — JOURNEY & MILESTONES: HOW I GOT HERE
 * Technical progression timeline:
 * HARDWARE → SOFTWARE → WEB → WEB3 → CYBERSECURITY
 * Accompanied by the interactive character companion.
 */
export const JourneySection: React.FC<JourneySectionProps> = ({ className }) => {
  const { navigate } = useRouter();

  const handleScrollToExploration = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('exploration') || document.getElementById('currently');
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
      aria-label="04 — Journey: Technical Progression Timeline"
      className={cn(
        'relative py-24 sm:py-32 md:py-36 bg-surface-soft border-t border-border transition-colors',
        className
      )}
    >
      <Container className="flex flex-col">
        {/* 1. Section Eyebrow, Monumental Headline & Progression Pipeline */}
        <JourneyHeader />

        {/* 2. Main Timeline & Companion Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column (8 cols): Chronological Progression Timeline 01 -> 06 */}
          <div className="lg:col-span-8 order-2 lg:order-1">
            <JourneyTimeline onNavigateCaseStudy={(to) => navigate(to)} />
          </div>

          {/* Right Column (4 cols): Sticky Journey Companion Housing the Same Character */}
          <div className="lg:col-span-4 order-1 lg:order-2 lg:sticky lg:top-24 z-10 mb-8 lg:mb-0">
            <JourneyCompanion />
          </div>
        </div>

        {/* 3. Transition Bridge to 05 — Currently Exploring */}
        <div className="pt-16 mt-16 sm:mt-20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-border text-xs font-mono">
          <div className="flex items-center gap-2.5 text-muted-foreground">
            <span className="text-accent font-semibold">05 // NEXT CHAPTER</span>
            <span>•</span>
            <span>Active learning radar & emerging computing frontiers</span>
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
