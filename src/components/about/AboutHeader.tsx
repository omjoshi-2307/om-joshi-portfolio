import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

export interface AboutHeaderProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export const AboutHeader: React.FC<AboutHeaderProps> = ({
  eyebrow = '06 // PERSONAL IDENTITY',
  subtitle = 'The mindset, curiosity, and habits behind the systems.',
  className,
}) => {
  const prefersReduced = useReducedMotion();

  return (
    <div className={cn('flex flex-col gap-6 max-w-4xl mb-16 sm:mb-24', className)}>
      {/* Eyebrow Context Badge */}
      <motion.div
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -10 }}
        whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-2.5 technical-eyebrow text-muted-subtle"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
        <span>{eyebrow}</span>
      </motion.div>

      {/* Monumental Title */}
      <motion.h2
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
        whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="section-monumental text-foreground uppercase tracking-tight"
      >
        <span>BEYOND</span>
        <br />
        <span>THE STACK.</span>
      </motion.h2>

      {/* Editorial Subtitle */}
      {subtitle && (
        <motion.p
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
          whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="editorial-lead text-muted-foreground max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
