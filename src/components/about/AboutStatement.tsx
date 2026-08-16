import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Quote } from 'lucide-react';
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
      transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'relative p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-border/80 bg-card/60 dark:bg-card/40 backdrop-blur-xs shadow-xs overflow-hidden group',
        className
      )}
    >
      {/* Subtle Background Accent Gradient */}
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-accent/5 blur-3xl pointer-events-none"
      />

      {/* Decorative Quote Watermark */}
      <div
        aria-hidden="true"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-accent/10 pointer-events-none select-none"
      >
        <Quote className="w-16 h-16 sm:w-20 sm:h-20" />
      </div>

      <div className="relative z-10 flex flex-col gap-4 sm:gap-6">
        {/* Core Statement Quote */}
        <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-medium text-foreground leading-[1.25] tracking-tight">
          <span className="text-muted-foreground/70 mr-1.5 font-serif select-none text-2xl sm:text-3xl lg:text-4xl">“</span>
          <span>{lead} </span>
          <span className="text-accent underline decoration-accent/30 underline-offset-4 decoration-2 font-semibold">
            {highlight}
          </span>
          <span className="text-muted-foreground/70 ml-1.5 font-serif select-none text-2xl sm:text-3xl lg:text-4xl">”</span>
        </blockquote>

        {/* Supporting Context & Subtitle */}
        {sub && (
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl font-sans">
            {sub}
          </p>
        )}

        {/* Minimal Corner Crosshairs */}
        <div aria-hidden="true" className="absolute top-2 left-2 w-2 h-2 border-t border-l border-accent/40" />
        <div aria-hidden="true" className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-accent/40" />
      </div>
    </motion.div>
  );
};
