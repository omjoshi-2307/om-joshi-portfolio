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
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 10 }}
      animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={cn('flex flex-wrap items-center gap-x-3.5 gap-y-2 text-xs font-mono', className)}
    >
      {/* Status Badge with Live Green Signal */}
      <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded border border-border bg-card text-foreground shadow-subtle">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-signal" />
        </span>
        <span className="text-[11px] font-semibold tracking-wider uppercase text-foreground">
          OPEN TO OPPORTUNITIES
        </span>
      </div>

      {/* Geolocation & Coordinates */}
      <div className="flex items-center gap-2 text-muted-foreground text-[11px] tracking-wider uppercase">
        <span className="text-border">/</span>
        <span>PUNE, IN (18.52° N, 73.85° E)</span>
      </div>
    </motion.div>
  );
};
