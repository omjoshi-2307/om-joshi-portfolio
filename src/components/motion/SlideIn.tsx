import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { EASINGS } from '@/utils/motion';
import { cn } from '@/utils/cn';

export interface SlideInProps extends HTMLMotionProps<'div'> {
  from?: 'bottom' | 'top' | 'left' | 'right';
  distance?: number;
  duration?: number;
  delay?: number;
  once?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const SlideIn: React.FC<SlideInProps> = ({
  from = 'bottom',
  distance = 32,
  duration = 0.7,
  delay = 0,
  once = true,
  className,
  children,
  ...props
}) => {
  const prefersReduced = useReducedMotion();

  const getInitial = () => {
    if (prefersReduced) return { opacity: 0 };
    switch (from) {
      case 'bottom': return { opacity: 0, y: distance };
      case 'top': return { opacity: 0, y: -distance };
      case 'left': return { opacity: 0, x: -distance };
      case 'right': return { opacity: 0, x: distance };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: '-50px' }}
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
