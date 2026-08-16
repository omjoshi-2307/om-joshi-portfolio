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
    <div className={cn('flex flex-col gap-6 max-w-4xl mb-16 sm:mb-24', className)}>
      <motion.div
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
        whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-2.5 technical-eyebrow text-muted-subtle"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
        <span>02 // NARRATIVE EVOLUTION</span>
      </motion.div>

      <motion.h2
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
        whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="section-monumental text-foreground uppercase tracking-tight"
      >
        <span>JOURNEY &</span>
        <br />
        <span>GROWTH.</span>
      </motion.h2>

      <motion.p
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
        whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="editorial-lead text-muted-foreground max-w-2xl"
      >
        A progressive evolution from low-level programming experiments and physical hardware builds to rapid hackathons, collaborative product engineering, and emerging computing frontiers.
      </motion.p>
    </div>
  );
};
