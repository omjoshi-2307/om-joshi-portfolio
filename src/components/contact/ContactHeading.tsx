import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Send, Sparkles } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface ContactHeadingProps {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  className?: string;
}

export const ContactHeading: React.FC<ContactHeadingProps> = ({
  eyebrow = "06 // WHAT'S NEXT?",
  heading = "Let's Build Something.",
  subheading = 'Whether you have an interesting idea to discuss, a complex system to engineer, or just want to talk tech—my inbox is always open.',
  className,
}) => {
  const prefersReduced = useReducedMotion();

  return (
    <div className={cn('flex flex-col gap-3 max-w-3xl', className)}>
      {/* Eyebrow */}
      <motion.div
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -10 }}
        whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-2.5 text-xs font-mono text-accent"
      >
        <span className="flex items-center justify-center w-5 h-5 rounded-md bg-accent/10 border border-accent/20">
          <Send className="w-3 h-3 text-accent" />
        </span>
        <span className="font-semibold tracking-wider uppercase">{eyebrow}</span>
        <span className="text-border">•</span>
        <span className="text-muted-foreground hidden sm:inline flex items-center gap-1">
          <Sparkles className="w-2.5 h-2.5 text-accent/80 inline" />
          Direct Communication
        </span>
      </motion.div>

      {/* Main Display Heading */}
      <motion.h2
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
        whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground tracking-tight"
      >
        {heading}
      </motion.h2>

      {/* Subtitle */}
      {subheading && (
        <motion.p
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
          whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-base sm:text-lg text-muted-foreground leading-relaxed font-sans"
        >
          {subheading}
        </motion.p>
      )}
    </div>
  );
};
