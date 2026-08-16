import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

export interface HeroCopyProps {
  className?: string;
}

export const HeroCopy: React.FC<HeroCopyProps> = ({ className }) => {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
      animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={cn('max-w-2xl flex flex-col gap-4', className)}
    >
      <p className="editorial-lead text-muted-foreground leading-relaxed">
        Building software across modern web stacks, physical hardware interfaces, and distributed protocols.
        Focused on bridging clean interfaces with deep technical foundations.
      </p>

      {/* Subtle Technical Spec Marker */}
      <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-mono text-muted-foreground/80">
        <span className="text-foreground/90 font-medium">CORE CRAFT:</span>
        <span>React</span>
        <span>•</span>
        <span>TypeScript</span>
        <span>•</span>
        <span>C++</span>
        <span>•</span>
        <span>Stellar / Soroban</span>
        <span>•</span>
        <span>AI Tools</span>
      </div>
    </motion.div>
  );
};
