import React from 'react';
import { Container } from '@/components/layout/Container';
import { AboutHeader } from './AboutHeader';
import { AboutStatement } from './AboutStatement';
import { AboutNarrative } from './AboutNarrative';
import { AboutMeta } from './AboutMeta';
import { PersonalInterests } from './PersonalInterests';
import { AboutProfileCard } from './AboutProfileCard';
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
      aria-label="01 — Introduction: Who is Om?"
      className={cn(
        'relative py-24 sm:py-32 md:py-36 bg-background border-t border-border transition-colors',
        className
      )}
    >
      <Container className="flex flex-col gap-14 sm:gap-18">
        {/* 1. Header Block */}
        <AboutHeader
          eyebrow={ABOUT_DATA.eyebrow}
          title={ABOUT_DATA.title}
          subtitle={ABOUT_DATA.subtitle}
        />

        {/* 2. Primary Showcase: Statement + Profile Dossier Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left: Statement & Orientation Lead */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-6">
            <AboutStatement
              lead={ABOUT_DATA.statement.lead}
              highlight={ABOUT_DATA.statement.highlight}
              sub={ABOUT_DATA.statement.sub}
              className="flex flex-col justify-center"
            />
          </div>

          {/* Right: Technical Builder Profile & Engineering Coordinates Card */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <AboutProfileCard className="w-full h-full" />
          </div>
        </div>

        {/* 3. Location, Education & Mindset Metadata Matrix */}
        <AboutMeta metadata={ABOUT_DATA.metadata} />

        {/* 4. Three Evolution Pillars */}
        <div className="pt-2">
          <AboutNarrative
            narrative={ABOUT_DATA.narrative}
            reflectionQuote={ABOUT_DATA.reflectionQuote}
          />
        </div>

        {/* 5. Personal Details (When I'm Not Building: Football, Anime, Music) */}
        <div className="pt-2">
          <PersonalInterests
            interests={ABOUT_DATA.interests}
            heading={ABOUT_DATA.interestsSectionTitle}
            eyebrow={ABOUT_DATA.interestsSectionEyebrow}
          />
        </div>

        {/* 6. Forward Transition Hook to What I Build */}
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
