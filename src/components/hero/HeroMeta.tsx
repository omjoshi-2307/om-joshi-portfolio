import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

export interface HeroMetaProps {
  className?: string;
}

export const HeroMeta: React.FC<HeroMetaProps> = ({ className }) => {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
      animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={cn('flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-muted-foreground', className)}
    >
      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-surface/70 border border-border">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        <span className="text-foreground font-medium">PUNE, IN</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-border">/</span>
        <span>B.TECH IT</span>
      </div>

      <div className="flex items-center gap-2 hidden sm:flex">
        <span className="text-border">/</span>
        <span className="text-accent/90">BUILDER & EXPLORER</span>
      </div>
    </motion.div>
  );
};
