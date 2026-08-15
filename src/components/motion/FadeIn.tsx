import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { EASINGS } from '@/utils/motion';
import { cn } from '@/utils/cn';

export interface FadeInProps extends HTMLMotionProps<'div'> {
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
  delay?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const FadeIn: React.FC<FadeInProps> = ({
  direction = 'up',
  distance = 24,
  duration = 0.6,
  delay = 0,
  threshold = 0.1,
  once = true,
  className,
  children,
  ...props
}) => {
  const prefersReduced = useReducedMotion();

  const getOffset = () => {
    if (prefersReduced || direction === 'none') return { x: 0, y: 0 };
    switch (direction) {
      case 'up': return { x: 0, y: distance };
      case 'down': return { x: 0, y: -distance };
      case 'left': return { x: distance, y: 0 };
      case 'right': return { x: -distance, y: 0 };
      default: return { x: 0, y: 0 };
    }
  };

  const initialOffset = getOffset();

  return (
    <motion.div
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, ...initialOffset }}
      whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: threshold }}
      transition={{
        duration: prefersReduced ? 0.1 : duration,
        delay,
        ease: EASINGS.editorial,
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};
