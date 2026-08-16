import React from 'react';
import { Container } from '@/components/layout/Container';
import { IntroEyebrow } from './IntroEyebrow';
import { IntroStatement } from './IntroStatement';
import { IntroDescription } from './IntroDescription';
import { IntroCameo } from './IntroCameo';
import { IntroMeta } from './IntroMeta';
import { IntroTransitionHook } from './IntroTransitionHook';
import { cn } from '@/utils/cn';

export interface IntroSectionProps {
  className?: string;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ className }) => {
  return (
    <section
      id="intro"
      aria-label="Om Joshi Current Identity and Focus"
      className={cn(
        'relative py-20 sm:py-28 md:py-32 bg-surface-soft border-t border-border transition-colors',
        className
      )}
    >
      <Container className="flex flex-col gap-12 sm:gap-16">
        {/* 1. Eyebrow Context Bar */}
        <IntroEyebrow />

        {/* 2. Primary Statement & Cameo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left / Display Statement */}
          <div className="lg:col-span-9">
            <IntroStatement />
          </div>

          {/* Right / Character Cameo */}
          <div className="lg:col-span-3 flex justify-start lg:justify-end">
            <IntroCameo />
          </div>
        </div>

        {/* 3. Supporting Editorial Description */}
        <div className="max-w-3xl">
          <IntroDescription />
        </div>

        {/* 4. Contextual Editorial Metadata Matrix */}
        <IntroMeta />

        {/* 5. Transition Bridge to Journey */}
        <IntroTransitionHook targetId="journey" />
      </Container>
    </section>
  );
};
