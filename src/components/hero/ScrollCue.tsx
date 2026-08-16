import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

export interface ScrollCueProps {
  className?: string;
  targetSectionId?: string;
}

export const ScrollCue: React.FC<ScrollCueProps> = ({
  className,
  targetSectionId = 'intro',
}) => {
  const prefersReduced = useReducedMotion();

  const handleScrollDown = () => {
    const targetElement = document.getElementById(targetSectionId);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: prefersReduced ? 'auto' : 'smooth',
      });
    }
  };

  return (
    <motion.button
      type="button"
      onClick={handleScrollDown}
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 10 }}
      animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'group inline-flex items-center gap-3 text-[11px] font-mono text-muted-foreground hover:text-foreground transition-colors cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-accent rounded-sm py-1',
        className
      )}
      aria-label="Scroll to next section"
    >
      <span className="uppercase tracking-widest">[ Scroll to explore ]</span>

      <div className="relative w-4 h-7 rounded-full border border-border/80 flex items-start justify-center p-1">
        <motion.span
          animate={
            prefersReduced
              ? {}
              : {
                  y: [0, 8, 0],
                  opacity: [1, 0.3, 1],
                }
          }
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-1 h-1.5 rounded-full bg-accent"
        />
      </div>
    </motion.button>
  );
};
