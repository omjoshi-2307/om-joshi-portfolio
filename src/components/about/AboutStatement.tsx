import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

export interface AboutStatementProps {
  lead?: string;
  highlight?: string;
  sub?: string;
  className?: string;
}

export const AboutStatement: React.FC<AboutStatementProps> = ({
  lead = 'I tend to understand things much better after trying to',
  highlight = 'build them myself.',
  sub = 'For me, engineering is not an abstract theory—it is a continuous cycle of curiosity, experimentation, and finding out what actually holds up.',
  className,
}) => {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
      whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={cn('relative flex flex-col gap-6 sm:gap-8', className)}
    >
      <div className="relative z-10 flex flex-col gap-4 sm:gap-6">
        {/* Core Monumental Statement Quote */}
        <blockquote className="statement-monumental font-medium text-foreground tracking-tight">
          <span>{lead} </span>
          <span className="text-accent underline decoration-accent/40 underline-offset-8 decoration-2 font-bold">
            {highlight}
          </span>
        </blockquote>

        {/* Supporting Context & Subtitle */}
        {sub && (
          <p className="editorial-lead text-muted-foreground leading-relaxed max-w-3xl font-sans">
            {sub}
          </p>
        )}
      </div>
    </motion.div>
  );
};
