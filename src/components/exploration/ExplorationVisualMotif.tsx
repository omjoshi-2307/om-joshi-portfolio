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
        'relative w-full min-h-[7rem] sm:h-32 py-4 sm:py-0 rounded-xl border border-border bg-card shadow-subtle overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between px-5 sm:px-10 gap-4 sm:gap-6 font-mono text-[10px] text-muted-foreground select-none',
        className
      )}
    >
      {/* 1. Origin Node (Electric Pink starting point) */}
      <div className="relative z-10 flex items-center gap-3">
        <div className="w-2.5 h-2.5 rounded-full bg-accent shadow-subtle shrink-0" />
        <div className="flex flex-col">
          <span className="text-foreground font-bold text-xs font-display">FOUNDATION</span>
          <span className="text-[10px] text-muted-foreground">Pune, MH • Core Systems</span>
        </div>
      </div>

      {/* 2. Branching Connecting Line (Lavender / Purple gradient trace) */}
      <div className="relative flex-1 w-full sm:w-auto sm:mx-6 h-px bg-border overflow-hidden">
        <motion.div
          animate={prefersReduced ? {} : { x: ['-100%', '100%'] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
          className="w-24 h-full bg-gradient-to-r from-transparent via-accent-secondary to-transparent"
        />
      </div>

      {/* 3. Frontier Destination (Lavender + Tiny Signal Yellow beacon) */}
      <div className="relative z-10 flex items-center justify-between sm:justify-end w-full sm:w-auto gap-3 text-left sm:text-right">
        <div className="flex flex-col">
          <span className="text-accent-secondary font-bold text-xs font-display">OPEN FRONTIER</span>
          <span className="text-[10px] text-muted-foreground">AI • Security • Systems • Web3</span>
        </div>
        <div className="relative flex items-center justify-center shrink-0">
          <div className="w-3.5 h-3.5 rounded-full border border-dashed border-accent-secondary flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-signal" />
          </div>
        </div>
      </div>
    </div>
  );
};
