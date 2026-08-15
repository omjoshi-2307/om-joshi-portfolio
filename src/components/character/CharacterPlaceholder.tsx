import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useCharacterLookAt } from './useCharacterLookAt';
import type { InteractiveCharacterProps } from './types';
import { cn } from '@/utils/cn';

const sizeMap = {
  sm: 'w-24 h-24',
  md: 'w-40 h-40',
  lg: 'w-56 h-56',
  hero: 'w-64 h-64 sm:w-80 sm:h-80',
};

export const CharacterPlaceholder: React.FC<InteractiveCharacterProps> = ({
  className,
  size = 'md',
  showDebugCoordinates = false,
  interactive = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const look = useCharacterLookAt(containerRef, { enabled: interactive });

  return (
    <div className={cn('flex flex-col items-center select-none', className)}>
      {/* Character Target Boundary */}
      <div
        ref={containerRef}
        className={cn(
          'relative flex items-center justify-center rounded-2xl border border-border/80 bg-card p-4 transition-colors',
          sizeMap[size]
        )}
      >
        {/* Subtle geometric crosshairs & container grid */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden opacity-30">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-b border-dashed border-border" />
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 border-r border-dashed border-border" />
        </div>

        {/* Structural Interactive Head / Mesh Placeholder */}
        <motion.div
          animate={{
            rotateY: look.headYaw,
            rotateX: look.headPitch,
          }}
          transition={{
            type: 'spring',
            stiffness: 220,
            damping: 24,
            mass: 0.8,
          }}
          style={{ transformStyle: 'preserve-3d' }}
          className="relative flex flex-col items-center justify-center w-3/4 h-3/4 rounded-xl border border-accent/30 bg-surface/80 p-3 backdrop-blur-xs shadow-sm"
        >
          {/* Eyes schematic placeholder */}
          <div className="flex items-center justify-between w-12 gap-3 mb-2">
            <div className="relative w-3.5 h-3.5 rounded-full border border-border bg-card flex items-center justify-center overflow-hidden">
              <motion.div
                animate={{
                  x: look.eyeOffsetX,
                  y: look.eyeOffsetY,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="w-1.5 h-1.5 rounded-full bg-accent"
              />
            </div>
            <div className="relative w-3.5 h-3.5 rounded-full border border-border bg-card flex items-center justify-center overflow-hidden">
              <motion.div
                animate={{
                  x: look.eyeOffsetX,
                  y: look.eyeOffsetY,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="w-1.5 h-1.5 rounded-full bg-accent"
              />
            </div>
          </div>

          {/* Node Spec Tag */}
          <span className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest">
            Avatar Model
          </span>
        </motion.div>

        {/* Status Indicator */}
        <div className="absolute bottom-2 right-2 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-surface border border-border text-[9px] font-mono text-muted-foreground">
          <span
            className={cn(
              'w-1.5 h-1.5 rounded-full transition-colors',
              look.isTracking ? 'bg-emerald-500 animate-pulse' : 'bg-muted-foreground'
            )}
          />
          <span>{look.isTracking ? 'TRACKING' : 'IDLE'}</span>
        </div>
      </div>

      {/* Debug Coordinates (when requested) */}
      {showDebugCoordinates && (
        <div className="mt-3 font-mono text-[10px] text-muted-foreground flex gap-4 bg-surface px-3 py-1.5 rounded border border-border">
          <span>Yaw: {look.headYaw}°</span>
          <span>Pitch: {look.headPitch}°</span>
          <span>Dist: {look.distance}px</span>
        </div>
      )}
    </div>
  );
};
