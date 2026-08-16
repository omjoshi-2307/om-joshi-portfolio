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
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'p-6 sm:p-8 rounded-xl border border-border bg-surface flex flex-col gap-6 shadow-subtle',
        className
      )}
    >
      {/* Exploration Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-border text-xs font-mono">
        <div className="flex items-center gap-2 text-accent font-bold uppercase tracking-wider">
          <Compass className="w-4 h-4" />
          <span>ACTIVE RESEARCH & FRONTIER EXPLORATION</span>
        </div>
        <span className="px-2 py-0.5 rounded-sm bg-elevated border border-border text-foreground text-[10px] font-semibold">
          CONTINUOUS GROWTH
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {EXPLORATION_DOMAINS.map((domain, index) => {
          const Icon = index === 0 ? Sparkles : index === 1 ? ShieldAlert : Cpu;

          return (
            <div
              key={domain.id}
              className="p-5 sm:p-6 rounded-lg bg-card border border-border flex flex-col justify-between gap-4 shadow-subtle"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="w-7 h-7 rounded-sm bg-elevated border border-border flex items-center justify-center text-accent">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-elevated border border-border text-muted-foreground">
                    {domain.badge}
                  </span>
                </div>

                <h4 className="text-base font-bold text-foreground font-display">
                  {domain.title}
                </h4>

                <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                  {domain.description}
                </p>
              </div>

              {/* Topics Pills */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
                {domain.topics.map((topic) => (
                  <span
                    key={topic}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-elevated border border-border text-foreground/90"
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
