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
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 16 }}
      animate={prefersReduced ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className={cn('relative flex flex-col items-center select-none group', className)}
    >
      {/* Editorial Decorative Coordinates / Frame Pedestal with subtle lavender atmosphere */}
      {showPedestal && (
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-xl border border-border-lavender bg-surface-lavender shadow-warm -z-10 transition-colors duration-150 group-hover:border-border-strong"
        >
          {/* Subtle Coordinate Tag */}
          <div className="absolute -top-2.5 left-6 px-2 py-0.5 rounded-sm bg-surface border border-border text-[9px] font-mono text-muted-subtle uppercase tracking-wider">
            AVATAR // 18.52° N, 73.85° E
          </div>
        </div>
      )}

      {/* Main Character Illustration Container */}
      <motion.div
        onClick={handleClick}
        animate={isWaving ? { rotate: [0, -6, 6, -4, 4, 0] } : {}}
        transition={{ duration: 0.6 }}
        className={cn(
          'relative flex items-center justify-center p-4 cursor-pointer transition-transform duration-150',
          sizeMap[size]
        )}
      >
        <Character lookAngle={lookAngle} />
      </motion.div>

      {/* Minimal Status Beacon */}
      {showStatusBadge && (
        <div className="mt-2 flex items-center gap-2 px-2.5 py-1 rounded-sm bg-surface border border-border text-[10px] font-mono text-muted-foreground shadow-subtle">
          <span
            className={cn(
              'w-1.5 h-1.5 rounded-full transition-colors',
              lookAngle.isTracking ? 'bg-signal' : 'bg-muted-subtle'
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
