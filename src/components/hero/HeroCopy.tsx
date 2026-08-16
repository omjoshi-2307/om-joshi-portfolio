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
      transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={cn('max-w-xl flex flex-col gap-3', className)}
    >
      <p className="editorial-lead text-muted-foreground leading-relaxed">
        Building software across modern web stacks, hardware interfaces, and creative technology.
        Driven by curiosity — exploring how modern web tools, Web3 protocols, AI assistance, and core systems shape what comes next.
      </p>
    </motion.div>
  );
};
