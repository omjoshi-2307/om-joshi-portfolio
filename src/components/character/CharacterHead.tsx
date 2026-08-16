import React from 'react';
import { motion } from 'framer-motion';
import { CharacterEyes } from './CharacterEyes';
import type { LookAngle } from './types';

export interface CharacterHeadProps {
  lookAngle: LookAngle;
}

export const CharacterHead: React.FC<CharacterHeadProps> = ({ lookAngle }) => {
  return (
    <motion.g
      className="character-head-group"
      animate={{
        rotateY: lookAngle.headYaw,
        rotateX: lookAngle.headPitch,
      }}
      transition={{
        type: 'spring',
        stiffness: 240,
        damping: 24,
        mass: 0.8,
      }}
      style={{
        transformOrigin: '100px 95px',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Left Ear */}
      <path
        d="M 44 86 C 40 86, 38 96, 44 104 C 47 108, 50 106, 50 96 Z"
        fill="#E8B896"
        className="dark:fill-[#C49372]"
      />
      <path
        d="M 45 92 C 43 94, 43 98, 46 100"
        stroke="#C08B68"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Right Ear */}
      <path
        d="M 156 86 C 160 86, 162 96, 156 104 C 153 108, 150 106, 150 96 Z"
        fill="#E8B896"
        className="dark:fill-[#C49372]"
      />
      <path
        d="M 155 92 C 157 94, 157 98, 154 100"
        stroke="#C08B68"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Main Face Contour */}
      <rect
        x="48"
        y="50"
        width="104"
        height="84"
        rx="28"
        fill="#F6CAAA"
        className="dark:fill-[#DDA27E]"
      />
      {/* Chin refinement */}
      <path
        d="M 70 126 C 85 138, 115 138, 130 126 Z"
        fill="#F6CAAA"
        className="dark:fill-[#DDA27E]"
      />

      {/* Eyebrows */}
      <path
        d="M 64 74 Q 75 70, 86 73"
        stroke="#1E232B"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
        className="dark:stroke-[#181C24]"
      />
      <path
        d="M 114 73 Q 125 70, 136 74"
        stroke="#1E232B"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
        className="dark:stroke-[#181C24]"
      />

      {/* Eyes Subsystem */}
      <CharacterEyes offsetX={lookAngle.eyeOffsetX} offsetY={lookAngle.eyeOffsetY} />

      {/* Eyewear / Glasses Frames */}
      <g className="glasses-group">
        {/* Left Frame */}
        <rect
          x="60"
          y="76"
          width="30"
          height="24"
          rx="6"
          fill="none"
          stroke="#181D26"
          strokeWidth="3"
          className="dark:stroke-[#E2E8F0]"
        />
        {/* Left Lens Subtle Blue Tint / Highlight */}
        <rect
          x="61.5"
          y="77.5"
          width="27"
          height="21"
          rx="5"
          fill="var(--accent)"
          fillOpacity="0.08"
        />
        {/* Left Lens Glint */}
        <line
          x1="65"
          y1="80"
          x2="73"
          y2="92"
          stroke="#FFFFFF"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* Right Frame */}
        <rect
          x="110"
          y="76"
          width="30"
          height="24"
          rx="6"
          fill="none"
          stroke="#181D26"
          strokeWidth="3"
          className="dark:stroke-[#E2E8F0]"
        />
        {/* Right Lens Subtle Blue Tint */}
        <rect
          x="111.5"
          y="77.5"
          width="27"
          height="21"
          rx="5"
          fill="var(--accent)"
          fillOpacity="0.08"
        />
        {/* Right Lens Glint */}
        <line
          x1="115"
          y1="80"
          x2="123"
          y2="92"
          stroke="#FFFFFF"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* Glasses Bridge */}
        <path
          d="M 90 85 Q 100 82, 110 85"
          stroke="#181D26"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          className="dark:stroke-[#E2E8F0]"
        />
        {/* Glasses Temples (Side arms) */}
        <line
          x1="48"
          y1="83"
          x2="60"
          y2="83"
          stroke="#181D26"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="dark:stroke-[#E2E8F0]"
        />
        <line
          x1="140"
          y1="83"
          x2="152"
          y2="83"
          stroke="#181D26"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="dark:stroke-[#E2E8F0]"
        />
      </g>

      {/* Nose */}
      <path
        d="M 99 97 L 102 103 L 97 104"
        stroke="#C08B68"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Mouth (Confident, relaxed slight smile) */}
      <path
        d="M 91 116 Q 100 120, 109 116"
        stroke="#9E5D3B"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Hair (Layered contemporary silhouette) */}
      <g className="character-hair">
        {/* Hair base dome */}
        <path
          d="M 44 65 C 44 32, 65 24, 100 24 C 135 24, 156 32, 156 65 C 156 70, 152 74, 148 70 C 144 54, 138 46, 126 44 C 114 42, 95 44, 76 52 C 62 58, 52 68, 48 72 C 45 74, 44 70, 44 65 Z"
          fill="#1C212A"
          className="dark:fill-[#12161E]"
        />
        {/* Hair front locks & texture */}
        <path
          d="M 52 48 C 68 34, 98 32, 122 36 C 138 39, 148 46, 142 56 C 130 48, 108 45, 90 49 C 74 53, 62 62, 58 66 Z"
          fill="#282E3A"
          className="dark:fill-[#1A202C]"
        />
        {/* Subtle hair highlight strand */}
        <path
          d="M 72 35 Q 98 30, 118 34"
          stroke="var(--accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.4"
        />
      </g>
    </motion.g>
  );
};
