import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Character } from '@/components/character/Character';
import { useCharacterLookAt } from '@/components/character/useCharacterLookAt';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { MessageSquare, Sparkles } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface ContactCharacterProps {
  isTargetHovered?: boolean;
  className?: string;
}

export const ContactCharacter: React.FC<ContactCharacterProps> = ({
  isTargetHovered = false,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const [isWaving, setIsWaving] = useState(false);
  const [interactionCount, setInteractionCount] = useState(0);

  // If CTA is hovered, override lookAngle to gaze directly left/down toward the email card;
  // otherwise track pointer with gentle kinematics
  const targetOverride = isTargetHovered
    ? { x: -0.7, y: 0.3 }
    : null;

  const lookAngle = useCharacterLookAt(containerRef, {
    enabled: true,
    targetOverride,
    maxHeadYaw: 14,
    maxHeadPitch: 10,
    maxEyeOffset: 3,
  });

  const handleClick = () => {
    setInteractionCount((prev) => prev + 1);
    if (!prefersReduced) {
      setIsWaving(true);
      setTimeout(() => setIsWaving(false), 800);
    }
  };

  return (
    <motion.div
      ref={containerRef}
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 16 }}
      whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'relative flex flex-col items-center justify-between p-6 sm:p-7 rounded-3xl border border-border/80 bg-card/70 dark:bg-card/40 backdrop-blur-xs shadow-xs select-none group',
        className
      )}
    >
      {/* Corner Crosshairs */}
      <div aria-hidden="true" className="absolute top-2.5 left-2.5 w-2.5 h-2.5 border-t border-l border-accent/40" />
      <div aria-hidden="true" className="absolute top-2.5 right-2.5 w-2.5 h-2.5 border-t border-r border-accent/40" />
      <div aria-hidden="true" className="absolute bottom-2.5 left-2.5 w-2.5 h-2.5 border-b border-l border-accent/40" />
      <div aria-hidden="true" className="absolute bottom-2.5 right-2.5 w-2.5 h-2.5 border-b border-r border-accent/40" />

      {/* Top Header Tag */}
      <div className="w-full flex items-center justify-between text-[9px] font-mono text-muted-foreground uppercase tracking-widest pb-3 border-b border-border/60">
        <span className="flex items-center gap-1.5 text-accent font-semibold">
          <Sparkles className="w-2.5 h-2.5" />
          <span>CONCLUSION</span>
        </span>
        <span>FINAL CHAPTER</span>
      </div>

      {/* Main Avatar Frame */}
      <motion.div
        onClick={handleClick}
        animate={isWaving ? { rotate: [0, -6, 6, -4, 4, 0], scale: [1, 1.05, 1] } : {}}
        transition={{ duration: 0.6 }}
        className="relative my-3 w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center cursor-pointer transition-transform duration-300 group-hover:scale-102"
        role="button"
        tabIndex={0}
        aria-label="Interactive Avatar of Om Joshi - Click for concluding greeting"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick();
          }
        }}
      >
        <Character lookAngle={lookAngle} />

        {/* Floating concluding toast/badge on click */}
        {interactionCount > 0 && isWaving && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: -16, scale: 1 }}
            exit={{ opacity: 0 }}
            className="absolute -top-3 right-0 px-2.5 py-1 rounded-full bg-accent text-accent-foreground text-[10px] font-mono shadow-sm flex items-center gap-1"
          >
            <MessageSquare className="w-2.5 h-2.5" />
            <span>Let's build something!</span>
          </motion.div>
        )}
      </motion.div>

      {/* Bottom Status Pill */}
      <div className="w-full pt-3 border-t border-border/60 flex flex-col items-center gap-1 text-center">
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-foreground font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
          <span>Ready to Collaborate</span>
        </div>
        <p className="text-[11px] text-muted-foreground font-sans">
          Click avatar to interact
        </p>
      </div>
    </motion.div>
  );
};
