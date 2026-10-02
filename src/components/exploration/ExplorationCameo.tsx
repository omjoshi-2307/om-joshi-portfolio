import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
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
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'p-6 sm:p-8 rounded-lg border border-border bg-card shadow-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6 font-mono text-xs',
        className
      )}
    >
      {/* Left: Narrative Message */}
      <div className="flex flex-col gap-2 max-w-xl text-left">
        <div className="flex items-center gap-2 text-accent font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-accent" />
          <span className="uppercase tracking-wider text-[10px]">TRAJECTORY IN MOTION</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground tracking-tight">
          &quot;Still learning. Still building.&quot;
        </h3>

        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans">
          The next project is always in incubation. Every layer of computing—from low-level firmware and memory management to distributed blockchain escrow—is an open canvas for firsthand experimentation.
        </p>
      </div>

      {/* Right: Technical Coordinates Stamp */}
      <div className="flex flex-col items-start md:items-end gap-1.5 shrink-0 border-t md:border-t-0 md:border-l border-border pt-4 md:pt-0 md:pl-6 text-[11px] text-muted-foreground">
        <div className="flex items-center gap-2 text-foreground font-semibold">
          <Terminal className="w-3.5 h-3.5 text-accent" />
          <span>Om Joshi // Pune, MH</span>
        </div>
        <div className="flex items-center gap-1.5 text-signal text-[10px]">
          <span className="w-1.5 h-1.5 rounded-full bg-signal inline-block" />
          <span>ACTIVE R&D CYCLE</span>
        </div>
        <div className="text-[10px] text-muted-subtle">
          IST (UTC+5:30)
        </div>
      </div>
    </motion.div>
  );
};
