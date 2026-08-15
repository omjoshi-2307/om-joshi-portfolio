import React from 'react';
import { cn } from '@/utils/cn';

export interface BrandProps {
  className?: string;
  onClick?: () => void;
  showLocation?: boolean;
}

export const Brand: React.FC<BrandProps> = ({
  className,
  onClick,
  showLocation = true,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick();
    }
    // Smooth scroll to top if clicked on current page
    if (window.location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <a
      href="#top"
      onClick={handleClick}
      aria-label="Om Joshi — Home"
      className={cn(
        'group inline-flex items-center gap-3 py-1 cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-accent rounded-sm',
        className
      )}
    >
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="font-display text-base sm:text-lg font-bold tracking-tight text-foreground group-hover:text-accent transition-colors duration-200">
            Om Joshi
          </span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent/80 group-hover:scale-125 transition-transform duration-200" />
        </div>
      </div>

      {showLocation && (
        <span className="hidden md:inline-flex items-center gap-1.5 text-[11px] font-mono tracking-wider text-muted-foreground px-2 py-0.5 rounded border border-border/80 bg-surface/60">
          <span>Pune, IN</span>
        </span>
      )}
    </a>
  );
};
