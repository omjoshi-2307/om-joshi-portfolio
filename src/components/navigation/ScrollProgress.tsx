import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

export interface ScrollProgressProps {
  className?: string;
}

/**
 * Global subtle scroll progress indicator.
 * Renders a 1.5px brand pink line at the very top edge of the viewport.
 * Uses requestAnimationFrame hardware-accelerated transforms.
 */
export const ScrollProgress: React.FC<ScrollProgressProps> = ({ className }) => {
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll();

  // Smooth out progress tracking with a light spring
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.001,
  });

  if (prefersReduced) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className={cn(
        'fixed top-0 left-0 right-0 z-50 h-[2px] pointer-events-none bg-transparent',
        className
      )}
    >
      <motion.div
        style={{ scaleX, transformOrigin: '0%' }}
        className="w-full h-full bg-accent"
      />
    </div>
  );
};
