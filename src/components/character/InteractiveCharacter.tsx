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
  customCoordinateText,
  customBadgeText,
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

  // Subtle 3D perspective rotation angles based on cursor look-at kinematics
  const tiltX = prefersReduced ? 0 : -lookAngle.headPitch * 0.35;
  const tiltY = prefersReduced ? 0 : lookAngle.headYaw * 0.35;

  return (
    <motion.div
      ref={containerRef}
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 16 }}
      animate={prefersReduced ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className={cn('relative flex flex-col items-center select-none group', className)}
      style={{
        perspective: 1200,
      }}
    >
      {/* 3D Depth Canvas — tilts subtly with mouse position */}
      <motion.div
        animate={prefersReduced ? {} : { rotateX: tiltX, rotateY: tiltY }}
        transition={{
          type: 'spring',
          stiffness: 180,
          damping: 24,
          mass: 0.8,
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
        className="relative flex flex-col items-center"
      >
        {/* Layer 1: Frame Pedestal / Background Horizon (Z = -14px) */}
        {showPedestal && (
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-xl border border-border-lavender bg-surface-lavender shadow-warm -z-10 transition-colors duration-200 group-hover:border-accent/40"
            style={{
              transform: prefersReduced ? undefined : 'translateZ(-14px)',
            }}
          >
            {/* Layer 1.5: Coordinate Tag (Z = 16px) */}
            <div
              className="absolute -top-2.5 left-6 px-2 py-0.5 rounded-sm bg-surface border border-border text-[9px] font-mono text-muted-subtle uppercase tracking-wider shadow-subtle"
              style={{
                transform: prefersReduced ? undefined : 'translateZ(16px)',
              }}
            >
              {customCoordinateText || 'AVATAR // 18.52° N, 73.85° E'}
            </div>
          </div>
        )}

        {/* Layer 2: Main Character Illustration with gentle float & elevation shadow (Z = 20px) */}
        <motion.div
          role="button"
          tabIndex={0}
          onClick={handleClick}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleClick()}
          aria-label="Interactive illustrated avatar of Om Joshi. Click or press Enter to interact."
          animate={
            isWaving
              ? { rotate: [0, -6, 6, -4, 4, 0] }
              : prefersReduced
              ? {}
              : { y: [0, -5, 0] }
          }
          transition={
            isWaving
              ? { duration: 0.6 }
              : { duration: 4.8, repeat: Infinity, ease: 'easeInOut' }
          }
          className={cn(
            'relative flex items-center justify-center p-4 cursor-pointer rounded-lg focus-visible:outline-2 focus-visible:outline-accent',
            sizeMap[size]
          )}
          style={{
            transform: prefersReduced ? undefined : 'translateZ(20px)',
            transformStyle: 'preserve-3d',
            filter: 'drop-shadow(0 14px 22px rgba(0, 0, 0, 0.45))',
          }}
        >
          <Character lookAngle={lookAngle} />
        </motion.div>

        {/* Layer 3: Minimal Status Beacon (Z = 24px) */}
        {showStatusBadge && (
          <div
            aria-hidden="true"
            className="mt-2 flex items-center gap-2 px-2.5 py-1 rounded-sm bg-surface border border-border text-[10px] font-mono text-muted-foreground shadow-subtle transition-colors group-hover:border-accent/30"
            style={{
              transform: prefersReduced ? undefined : 'translateZ(24px)',
            }}
          >
            <span
              className={cn(
                'w-1.5 h-1.5 rounded-full transition-colors',
                lookAngle.isTracking ? 'bg-signal' : 'bg-muted-subtle'
              )}
            />
            <span className="tracking-wider uppercase">
              {customBadgeText || (lookAngle.isTracking ? 'Tracking Cursor' : 'Idle System')}
            </span>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};
