import React from 'react';
import type { TechnologyItem as TechItemType } from '@/types/skills';
import { cn } from '@/utils/cn';

export interface TechnologyItemProps {
  item: TechItemType;
  className?: string;
}

export const TechnologyItem: React.FC<TechnologyItemProps> = ({ item, className }) => {
  const isCore = item.tier === 'core';
  const isFamiliar = item.tier === 'familiar';

  return (
    <div
      tabIndex={0}
      role="listitem"
      className={cn(
        'group relative flex flex-col justify-between p-3 sm:p-3.5 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent select-none',
        isCore
          ? 'bg-card border-border hover:border-accent/50 hover:bg-surface/90 shadow-xs'
          : isFamiliar
          ? 'bg-card/70 border-border/80 hover:border-border hover:bg-surface/80'
          : 'bg-surface/40 border-dashed border-border/60 hover:border-border hover:bg-surface/60',
        className
      )}
    >
      <div className="flex items-center justify-between gap-2">
        <span
          className={cn(
            'text-xs sm:text-sm font-semibold tracking-tight transition-colors',
            isCore ? 'text-foreground group-hover:text-accent' : 'text-foreground/90'
          )}
        >
          {item.name}
        </span>

        {/* Tier indicator dot */}
        <span
          title={isCore ? 'Core daily stack' : isFamiliar ? 'Familiar' : 'Exploring'}
          className={cn(
            'w-1.5 h-1.5 rounded-full shrink-0',
            isCore
              ? 'bg-accent shadow-xs'
              : isFamiliar
              ? 'border border-accent/70'
              : 'border border-dashed border-muted-foreground'
          )}
        />
      </div>

      {/* Associated Project / Note Tag */}
      {item.associatedProjects && item.associatedProjects.length > 0 ? (
        <div className="mt-2 flex flex-wrap gap-1">
          {item.associatedProjects.map((p) => (
            <span
              key={p}
              className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-surface border border-border text-muted-foreground group-hover:text-foreground transition-colors"
            >
              {p}
            </span>
          ))}
        </div>
      ) : item.contextNote ? (
        <span className="mt-2 text-[9px] font-mono text-muted-foreground block">
          {item.contextNote}
        </span>
      ) : null}
    </div>
  );
};
