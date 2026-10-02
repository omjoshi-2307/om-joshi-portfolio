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
      {/* Primary Monumental Display Name: OM JOSHI */}
      <div className="overflow-hidden">
        <motion.h1
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: '100%' }}
          animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: '0%' }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="hero-monumental text-foreground uppercase select-none tracking-tight"
        >
          <span className="block">OM</span>
          <span className="block text-foreground/90">JOSHI</span>
        </motion.h1>
      </div>

      {/* Role & Core Identity */}
      <div className="overflow-hidden pt-1 sm:pt-2">
        <motion.div
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: '100%' }}
          animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: '0%' }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-xl md:text-2xl font-mono text-foreground tracking-tight font-medium flex flex-wrap items-center gap-x-2.5 gap-y-1"
        >
          <span className="text-accent font-semibold">B.Tech IT Student</span>
          <span className="text-muted-subtle" aria-hidden="true">·</span>
          <span>Builder</span>
          <span className="text-muted-subtle" aria-hidden="true">·</span>
          <span className="text-muted-foreground">Cybersecurity Enthusiast</span>
        </motion.div>
      </div>
    </div>
  );
};
