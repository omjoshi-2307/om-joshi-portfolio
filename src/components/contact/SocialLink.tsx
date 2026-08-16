import React from 'react';
import { ArrowUpRight, Lock } from 'lucide-react';
import { cn } from '@/utils/cn';
import type { SocialLinkItem } from '@/types/contact';

export interface SocialLinkProps {
  item: SocialLinkItem;
  className?: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ item, className }) => {
  const isPublic = item.isPublic !== false;

  if (!isPublic) {
    return (
      <div
        className={cn(
          'relative p-4 sm:p-5 rounded-xl border border-dashed border-border/70 bg-surface/30 flex flex-col justify-between gap-3 text-muted-foreground select-none',
          className
        )}
        title="Public profile URL pending verification"
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-foreground/70">
            {item.label}
          </span>
          <span className="flex items-center gap-1 text-[10px] font-mono text-muted-foreground/80 px-2 py-0.5 rounded bg-card border border-border/60">
            <Lock className="w-2.5 h-2.5" />
            <span>PENDING PUBLIC URL</span>
          </span>
        </div>

        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-muted-foreground/60">{item.handle}</span>
          <span className="text-[10px] text-muted-foreground/50">Verification in progress</span>
        </div>
      </div>
    );
  }

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={item.ariaLabel}
      className={cn(
        'group relative p-4 sm:p-5 rounded-xl border border-border/80 bg-card/60 dark:bg-card/40 backdrop-blur-xs flex flex-col justify-between gap-3 transition-all duration-200 hover:border-accent/40 hover:bg-surface/50 hover:shadow-xs focus-visible:outline-2 focus-visible:outline-accent',
        className
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-foreground group-hover:text-accent transition-colors">
          {item.label}
        </span>
        <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
      </div>

      <div className="text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors truncate">
        {item.handle}
      </div>
    </a>
  );
};
