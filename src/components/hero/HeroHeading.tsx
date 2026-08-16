import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

export interface HeroHeadingProps {
  className?: string;
}

export const HeroHeading: React.FC<HeroHeadingProps> = ({ className }) => {
  const prefersReduced = useReducedMotion();

  return (
    <div className={cn('flex flex-col gap-3 sm:gap-4', className)}>
      {/* Primary Monumental Display Name: OM / JOSHI */}
      <div className="overflow-hidden">
        <motion.h1
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: '100%' }}
          animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: '0%' }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="hero-monumental text-foreground uppercase select-none flex flex-col"
        >
          <span>OM</span>
          <span>JOSHI</span>
        </motion.h1>
      </div>

      {/* Medium Role / Discipline Statement */}
      <div className="overflow-hidden pt-1 sm:pt-2">
        <motion.div
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: '100%' }}
          animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: '0%' }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-2xl md:text-3xl font-display font-semibold text-foreground/90 tracking-tight"
        >
          <span>Information Technology Student</span>
          <span className="text-muted-subtle mx-2 font-normal hidden sm:inline">•</span>
          <span className="text-muted-foreground font-normal block sm:inline">Software Builder & Systems Explorer</span>
        </motion.div>
      </div>
    </div>
  );
};
