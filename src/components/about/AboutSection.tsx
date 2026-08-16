import React from 'react';
import { Container } from '@/components/layout/Container';
import { AboutHeader } from './AboutHeader';
import { AboutStatement } from './AboutStatement';
import { AboutNarrative } from './AboutNarrative';
import { AboutMeta } from './AboutMeta';
import { PersonalInterests } from './PersonalInterests';
import { AboutCharacter } from './AboutCharacter';
import { AboutTransition } from './AboutTransition';
import { ABOUT_DATA } from '@/data/about';
import { cn } from '@/utils/cn';

export interface AboutSectionProps {
  className?: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ className }) => {
  return (
    <section
      id="about"
      aria-label="About Om Joshi and Personal Identity"
      className={cn(
        'relative py-24 sm:py-32 md:py-36 bg-surface/15 dark:bg-surface/5 border-t border-border/60 transition-colors',
        className
      )}
    >
      <Container className="flex flex-col gap-16 sm:gap-20">
        {/* 1. Header Block */}
        <AboutHeader
          eyebrow={ABOUT_DATA.eyebrow}
          title={ABOUT_DATA.title}
          subtitle={ABOUT_DATA.subtitle}
        />

        {/* 2. Primary Showcase: Statement + Character Hero Duo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left: Statement & Orientation Meta */}
          <div className="lg:col-span-8 flex flex-col justify-between gap-6">
            <AboutStatement
              lead={ABOUT_DATA.statement.lead}
              highlight={ABOUT_DATA.statement.highlight}
              sub={ABOUT_DATA.statement.sub}
              className="h-full flex flex-col justify-center"
            />
          </div>

          {/* Right: Relaxed Character */}
          <div className="lg:col-span-4 flex">
            <AboutCharacter className="w-full h-full" />
          </div>
        </div>

        {/* 3. Location, Education & Mindset Metadata Matrix */}
        <AboutMeta metadata={ABOUT_DATA.metadata} />

        {/* 4. Reflective Narrative: Roots, Pressure & Modern Frontiers */}
        <div className="pt-4">
          <AboutNarrative
            narrative={ABOUT_DATA.narrative}
            reflectionQuote={ABOUT_DATA.reflectionQuote}
          />
        </div>

        {/* 5. Personal Details (When I'm Not Building: Football, Anime, Music) */}
        <div className="pt-4">
          <PersonalInterests
            interests={ABOUT_DATA.interests}
            heading={ABOUT_DATA.interestsSectionTitle}
            eyebrow={ABOUT_DATA.interestsSectionEyebrow}
          />
        </div>

        {/* 6. Forward Transition Hook to Contact */}
        <AboutTransition
          preamble={ABOUT_DATA.closing.preamble}
          headline={ABOUT_DATA.closing.headline}
          actionText={ABOUT_DATA.closing.actionText}
          targetId={ABOUT_DATA.closing.targetId}
        />
      </Container>
    </section>
  );
};
