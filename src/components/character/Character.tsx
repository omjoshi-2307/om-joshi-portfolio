import React from 'react';
import { CharacterHead } from './CharacterHead';
import { CharacterBody } from './CharacterBody';
import type { LookAngle } from './types';
import { cn } from '@/utils/cn';

export interface CharacterProps {
  lookAngle: LookAngle;
  className?: string;
}

export const Character: React.FC<CharacterProps> = ({ lookAngle, className }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-full h-full drop-shadow-sm select-none', className)}
      aria-label="Illustrated Avatar of Om Joshi"
      role="img"
    >
      {/* Background Soft Halo / Depth Glow */}
      <circle
        cx="100"
        cy="100"
        r="75"
        fill="var(--accent)"
        fillOpacity="0.04"
      />

      {/* Body Subsystem (Torso & Hoodie) */}
      <CharacterBody />

      {/* Head Subsystem (Hair, Face, Eyes & Glasses with 3D Yaw/Pitch kinematics) */}
      <CharacterHead lookAngle={lookAngle} />
    </svg>
  );
};
