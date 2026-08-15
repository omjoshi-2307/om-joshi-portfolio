import React from 'react';
import { Section } from '@/components/layout/Section';

export const HeroSection: React.FC = () => {
  return (
    <Section id="hero" className="min-h-[70vh] flex flex-col justify-center">
      {/* Structural placeholder: Hero section will be implemented in Phase 2 */}
      <div className="py-8 text-center sm:text-left">
        <span className="font-mono text-xs text-accent uppercase tracking-widest block mb-2">
          [Section Placeholder: 01]
        </span>
        <h1 className="hero-display text-foreground">
          Om Joshi
        </h1>
        <p className="editorial-lead text-muted-foreground mt-4 max-w-2xl">
          B.Tech Information Technology student & builder based in Pune, India.
        </p>
      </div>
    </Section>
  );
};
