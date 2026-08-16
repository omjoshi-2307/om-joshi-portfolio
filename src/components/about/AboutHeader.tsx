import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { User, Sparkles } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface AboutHeaderProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export const AboutHeader: React.FC<AboutHeaderProps> = ({
  eyebrow = '05 // PERSONAL IDENTITY',
  title = 'Beyond the Stack',
  subtitle = 'The mindset, background, and habits behind the work.',
  className,
}) => {
  const prefersReduced = useReducedMotion();

  return (
    <div className={cn('flex flex-col gap-3 max-w-2xl', className)}>
      {/* Eyebrow Context Badge */}
      <motion.div
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -10 }}
        whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-2.5 text-xs font-mono text-accent"
      >
        <span className="flex items-center justify-center w-5 h-5 rounded-md bg-accent/10 border border-accent/20">
          <User className="w-3 h-3 text-accent" />
        </span>
        <span className="font-semibold tracking-wider uppercase">{eyebrow}</span>
        <span className="text-border">•</span>
        <span className="text-muted-foreground hidden sm:inline flex items-center gap-1">
          <Sparkles className="w-2.5 h-2.5 text-accent/80 inline" />
          Mindset & Story
        </span>
      </motion.div>

      {/* Section Title */}
      <motion.h2
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
        whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight"
      >
        {title}
      </motion.h2>

      {/* Editorial Subtitle */}
      {subtitle && (
        <motion.p
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
          whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-base sm:text-lg text-muted-foreground leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
