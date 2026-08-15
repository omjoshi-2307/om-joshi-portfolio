import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

export interface IntroEyebrowProps {
  className?: string;
}

export const IntroEyebrow: React.FC<IntroEyebrowProps> = ({ className }) => {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
      whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn('flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border/60 text-xs font-mono', className)}
    >
      <div className="flex items-center gap-2 text-foreground font-semibold uppercase tracking-wider">
        <span className="w-2 h-2 rounded-sm bg-accent inline-block" />
        <span>01 // CURRENT IDENTITY</span>
      </div>

      <div className="flex items-center gap-4 text-muted-foreground text-[11px]">
        <span>PCMC / PUNE, IN</span>
        <span className="text-border">•</span>
        <span className="text-accent/90">B.TECH IT (2026)</span>
      </div>
    </motion.div>
  );
};
