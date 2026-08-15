import React from 'react';
import { Section } from '@/components/layout/Section';
import { InteractiveCharacter } from '@/components/character/InteractiveCharacter';

export const CharacterSection: React.FC = () => {
  return (
    <Section
      id="character"
      eyebrow="03 / Interactive Identity"
      title="Character Subsystem"
      description="Architectural foundation for the responsive 2D illustrated Om avatar, supporting real-time eye tracking and cursor kinematics."
      hasDivider
    >
      <div className="flex flex-col items-center justify-center p-8 rounded-xl border border-border bg-card">
        <InteractiveCharacter size="lg" showPedestal showStatusBadge interactive />
      </div>
    </Section>
  );
};
