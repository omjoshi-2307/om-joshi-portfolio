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
      className={cn('flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono', className)}
    >
      {/* Availability Status with Signal Yellow indicator */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-surface border border-border text-foreground shadow-subtle">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-signal" />
        </span>
        <span className="text-[11px] font-semibold tracking-wider uppercase">AVAILABLE FOR BUILDS</span>
      </div>

      {/* Geolocation Tag */}
      <div className="flex items-center gap-2 text-muted-foreground text-[11px] tracking-widest uppercase">
        <span className="text-border">/</span>
        <span>PUNE, IN (18.52° N, 73.85° E)</span>
      </div>
    </motion.div>
  );
};
