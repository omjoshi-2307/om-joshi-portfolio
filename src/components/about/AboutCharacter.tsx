import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Character } from '@/components/character/Character';
import { useCharacterLookAt } from '@/components/character/useCharacterLookAt';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Sparkles, MessageCircle } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface AboutCharacterProps {
  className?: string;
}

export const AboutCharacter: React.FC<AboutCharacterProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const [isWaving, setIsWaving] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  // Character looks thoughtfully slightly to the left/up toward the main editorial statement,
  // or dynamically tracks pointer if user moves cursor near the container
  const lookAngle = useCharacterLookAt(containerRef, {
    enabled: true,
    maxHeadYaw: 14,
    maxHeadPitch: 10,
    maxEyeOffset: 3,
  });

  const handleClick = () => {
    setClickCount((prev) => prev + 1);
    if (!prefersReduced) {
      setIsWaving(true);
      setTimeout(() => setIsWaving(false), 800);
    }
  };

  return (
    <motion.div
      ref={containerRef}
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 16 }}
      whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'relative flex flex-col items-center justify-between p-6 sm:p-8 rounded-3xl border border-border/80 bg-card/70 dark:bg-card/40 backdrop-blur-xs shadow-xs select-none group',
        className
      )}
    >
      {/* Corner Crosshairs */}
      <div aria-hidden="true" className="absolute top-2.5 left-2.5 w-2.5 h-2.5 border-t border-l border-accent/40" />
      <div aria-hidden="true" className="absolute top-2.5 right-2.5 w-2.5 h-2.5 border-t border-r border-accent/40" />
      <div aria-hidden="true" className="absolute bottom-2.5 left-2.5 w-2.5 h-2.5 border-b border-l border-accent/40" />
      <div aria-hidden="true" className="absolute bottom-2.5 right-2.5 w-2.5 h-2.5 border-b border-r border-accent/40" />

      {/* Top Identity & Location Tag */}
      <div className="w-full flex items-center justify-between text-[9px] font-mono text-muted-foreground uppercase tracking-widest pb-3 border-b border-border/60">
        <span className="flex items-center gap-1.5 text-accent font-semibold">
          <Sparkles className="w-2.5 h-2.5" />
          <span>OM JOSHI</span>
        </span>
        <span>PUNE // 18.52° N</span>
      </div>

      {/* Main Character Illustration with Click Micro-Animation */}
      <motion.div
        onClick={handleClick}
        animate={isWaving ? { rotate: [0, -6, 6, -4, 4, 0], scale: [1, 1.05, 1] } : {}}
        transition={{ duration: 0.6 }}
        className="relative my-4 w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center cursor-pointer transition-transform duration-300 group-hover:scale-102"
        role="button"
        tabIndex={0}
        aria-label="Interactive Avatar of Om Joshi - Click for friendly greeting"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick();
          }
        }}
      >
        <Character lookAngle={lookAngle} />

        {/* Floating thought/greeting badge on click */}
        {clickCount > 0 && isWaving && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: -20, scale: 1 }}
            exit={{ opacity: 0 }}
            className="absolute -top-4 right-0 px-2.5 py-1 rounded-full bg-accent text-accent-foreground text-[10px] font-mono shadow-sm flex items-center gap-1"
          >
            <MessageCircle className="w-2.5 h-2.5" />
            <span>Hey there!</span>
          </motion.div>
        )}
      </motion.div>

      {/* Bottom Status & Reflective Note */}
      <div className="w-full pt-3 border-t border-border/60 flex flex-col items-center gap-1 text-center">
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-foreground font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Reflective State // Builder Mode</span>
        </div>
        <p className="text-[11px] text-muted-foreground font-sans">
          Click avatar to interact
        </p>
      </div>
    </motion.div>
  );
};
