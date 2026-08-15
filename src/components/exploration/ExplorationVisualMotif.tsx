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
        'relative w-full h-32 sm:h-40 rounded-2xl border border-border/70 bg-surface/30 dark:bg-surface/10 overflow-hidden flex items-center justify-between px-6 sm:px-12 font-mono text-[10px] text-muted-foreground select-none',
        className
      )}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] bg-[radial-gradient(currentColor_1px,transparent_1px)] bg-[size:1.25rem_1.25rem]" />

      {/* Origin Node */}
      <div className="relative z-10 flex items-center gap-3">
        <div className="w-3 h-3 rounded-full bg-accent animate-pulse shadow-xs" />
        <div className="flex flex-col">
          <span className="text-foreground font-bold text-xs">FOUNDATION</span>
          <span className="text-[10px] text-muted-foreground">Pune, MH • Core CS</span>
        </div>
      </div>

      {/* Branching Connecting Line */}
      <div className="relative flex-1 mx-6 h-px bg-gradient-to-r from-accent via-border to-accent/40 overflow-hidden">
        <motion.div
          animate={prefersReduced ? {} : { x: ['-100%', '100%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          className="w-24 h-full bg-gradient-to-r from-transparent via-accent to-transparent"
        />
      </div>

      {/* Frontier Nodes */}
      <div className="relative z-10 flex items-center gap-4 text-right">
        <div className="flex flex-col">
          <span className="text-accent font-bold text-xs">OPEN FRONTIER</span>
          <span className="text-[10px] text-muted-foreground">AI • Security • Systems • Web3</span>
        </div>
        <div className="w-3 h-3 rounded-full border-2 border-dashed border-accent" />
      </div>
    </div>
  );
};
