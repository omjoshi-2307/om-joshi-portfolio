import React from 'react';
import type { JourneyStage } from '@/types/journey';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

export interface JourneyImageMarqueeProps {
  stages: JourneyStage[];
  selectedStageId: string;
  onSelectStage: (id: string) => void;
  className?: string;
}

/**
 * Large Rectangular Image Marquee.
 * A continuous Right-to-Left moving gallery of large 3:2 visual panels inside the open Journey section.
 * Renders approximately 2-3 fully visible large panels on desktop and 1-1.5 on mobile.
 */
export const JourneyImageMarquee: React.FC<JourneyImageMarqueeProps> = ({
  stages,
  selectedStageId,
  onSelectStage,
  className,
}) => {
  const prefersReduced = useReducedMotion();

  // Duplicate dataset for seamless infinite loop (Group A + Group B)
  const marqueeItems = React.useMemo(() => {
    return [...stages, ...stages];
  }, [stages]);

  if (prefersReduced) {
    // Accessible, static non-animated strip for reduced motion preference
    return (
      <div
        role="region"
        aria-label="Journey Chapters"
        className={cn(
          'w-full flex items-center justify-start sm:justify-center gap-5 sm:gap-7 p-2 overflow-x-auto no-scrollbar select-none',
          className
        )}
      >
        {stages.map((stage) => {
          const isSelected = selectedStageId === stage.id;

          return (
            <button
              key={`static-${stage.id}`}
              type="button"
              onClick={() => onSelectStage(stage.id)}
              aria-label={`Select ${stage.number}: ${stage.title} chapter`}
              aria-pressed={isSelected}
              className={cn(
                'relative rounded-xl overflow-hidden border transition-all duration-150 cursor-pointer shrink-0 focus-visible:outline-2 focus-visible:outline-accent bg-surface aspect-[3/2]',
                'w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] xl:w-[340px]',
                isSelected
                  ? 'border-accent ring-1 ring-accent/60 opacity-100 shadow-warm'
                  : 'border-border/80 opacity-70 hover:opacity-100 hover:border-border-strong'
              )}
            >
              <img
                src={stage.imageSrc}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent pointer-events-none"
                aria-hidden="true"
              />
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div
      role="region"
      aria-label="Continuous Journey Chapter Visual Stream"
      className={cn(
        'relative w-full overflow-hidden py-3 sm:py-4 select-none',
        className
      )}
    >
      {/* Edge Gradient Masks for cinematic entrance and exit on the page background */}
      <div
        className="absolute left-0 top-0 bottom-0 w-10 sm:w-20 md:w-28 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-10 sm:w-20 md:w-28 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"
        aria-hidden="true"
      />

      {/* Infinite Right-to-Left Animated Track */}
      <div className="animate-marquee-infinite flex items-center gap-5 sm:gap-6 md:gap-8 lg:gap-9 will-change-transform py-2">
        {marqueeItems.map((stage, index) => {
          const isSelected = selectedStageId === stage.id;
          const uniqueKey = `${stage.id}-${index}`;

          return (
            <button
              key={uniqueKey}
              type="button"
              onClick={() => onSelectStage(stage.id)}
              aria-label={`Select ${stage.number}: ${stage.title} chapter`}
              aria-pressed={isSelected}
              className={cn(
                'group relative rounded-xl overflow-hidden border transition-all duration-200 cursor-pointer shrink-0 focus-visible:outline-2 focus-visible:outline-accent bg-surface aspect-[3/2]',
                // Large Rectangular Sizing: Mobile ~180px, Tablet ~260px, Desktop ~340px
                'w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] xl:w-[340px]',
                isSelected
                  ? 'border-accent ring-1 ring-accent/60 opacity-100 shadow-warm scale-[1.02] z-10'
                  : 'border-border/80 opacity-70 hover:opacity-100 hover:border-border-strong hover:scale-[1.01]'
              )}
            >
              <img
                src={stage.imageSrc}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className={cn(
                  'w-full h-full object-cover transition-transform duration-300',
                  isSelected ? 'contrast-[1.04]' : 'group-hover:scale-105'
                )}
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent pointer-events-none"
                aria-hidden="true"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};
