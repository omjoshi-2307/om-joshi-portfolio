import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

export interface IntroDescriptionProps {
  className?: string;
}

export const IntroDescription: React.FC<IntroDescriptionProps> = ({ className }) => {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
      whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={cn('text-base sm:text-lg text-muted-foreground leading-relaxed', className)}
    >
      <p>
        Building from first principles—from wiring microcontrollers and programming autonomous obstacle-avoiding robots to designing full-stack web applications and decentralized smart contract protocols like <span className="text-foreground font-semibold underline decoration-accent/40 underline-offset-4">SureD</span>.
      </p>
    </motion.div>
  );
};
