import React, { memo } from 'react';
import { motion } from 'framer-motion';

export interface CharacterEyesProps {
  offsetX: number;
  offsetY: number;
}

export const CharacterEyes: React.FC<CharacterEyesProps> = memo(({ offsetX, offsetY }) => {
  return (
    <g className="character-eyes">
      {/* Left Eye Socket */}
      <rect
        x="66"
        y="82"
        width="18"
        height="12"
        rx="4"
        fill="#FFFFFF"
        className="dark:fill-slate-100"
      />
      {/* Left Pupil / Iris */}
      <motion.g
        animate={{ x: offsetX, y: offsetY }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      >
        <circle cx="75" cy="88" r="4.2" fill="#14181F" className="dark:fill-slate-950" />
        {/* Light reflection glint */}
        <circle cx="73.5" cy="86.5" r="1.3" fill="#FFFFFF" opacity="0.9" />
        {/* Accent iris rim */}
        <circle cx="75" cy="88" r="4.2" stroke="var(--accent)" strokeWidth="0.8" fill="none" opacity="0.6" />
      </motion.g>

      {/* Right Eye Socket */}
      <rect
        x="116"
        y="82"
        width="18"
        height="12"
        rx="4"
        fill="#FFFFFF"
        className="dark:fill-slate-100"
      />
      {/* Right Pupil / Iris */}
      <motion.g
        animate={{ x: offsetX, y: offsetY }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      >
        <circle cx="125" cy="88" r="4.2" fill="#14181F" className="dark:fill-slate-950" />
        {/* Light reflection glint */}
        <circle cx="123.5" cy="86.5" r="1.3" fill="#FFFFFF" opacity="0.9" />
        {/* Accent iris rim */}
        <circle cx="125" cy="88" r="4.2" stroke="var(--accent)" strokeWidth="0.8" fill="none" opacity="0.6" />
      </motion.g>
    </g>
  );
});

CharacterEyes.displayName = 'CharacterEyes';
