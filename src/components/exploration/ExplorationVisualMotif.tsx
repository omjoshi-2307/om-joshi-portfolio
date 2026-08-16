import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

export interface ExplorationVisualMotifProps {
  className?: string;
}

export const ExplorationVisualMotif: React.FC<ExplorationVisualMotifProps> = ({ className }) => {
  const prefersReduced = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className={cn(
        'relative w-full h-28 sm:h-32 rounded-xl border border-border bg-card shadow-subtle overflow-hidden flex items-center justify-between px-6 sm:px-10 font-mono text-[10px] text-muted-foreground select-none',
        className
      )}
    >
      {/* 1. Origin Node (Electric Pink starting point) */}
      <div className="relative z-10 flex items-center gap-3">
        <div className="w-2.5 h-2.5 rounded-full bg-accent shadow-subtle" />
        <div className="flex flex-col">
          <span className="text-foreground font-bold text-xs font-display">FOUNDATION</span>
          <span className="text-[10px] text-muted-foreground">Pune, MH • Core Systems</span>
        </div>
      </div>

      {/* 2. Branching Connecting Line (Lavender / Purple gradient trace) */}
      <div className="relative flex-1 mx-6 h-px bg-border overflow-hidden">
        <motion.div
          animate={prefersReduced ? {} : { x: ['-100%', '100%'] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
          className="w-24 h-full bg-gradient-to-r from-transparent via-accent-secondary to-transparent"
        />
      </div>

      {/* 3. Frontier Destination (Lavender + Tiny Signal Yellow beacon) */}
      <div className="relative z-10 flex items-center gap-3 text-right">
        <div className="flex flex-col">
          <span className="text-accent-secondary font-bold text-xs font-display">OPEN FRONTIER</span>
          <span className="text-[10px] text-muted-foreground">AI • Security • Systems • Web3</span>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="w-3.5 h-3.5 rounded-full border border-dashed border-accent-secondary flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-signal" />
          </div>
        </div>
      </div>
    </div>
  );
};
