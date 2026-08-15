import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

export interface ToolboxHeaderProps {
  className?: string;
}

export const ToolboxHeader: React.FC<ToolboxHeaderProps> = ({ className }) => {
  const prefersReduced = useReducedMotion();

  return (
    <div className={cn('flex flex-col gap-6 max-w-3xl mb-16 sm:mb-20', className)}>
      <motion.div
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
        whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-widest"
      >
        <span className="w-2 h-2 rounded-sm bg-accent inline-block" />
        <span>04 // TECHNICAL TOOLBOX</span>
      </motion.div>

      <motion.h2
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
        whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="section-display text-foreground font-bold tracking-tight"
      >
        The Builder's Inventory & Workspace
      </motion.h2>

      <motion.p
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
        whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="editorial-lead text-muted-foreground"
      >
        The languages, frameworks, and system tools I use to turn ideas into working software — categorized by daily use, familiar ground, and active research frontiers.
      </motion.p>

      {/* Proficiency Legend */}
      <motion.div
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
        whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs font-mono text-muted-foreground"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent inline-block" />
          <span className="text-foreground font-semibold">Core:</span>
          <span>Primary daily build stack</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full border border-accent/60 inline-block" />
          <span className="text-foreground font-semibold">Familiar:</span>
          <span>Project-proven / solid base</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full border border-dashed border-muted-foreground inline-block" />
          <span className="text-foreground font-semibold">Exploring:</span>
          <span>Active learning frontier</span>
        </div>
      </motion.div>
    </div>
  );
};
