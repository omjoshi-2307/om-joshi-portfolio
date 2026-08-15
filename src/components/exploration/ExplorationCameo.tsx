import React from 'react';
import { motion } from 'framer-motion';
import { Character } from '@/components/character/Character';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Compass, Sparkles } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface ExplorationCameoProps {
  className?: string;
}

export const ExplorationCameo: React.FC<ExplorationCameoProps> = ({ className }) => {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'p-8 sm:p-10 rounded-3xl border border-border bg-surface/50 dark:bg-surface/20 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xs',
        className
      )}
    >
      {/* Left: Narrative Message */}
      <div className="flex flex-col gap-3 max-w-xl text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono text-accent">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="font-semibold uppercase tracking-wider">TRAJECTORY IN PROGRESS</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground tracking-tight">
          "Still learning. Still building."
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed">
          The next project isn't finished yet. Every layer of computer science, from low-level silicon to high-level agentic interfaces, is an open canvas for experimentation.
        </p>

        <div className="pt-2 flex items-center justify-center md:justify-start gap-2 text-[11px] font-mono text-muted-foreground">
          <Compass className="w-3.5 h-3.5 text-accent" />
          <span>STATUS: ACTIVE SYSTEM EXPLORATION</span>
        </div>
      </div>

      {/* Right: Character Looking Forward */}
      <div className="relative flex flex-col items-center justify-center">
        <div className="w-24 h-24 sm:w-28 sm:h-28 p-2 rounded-2xl bg-card border border-border/80 shadow-sm flex items-center justify-center">
          <Character
            lookAngle={{
              headYaw: 14,
              headPitch: -4,
              eyeOffsetX: 2.5,
              eyeOffsetY: -1,
              distance: 120,
              isTracking: true,
            }}
          />
        </div>
        <span className="mt-2 text-[10px] font-mono text-muted-foreground">
          Om Joshi // Pune, MH
        </span>
      </div>
    </motion.div>
  );
};
