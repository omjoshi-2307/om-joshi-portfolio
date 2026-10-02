import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { TECHNICAL_PROGRESSION } from '@/data/journey';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface JourneyHeaderProps {
  className?: string;
}

export const JourneyHeader: React.FC<JourneyHeaderProps> = ({ className }) => {
  const prefersReduced = useReducedMotion();

  return (
    <div className={cn('flex flex-col gap-6 max-w-4xl mb-12 sm:mb-16', className)}>
      {/* Eyebrow */}
      <motion.div
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 10 }}
        whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-2.5 technical-eyebrow text-muted-subtle"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
        <span>04 // JOURNEY</span>
      </motion.div>

      {/* Main Monumental Section Headline */}
      <motion.h2
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
        whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="section-monumental text-foreground uppercase tracking-tight"
      >
        HOW I GOT HERE.
      </motion.h2>

      {/* Narrative Lead */}
      <motion.p
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
        whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
        className="editorial-lead text-muted-foreground text-base sm:text-lg max-w-2xl leading-relaxed"
      >
        I started by experimenting with hardware and gradually moved toward software, web development, Web3, and cybersecurity.
      </motion.p>

      {/* Technical Progression Breadcrumb Banner */}
      <motion.div
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 10 }}
        whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
        className="pt-2 flex flex-wrap items-center gap-2 sm:gap-2.5 font-mono text-xs"
        aria-label="Technical progression: Hardware to Software to Web to Web3 to Cybersecurity"
      >
        {TECHNICAL_PROGRESSION.map((step, idx) => (
          <React.Fragment key={step}>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-sm bg-surface border border-border text-foreground font-semibold shadow-subtle hover:border-accent/50 transition-colors">
              <span className="text-[10px] text-accent font-bold">0{idx + 1}</span>
              <span className="tracking-wider">{step}</span>
            </div>
            {idx < TECHNICAL_PROGRESSION.length - 1 && (
              <ArrowRight className="w-3.5 h-3.5 text-accent/70 shrink-0" aria-hidden="true" />
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
