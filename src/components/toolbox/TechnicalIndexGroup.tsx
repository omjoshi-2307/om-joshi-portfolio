import React from 'react';
import { motion } from 'framer-motion';
import type { SkillCategory } from '@/types/skills';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

export interface TechnicalIndexGroupProps {
  category: SkillCategory;
  className?: string;
  isFirst?: boolean;
}

export const TechnicalIndexGroup: React.FC<TechnicalIndexGroupProps> = ({
  category,
  className,
  isFirst = false,
}) => {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
      whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'group relative py-8 sm:py-10 flex flex-col lg:flex-row lg:items-start justify-between gap-8 sm:gap-12 border-b border-border transition-colors',
        isFirst && 'border-t',
        className
      )}
    >
      {/* Category Index & Label (Left Column / 4 cols) */}
      <div className="lg:w-1/3 flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <span className="font-mono font-bold text-base text-accent tracking-wider" aria-hidden="true">
            {category.number}
          </span>
          <span className="text-border" aria-hidden="true">/</span>
          <h3 className="font-display font-bold text-foreground uppercase tracking-wider text-sm sm:text-base">
            {category.label}
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-sm font-sans">
          {category.description}
        </p>
      </div>

      {/* Typographic Technical Catalog (Right Column / 8 cols) */}
      <ul className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-4 items-baseline">
        {category.technologies.map((tech) => {
          const isCore = tech.tier === 'core';

          return (
            <li
              key={tech.name}
              className="group/item flex items-baseline justify-between gap-2 py-1 select-none transition-colors duration-150 cursor-default"
            >
              <div className="flex items-center gap-2">
                {isCore && (
                  <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block shrink-0" aria-hidden="true" />
                )}
                <span className="font-display text-base sm:text-lg md:text-xl font-bold text-foreground/90 group-hover/item:text-accent transition-colors duration-150 tracking-tight">
                  {tech.name}
                </span>
              </div>

              {/* Tiny Technical Tier annotation */}
              <span className="font-mono text-[10px] text-muted-subtle uppercase tracking-widest shrink-0 hidden sm:inline-block" aria-label={`Tier: ${isCore ? 'Core daily stack' : 'Base familiarity'}`}>
                {isCore ? 'CORE' : 'BASE'}
              </span>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};
