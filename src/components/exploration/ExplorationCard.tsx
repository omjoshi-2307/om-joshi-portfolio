import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldAlert, Cpu, Lock, Terminal, ArrowUpRight } from 'lucide-react';
import type { ExplorationArea, ExplorationVisualCategory } from '@/types/exploration';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

export interface ExplorationCardProps {
  area: ExplorationArea;
  className?: string;
}

const getCategoryIcon = (category: ExplorationVisualCategory) => {
  switch (category) {
    case 'ai':
      return Sparkles;
    case 'security':
      return ShieldAlert;
    case 'systems':
      return Cpu;
    case 'web3':
      return Lock;
    case 'tooling':
      return Terminal;
  }
};

export const ExplorationCard: React.FC<ExplorationCardProps> = ({ area, className }) => {
  const prefersReduced = useReducedMotion();
  const Icon = getCategoryIcon(area.visualCategory);

  return (
    <motion.article
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
      whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'group relative flex flex-col justify-between p-6 rounded-xl border border-border bg-card shadow-subtle transition-colors duration-150 hover:border-border-strong',
        className
      )}
    >
      <div className="flex flex-col gap-4">
        {/* Card Header Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-border text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="font-display font-black text-xl text-accent tracking-tighter" aria-hidden="true">
              {area.number}
            </span>
            <div className="w-7 h-7 rounded-sm bg-elevated border border-border flex items-center justify-center text-accent" aria-hidden="true">
              <Icon className="w-3.5 h-3.5" />
            </div>
          </div>

          <span className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-elevated border border-border text-muted-foreground uppercase font-semibold">
            {area.visualCategory}
          </span>
        </div>

        {/* Title & Subtitle */}
        <div className="flex flex-col gap-1">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground tracking-tight group-hover:text-accent transition-colors duration-150">
            {area.title}
          </h3>
          <p className="text-xs font-mono text-muted-foreground">
            {area.subtitle}
          </p>
        </div>

        {/* Concept Quote Callout */}
        <blockquote className="p-3 rounded-md bg-elevated border-l-2 border-accent text-xs font-medium text-foreground/90 italic leading-relaxed shadow-subtle">
          "{area.conceptQuote}"
        </blockquote>

        {/* Topic Chips */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {area.topics.map((topic) => (
            <span
              key={topic}
              className="px-2 py-0.5 rounded-sm bg-elevated border border-border text-[10px] font-mono text-muted-foreground group-hover:text-foreground transition-colors duration-150"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Tag */}
      <div className="mt-5 pt-3 border-t border-border flex items-center justify-between text-[10px] font-mono text-muted-foreground">
        <span>FRONTIER: ACTIVE LAB</span>
        <span className="flex items-center gap-1 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-150 font-semibold">
          <span>EXPLORING</span>
          <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
        </span>
      </div>
    </motion.article>
  );
};
