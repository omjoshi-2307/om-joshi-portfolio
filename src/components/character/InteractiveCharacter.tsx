import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useCharacterLookAt } from './useCharacterLookAt';
import { Character } from './Character';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';
import type { InteractiveCharacterProps } from './types';

const sizeMap = {
  sm: 'w-28 h-28',
  md: 'w-44 h-44',
  lg: 'w-60 h-60',
  hero: 'w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96',
};

export const InteractiveCharacter: React.FC<InteractiveCharacterProps> = ({
  className,
  size = 'hero',
  targetOverride = null,
  showPedestal = true,
  showStatusBadge = true,
  interactive = true,
  onCharacterClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const [isWaving, setIsWaving] = useState(false);

  const lookAngle = useCharacterLookAt(containerRef, {
    enabled: interactive,
    targetOverride,
    maxHeadYaw: 16,
    maxHeadPitch: 12,
    maxEyeOffset: 3.5,
  });

  const handleClick = () => {
    if (onCharacterClick) {
      onCharacterClick();
    }
    if (!prefersReduced) {
      setIsWaving(true);
      setTimeout(() => setIsWaving(false), 800);
    }
  };

  return (
    <motion.div
      ref={containerRef}
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 20 }}
      animate={prefersReduced ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className={cn('relative flex flex-col items-center select-none group', className)}
    >
      {/* Editorial Decorative Coordinates / Frame Pedestal */}
      {showPedestal && (
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-3xl border border-border/70 bg-gradient-to-b from-surface/40 via-surface/20 to-transparent -z-10 transition-colors duration-300"
        >
          {/* Subtle Corner Crosshairs */}
          <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-accent/40" />
          <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-accent/40" />
          <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-accent/40" />
          <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-accent/40" />

          {/* Coordinate Tag */}
          <div className="absolute -top-2.5 left-6 px-2 py-0.5 rounded bg-card border border-border text-[9px] font-mono text-muted-foreground uppercase tracking-wider">
            AVATAR // 18.5204° N, 73.8567° E
          </div>
        </div>
      )}

      {/* Main Character Illustration Container */}
      <motion.div
        onClick={handleClick}
        animate={isWaving ? { rotate: [0, -6, 6, -4, 4, 0] } : {}}
        transition={{ duration: 0.6 }}
        className={cn(
          'relative flex items-center justify-center p-4 cursor-pointer transition-transform duration-300',
          sizeMap[size]
        )}
      >
        <Character lookAngle={lookAngle} />
      </motion.div>

      {/* Minimal Status Beacon (Bottom Pill) */}
      {showStatusBadge && (
        <div className="mt-2 flex items-center gap-2 px-2.5 py-1 rounded-full bg-card/80 border border-border/80 text-[10px] font-mono text-muted-foreground backdrop-blur-xs shadow-xs">
          <span
            className={cn(
              'w-1.5 h-1.5 rounded-full transition-colors',
              lookAngle.isTracking ? 'bg-emerald-500 animate-pulse' : 'bg-muted-foreground'
            )}
          />
          <span className="tracking-wider uppercase">
            {lookAngle.isTracking ? 'Tracking Cursor' : 'Idle System'}
          </span>
        </div>
      )}
    </motion.div>
  );
};
