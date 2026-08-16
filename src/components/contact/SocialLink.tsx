import React from 'react';
import { ArrowUpRight, Lock } from 'lucide-react';
import { usePointer } from '@/hooks/usePointer';
import { cn } from '@/utils/cn';
import type { SocialLinkItem } from '@/types/contact';

export interface SocialLinkProps {
  item: SocialLinkItem;
  className?: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ item, className }) => {
  const isPublic = item.isPublic !== false;
  const { setPointerState, resetPointerState } = usePointer();

  if (!isPublic) {
    return (
      <div
        className={cn(
          'relative p-4 sm:p-5 rounded-md border border-dashed border-border bg-card flex flex-col justify-between gap-3 text-muted-foreground select-none shadow-subtle',
          className
        )}
        title="Public profile URL pending verification"
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-foreground/70">
            {item.label}
          </span>
          <span className="flex items-center gap-1 text-[10px] font-mono text-muted-foreground px-2 py-0.5 rounded-sm bg-elevated border border-border">
            <Lock className="w-2.5 h-2.5" aria-hidden="true" />
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
      onMouseEnter={() => setPointerState('link')}
      onMouseLeave={resetPointerState}
      className={cn(
        'group relative p-4 sm:p-5 min-h-[44px] rounded-md border border-border bg-card shadow-subtle flex flex-col justify-between gap-3 transition-colors duration-150 hover:border-border-strong hover:bg-elevated focus-visible:outline-2 focus-visible:outline-accent',
        className
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-foreground group-hover:text-accent transition-colors duration-150">
          {item.label}
        </span>
        <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150" aria-hidden="true" />
      </div>

      <div className="text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors duration-150 truncate">
        {item.handle}
      </div>
    </a>
  );
};
