import React, { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { HeroMeta } from './HeroMeta';
import { HeroHeading } from './HeroHeading';
import { HeroCopy } from './HeroCopy';
import { HeroActions } from './HeroActions';
import { HeroBackground } from './HeroBackground';
import { ScrollCue } from './ScrollCue';
import { InteractiveCharacter } from '@/components/character/InteractiveCharacter';
import type { CharacterTargetOverride } from '@/components/character/types';
import { cn } from '@/utils/cn';

export interface HeroProps {
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({ className }) => {
  const [characterOverride, setCharacterOverride] = useState<CharacterTargetOverride | null>(null);

  const handleHoverPrimary = (isHovered: boolean) => {
    setCharacterOverride(isHovered ? { x: -0.6, y: -0.35 } : null);
  };

  const handleHoverSecondary = (isHovered: boolean) => {
    setCharacterOverride(isHovered ? { x: -0.35, y: -0.3 } : null);
  };

  return (
    <section
      id="hero"
      aria-label="Om Joshi Introduction"
      className={cn(
        'relative min-h-[calc(100vh-5rem)] flex flex-col justify-between pt-6 pb-12 sm:pb-16 overflow-hidden',
        className
      )}
    >
      <HeroBackground />

      <Container className="flex-1 flex flex-col justify-center py-6 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left / Editorial Identity Column */}
          <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8 z-10">
            <HeroMeta />
            <HeroHeading />
            <HeroCopy />
            <HeroActions
              onHoverPrimary={handleHoverPrimary}
              onHoverSecondary={handleHoverSecondary}
            />
          </div>

          {/* Right / Interactive Character Column */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end z-10">
            <InteractiveCharacter
              size="hero"
              targetOverride={characterOverride}
              showPedestal
              showStatusBadge
              interactive
            />
          </div>
        </div>
      </Container>

      {/* Bottom Minimal Scroll Indicator */}
      <Container className="flex justify-center sm:justify-start pt-4 z-10">
        <ScrollCue targetSectionId="foundation-status" />
      </Container>
    </section>
  );
};
