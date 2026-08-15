import React from 'react';
import { motion } from 'framer-motion';
import { Character } from '@/components/character/Character';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

export interface IntroCameoProps {
  className?: string;
}

export const IntroCameo: React.FC<IntroCameoProps> = ({ className }) => {
  const prefersReduced = useReducedMotion();

  // Subtle static or gentle focus gaze toward the text statement (gazing right/up)
  const gazeAngle = {
    headYaw: -8,
    headPitch: -4,
    eyeOffsetX: -2,
    eyeOffsetY: -1,
    distance: 120,
    isTracking: true,
  };

  return (
    <motion.div
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.92 }}
      whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'relative flex flex-col items-center p-4 rounded-2xl border border-border/80 bg-card/70 backdrop-blur-xs select-none shadow-xs',
        className
      )}
    >
      {/* Corner crosshair accents */}
      <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-accent/40" />
      <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-accent/40" />
      <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-accent/40" />
      <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-accent/40" />

      {/* Compact Avatar Frame */}
      <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
        <Character lookAngle={gazeAngle} />
      </div>

      {/* Cameo Tag */}
      <div className="mt-2 flex items-center gap-1.5 text-[9px] font-mono text-muted-foreground uppercase tracking-widest">
        <span className="w-1 h-1 rounded-full bg-accent" />
        <span>IDENTITY MARK</span>
      </div>
    </motion.div>
  );
};
