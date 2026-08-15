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
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl border border-border bg-card/60 backdrop-blur-xs transition-all duration-300 hover:border-accent/40 hover:bg-card/90 shadow-xs',
        className
      )}
    >
      <div className="flex flex-col gap-6">
        {/* Card Header Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-border/70 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="font-display font-black text-xl text-accent tracking-tighter">
              {area.number}
            </span>
            <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
              <Icon className="w-4 h-4" />
            </div>
          </div>

          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-surface border border-border text-muted-foreground uppercase font-semibold">
            {area.visualCategory}
          </span>
        </div>

        {/* Title & Subtitle */}
        <div className="flex flex-col gap-1.5">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground tracking-tight group-hover:text-accent transition-colors">
            {area.title}
          </h3>
          <p className="text-xs sm:text-sm font-medium text-foreground/80 font-mono">
            {area.subtitle}
          </p>
        </div>

        {/* Concept Quote Callout */}
        <div className="p-3.5 rounded-xl bg-surface/60 border-l-2 border-accent text-xs font-medium text-foreground/90 italic leading-relaxed">
          "{area.conceptQuote}"
        </div>

        {/* Narrative Description */}
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          {area.narrative}
        </p>

        {/* Topic Chips */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {area.topics.map((topic) => (
            <span
              key={topic}
              className="px-2.5 py-1 rounded bg-surface border border-border text-[11px] font-mono text-muted-foreground group-hover:text-foreground transition-colors"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Tag */}
      <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
        <span>FRONTIER: ACTIVE LAB</span>
        <span className="flex items-center gap-1 text-accent opacity-0 group-hover:opacity-100 transition-opacity">
          <span>INVESTIGATING</span>
          <ArrowUpRight className="w-3 h-3" />
        </span>
      </div>
    </motion.article>
  );
};
