import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Lightbulb } from 'lucide-react';
import { cn } from '@/utils/cn';
import type { AboutSectionData } from '@/types/about';

export interface AboutNarrativeProps {
  narrative: AboutSectionData['narrative'];
  reflectionQuote?: AboutSectionData['reflectionQuote'];
  className?: string;
}

export const AboutNarrative: React.FC<AboutNarrativeProps> = ({
  narrative,
  reflectionQuote,
  className,
}) => {
  const prefersReduced = useReducedMotion();

  return (
    <div className={cn('flex flex-col gap-10 sm:gap-12', className)}>
      {/* 1. Reflective Narrative Paragraphs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
        {narrative.map((item, index) => (
          <motion.div
            key={item.id}
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
            whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.6,
              delay: 0.15 + index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-col gap-3 group"
          >
            {/* Stage Eyebrow */}
            <div className="flex items-center gap-2 text-[11px] font-mono text-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="tracking-wider uppercase font-semibold">{item.stageLabel}</span>
            </div>

            {/* Headline */}
            <h3 className="text-lg sm:text-xl font-display font-semibold text-foreground tracking-tight group-hover:text-accent transition-colors duration-150">
              {item.headline}
            </h3>

            {/* Content Paragraph */}
            <p className="text-sm sm:text-[15px] text-muted-foreground leading-relaxed font-sans">
              {item.content}
            </p>
          </motion.div>
        ))}
      </div>

      {/* 2. Editorial Reflection Callout Box */}
      {reflectionQuote && (
        <motion.div
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
          whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-6 sm:p-7 rounded-xl border border-border bg-card shadow-subtle overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <div className="w-9 h-9 rounded-sm bg-elevated border border-border flex items-center justify-center text-accent shrink-0">
              <Lightbulb className="w-4 h-4" />
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-mono text-accent uppercase tracking-widest font-semibold">
                {reflectionQuote.context}
              </span>
              <p className="text-sm sm:text-base font-medium text-foreground italic leading-relaxed">
                "{reflectionQuote.quote}"
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};
