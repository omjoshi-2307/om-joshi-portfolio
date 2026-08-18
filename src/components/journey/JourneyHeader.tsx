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
    <div className={cn('flex flex-col gap-3 max-w-3xl mb-10 sm:mb-14', className)}>
      <motion.div
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 10 }}
        whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-2.5 technical-eyebrow text-muted-subtle"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
        <span>02 // JOURNEY • HOW I GOT HERE</span>
      </motion.div>

      <motion.h2
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
        whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="section-monumental text-foreground uppercase tracking-tight"
      >
        <span>TECHNICAL</span>
        <br />
        <span>EVOLUTION.</span>
      </motion.h2>
    </div>
  );
};
