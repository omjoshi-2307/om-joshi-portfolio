import React from 'react';
import { cn } from '@/utils/cn';

export interface HeroBackgroundProps {
  className?: string;
}

export const HeroBackground: React.FC<HeroBackgroundProps> = ({ className }) => {
  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 overflow-hidden select-none -z-10', className)}
    >
      {/* Restrained Architectural Grid Lines */}
      <div className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04] bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Subtle Coordinate Axis Rules */}
      <div className="absolute top-1/3 left-0 right-0 border-b border-border/30" />
      <div className="absolute top-0 bottom-0 left-1/4 border-r border-border/20 hidden lg:block" />
      
      {/* Subtle Coordinate Marker Ticks */}
      <div className="absolute top-12 right-12 font-mono text-[9px] text-muted-foreground/40 hidden md:block">
        GRID // X: 0184.92 • Y: 0738.56
      </div>
    </div>
  );
};
