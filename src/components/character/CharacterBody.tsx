import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export const CharacterBody: React.FC = () => {
  const prefersReduced = useReducedMotion();

  return (
    <motion.g
      className="character-body-group"
      animate={
        prefersReduced
          ? {}
          : {
              y: [0, -2.5, 0],
              scale: [1, 1.008, 1],
            }
      }
      transition={{
        duration: 3.8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {/* Neck */}
      <rect
        x="88"
        y="126"
        width="24"
        height="22"
        rx="4"
        fill="#E4B28F"
        className="dark:fill-[#C4916E]"
      />
      {/* Neck shadow under jaw */}
      <path
        d="M 88 126 Q 100 134, 112 126 L 112 131 Q 100 137, 88 131 Z"
        fill="#C4916E"
        opacity="0.6"
        className="dark:fill-[#9E6E50]"
      />

      {/* Outer Torso / Tech Hoodie Shoulders */}
      <path
        d="M 38 186 C 42 152, 68 140, 84 138 C 94 136, 106 136, 116 138 C 132 140, 158 152, 162 186 C 163 194, 158 198, 150 198 L 50 198 C 42 198, 37 194, 38 186 Z"
        fill="#1C212B"
        className="dark:fill-[#151922]"
      />

      {/* Hoodie Collar / Inner Layer */}
      <path
        d="M 76 138 C 82 148, 100 156, 100 166 C 100 156, 118 148, 124 138 C 114 136, 86 136, 76 138 Z"
        fill="#262D3B"
        className="dark:fill-[#1E2432]"
      />

      {/* Collar Accent Zipper & Seam */}
      <line
        x1="100"
        y1="154"
        x2="100"
        y2="198"
        stroke="var(--border)"
        strokeWidth="1.5"
        strokeDasharray="2 2"
        className="opacity-70"
      />
      <circle
        cx="100"
        cy="154"
        r="2"
        fill="var(--accent)"
      />

      {/* Shoulder Raglan Seams */}
      <path
        d="M 64 142 L 48 186"
        stroke="#2E3747"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="dark:stroke-[#252D3D]"
      />
      <path
        d="M 136 142 L 152 186"
        stroke="#2E3747"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="dark:stroke-[#252D3D]"
      />

      {/* Minimal Chest Insignia / Subtle Monogram */}
      <rect
        x="64"
        y="162"
        width="10"
        height="2"
        rx="1"
        fill="var(--accent)"
        opacity="0.8"
      />
    </motion.g>
  );
};
