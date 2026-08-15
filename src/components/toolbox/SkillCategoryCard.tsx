import React from 'react';
import { motion } from 'framer-motion';
import { TechnologyItem } from './TechnologyItem';
import type { SkillCategory } from '@/types/skills';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

export interface SkillCategoryCardProps {
  category: SkillCategory;
  className?: string;
}

export const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({ category, className }) => {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
      whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'flex flex-col gap-4 p-6 sm:p-7 rounded-2xl border border-border bg-card/60 backdrop-blur-xs shadow-xs',
        className
      )}
    >
      {/* Category Header */}
      <div className="flex flex-col gap-1 pb-3 border-b border-border/70">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="font-display font-black text-lg text-accent tracking-tighter">
            {category.number}
          </span>
          <span className="px-2 py-0.5 rounded bg-surface border border-border text-[10px] uppercase font-semibold text-foreground">
            {category.label}
          </span>
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          {category.description}
        </p>
      </div>

      {/* Technologies Grid */}
      <div role="list" className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2.5 pt-1">
        {category.technologies.map((tech) => (
          <TechnologyItem key={tech.name} item={tech} />
        ))}
      </div>
    </motion.div>
  );
};
