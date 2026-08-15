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
        Engineering software across modern web stacks, distributed systems, and creative technology.
        Driven by deliberate craft — exploring how intelligent tools, Web3 protocols, and resilient architectures shape what comes next.
      </p>
    </motion.div>
  );
};
