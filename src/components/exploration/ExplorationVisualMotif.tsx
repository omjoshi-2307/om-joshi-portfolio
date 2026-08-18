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
      aria-label="Interactive map of ongoing technical research frontiers"
      className={cn(
        'relative w-full rounded-xl border border-border bg-card shadow-card p-6 sm:p-8 md:p-10 overflow-hidden flex flex-col gap-6 select-none',
        className
      )}
    >
      {/* Background Subtle Radar Grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:2rem_2rem]"
      />

      {/* Header Bar */}
      <div className="relative flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-border text-xs font-mono">
        <div className="flex items-center gap-2 text-foreground font-semibold">
          <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
          <span>RESEARCH MAP // OPEN FRONTIER CONSTELLATION</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
          <span className="px-2 py-0.5 rounded-sm bg-elevated border border-border">5 ACTIVE VECTORS</span>
          <span className="text-accent font-semibold">STATUS: EXPLORING</span>
        </div>
      </div>

      {/* Visual Constellation Graphic (Desktop & Tablet Visual Architecture) */}
      <div className="relative min-h-[220px] sm:min-h-[260px] flex items-center justify-center">
        {/* Concentric Coordinate Rings */}
        <div aria-hidden="true" className="absolute w-32 h-32 rounded-full border border-dashed border-border/80" />
        <div aria-hidden="true" className="absolute w-56 sm:w-72 h-56 sm:h-72 rounded-full border border-border/60" />
        <div aria-hidden="true" className="absolute w-80 sm:w-96 h-80 sm:h-96 rounded-full border border-dashed border-border/40" />

        {/* Central Core Nexus */}
        <div className="relative z-10 p-3 sm:p-4 rounded-xl bg-elevated border-2 border-accent text-center shadow-warm flex flex-col items-center gap-0.5">
          <span className="text-[9px] font-mono text-accent uppercase font-bold tracking-wider">
            CORE LAB
          </span>
          <span className="text-xs sm:text-sm font-bold text-foreground font-display">
            Om Joshi
          </span>
          <span className="text-[8px] font-mono text-muted-subtle">
            Pune, MH // IST
          </span>
        </div>

        {/* Constellation Orbiting Nodes */}
        {/* Node 1: AI (Top) */}
        <div className="absolute -top-1 sm:top-2 z-10">
          <motion.div
            animate={prefersReduced ? {} : { y: [-2, 2, -2] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="px-3 py-1.5 rounded-md bg-elevated border border-accent text-[10px] sm:text-xs font-mono font-bold text-accent shadow-subtle flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>AI & LOCAL MODELS</span>
          </motion.div>
        </div>

        {/* Node 2: Systems (Left) */}
        <div className="absolute left-0 sm:left-4 z-10">
          <motion.div
            animate={prefersReduced ? {} : { x: [-2, 2, -2] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="px-3 py-1.5 rounded-md bg-elevated border border-border text-[10px] sm:text-xs font-mono font-bold text-foreground shadow-subtle flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
            <span>SYSTEMS & MEMORY</span>
          </motion.div>
        </div>

        {/* Node 3: Web3 (Right) */}
        <div className="absolute right-0 sm:right-4 z-10">
          <motion.div
            animate={prefersReduced ? {} : { x: [2, -2, 2] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="px-3 py-1.5 rounded-md bg-elevated border border-accent-secondary text-[10px] sm:text-xs font-mono font-bold text-accent-secondary shadow-subtle flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary" />
            <span>WEB3 & ESCROW</span>
          </motion.div>
        </div>

        {/* Node 4: Cybersecurity (Bottom Left) */}
        <div className="absolute -bottom-1 sm:bottom-2 left-2 sm:left-12 z-10">
          <motion.div
            animate={prefersReduced ? {} : { y: [2, -2, 2] }}
            transition={{ duration: 3.1, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            className="px-3 py-1.5 rounded-md bg-elevated border border-accent-depth text-[10px] sm:text-xs font-mono font-bold text-accent-depth shadow-subtle flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-depth" />
            <span>CYBERSECURITY</span>
          </motion.div>
        </div>

        {/* Node 5: Tooling (Bottom Right) */}
        <div className="absolute -bottom-1 sm:bottom-2 right-2 sm:right-12 z-10">
          <motion.div
            animate={prefersReduced ? {} : { y: [2, -2, 2] }}
            transition={{ duration: 2.9, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
            className="px-3 py-1.5 rounded-md bg-elevated border border-signal text-[10px] sm:text-xs font-mono font-bold text-signal shadow-subtle flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-signal" />
            <span>DEV ERGONOMICS</span>
          </motion.div>
        </div>
      </div>

      {/* Constellation Footnote */}
      <div className="relative pt-3 border-t border-border flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-muted-foreground">
        <span>UNFINISHED GRAPH // CONTINUOUS INQUIRY</span>
        <span>EXPERIMENTATION OVER STATIC ASSUMPTIONS</span>
      </div>
    </div>
  );
};
