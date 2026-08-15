import React from 'react';
import { Section } from '@/components/layout/Section';

export const AboutSection: React.FC = () => {
  return (
    <Section
      id="about"
      eyebrow="02 / About"
      title="Background & Focus"
      hasDivider
    >
      {/* Structural placeholder: Real verified biographical content will be integrated in future phase */}
      <div className="p-8 rounded-lg border border-dashed border-border bg-surface/40 text-muted-foreground text-sm font-mono">
        [AboutSection structural placeholder — ready for verified background content]
      </div>
    </Section>
  );
};
