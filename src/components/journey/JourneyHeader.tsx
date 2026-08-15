import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

export interface JourneyHeaderProps {
  className?: string;
}

export const JourneyHeader: React.FC<JourneyHeaderProps> = ({ className }) => {
  const prefersReduced = useReducedMotion();

  return (
    <div className={cn('flex flex-col gap-4 max-w-3xl mb-16 sm:mb-20', className)}>
      <motion.div
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
        whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-widest"
      >
        <span className="w-2 h-2 rounded-sm bg-accent inline-block" />
        <span>02 // NARRATIVE EVOLUTION</span>
      </motion.div>

      <motion.h2
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
        whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="section-display text-foreground font-bold tracking-tight"
      >
        How the Kind of Things I Build Changed Over Time
      </motion.h2>

      <motion.p
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
        whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="editorial-lead text-muted-foreground"
      >
        A progressive evolution from low-level programming experiments and physical hardware builds to rapid hackathons, collaborative product engineering, and emerging computing frontiers.
      </motion.p>
    </div>
  );
};
