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
    <div className={cn('flex flex-col gap-6 max-w-4xl mb-12 sm:mb-16', className)}>
      <motion.div
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
        whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-2.5 technical-eyebrow text-muted-subtle"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
        <span>02 // WHAT I BUILD</span>
      </motion.div>

      <motion.h2
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
        whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="section-monumental text-foreground uppercase tracking-tight"
      >
        <span>WHAT I BUILD.</span>
      </motion.h2>

      <motion.p
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
        whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="editorial-lead text-muted-foreground max-w-2xl text-base sm:text-lg"
      >
        Disciplines, systems, and technical capabilities organized conceptually rather than as an arbitrary wall of badges. Every skill here is grounded in real code and shipped repositories.
      </motion.p>

      {/* Conceptual Legend */}
      <motion.div
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
        whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1 text-xs font-mono text-muted-foreground"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent inline-block" />
          <span className="text-foreground font-semibold">Core:</span>
          <span>Primary production & build stack</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-secondary inline-block" />
          <span className="text-foreground font-semibold">Base:</span>
          <span>Working competence / project proven</span>
        </div>
      </motion.div>
    </div>
  );
};
