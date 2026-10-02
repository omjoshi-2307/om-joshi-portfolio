import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

export interface ContactHeadingProps {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  className?: string;
}

export const ContactHeading: React.FC<ContactHeadingProps> = ({
  eyebrow = '06 // CONTACT',
  heading = "LET'S BUILD.",
  subheading = 'Whether you are looking for an engineering intern, exploring a builder collaboration, or want to discuss systems, software, and security—my inbox is always open.',
  className,
}) => {
  const prefersReduced = useReducedMotion();

  return (
    <div className={cn('flex flex-col gap-6 max-w-4xl mb-12 sm:mb-16', className)}>
      {/* Eyebrow */}
      <motion.div
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -10 }}
        whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-2.5 technical-eyebrow text-muted-subtle"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
        <span>{eyebrow}</span>
        <span className="text-border">•</span>
        <span className="text-muted-foreground hidden sm:inline-flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-signal inline-block" />
          <span>Open to opportunities</span>
        </span>
      </motion.div>

      {/* Monumental Display Heading */}
      <motion.h2
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
        whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="section-monumental text-foreground uppercase tracking-tight"
      >
        {heading.includes('\n') ? (
          heading.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              <span>{line}</span>
              {i < heading.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))
        ) : (
          <span>{heading}</span>
        )}
      </motion.h2>

      {/* Subtitle */}
      {subheading && (
        <motion.p
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
          whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="editorial-lead text-muted-foreground max-w-2xl text-base sm:text-lg"
        >
          {subheading}
        </motion.p>
      )}
    </div>
  );
};
