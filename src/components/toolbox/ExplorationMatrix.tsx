import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles, ShieldAlert, Cpu } from 'lucide-react';
import { EXPLORATION_DOMAINS } from '@/data/skills';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

export interface ExplorationMatrixProps {
  className?: string;
}

export const ExplorationMatrix: React.FC<ExplorationMatrixProps> = ({ className }) => {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'p-8 sm:p-10 rounded-3xl border border-border bg-surface/40 dark:bg-surface/20 flex flex-col gap-8 shadow-xs',
        className
      )}
    >
      {/* Exploration Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-border/80 text-xs font-mono">
        <div className="flex items-center gap-2 text-accent font-bold uppercase tracking-wider">
          <Compass className="w-4 h-4" />
          <span>ACTIVE RESEARCH & FRONTIER EXPLORATION</span>
        </div>
        <span className="px-2.5 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20 text-[10px] font-semibold">
          CONTINUOUS GROWTH
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {EXPLORATION_DOMAINS.map((domain, index) => {
          const Icon = index === 0 ? Sparkles : index === 1 ? ShieldAlert : Cpu;

          return (
            <div
              key={domain.id}
              className="p-6 rounded-2xl bg-card border border-border flex flex-col justify-between gap-4 shadow-xs"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface border border-border text-muted-foreground">
                    {domain.badge}
                  </span>
                </div>

                <h4 className="text-base font-bold text-foreground">
                  {domain.title}
                </h4>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {domain.description}
                </p>
              </div>

              {/* Topics Pills */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/60">
                {domain.topics.map((topic) => (
                  <span
                    key={topic}
                    className="text-[10px] font-mono px-2 py-1 rounded bg-surface/70 border border-border/80 text-foreground/90"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};
