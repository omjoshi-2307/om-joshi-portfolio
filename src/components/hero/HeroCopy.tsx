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
      <p className="editorial-lead text-muted-foreground leading-relaxed text-base sm:text-lg font-sans">
        Undergraduate Information Technology student based in Pune. I learn by building real software, exploring cybersecurity, and experimenting with Web3, AI, and developer tools.
      </p>

      {/* Subtle Technical Spec Marker */}
      <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-mono text-muted-foreground">
        <span className="text-foreground font-semibold">CORE FOCUS:</span>
        <span className="px-2 py-0.5 rounded bg-surface border border-border text-foreground/90">Software Dev</span>
        <span className="text-muted-subtle">•</span>
        <span className="px-2 py-0.5 rounded bg-surface border border-border text-foreground/90">Cybersecurity</span>
        <span className="text-muted-subtle">•</span>
        <span className="px-2 py-0.5 rounded bg-surface border border-border text-foreground/90">AI & Vision</span>
        <span className="text-muted-subtle">•</span>
        <span className="px-2 py-0.5 rounded bg-surface border border-border text-foreground/90">Web3 Protocols</span>
      </div>
    </motion.div>
  );
};
