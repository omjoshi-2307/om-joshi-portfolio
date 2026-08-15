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
    <div className={cn('flex flex-col gap-3', className)}>
      {/* Primary Display Name */}
      <div className="overflow-hidden">
        <motion.h1
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: '80%' }}
          animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: '0%' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="hero-display text-foreground font-black uppercase tracking-tight"
        >
          Om Joshi
        </motion.h1>
      </div>

      {/* Role / Focus Subheading */}
      <div className="overflow-hidden">
        <motion.div
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: '100%' }}
          animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: '0%' }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 text-base sm:text-xl md:text-2xl font-display font-medium text-foreground/90"
        >
          <span>Information Technology Student</span>
          <span className="text-accent">•</span>
          <span>Builder</span>
        </motion.div>
      </div>
    </div>
  );
};
