import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

export interface HoverCardProps extends HTMLMotionProps<'div'> {
  lift?: number;
  className?: string;
  children: React.ReactNode;
}

export const HoverCard: React.FC<HoverCardProps> = ({
  lift = -4,
  className,
  children,
  ...props
}) => {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      whileHover={prefersReduced ? {} : { y: lift }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={cn('transition-shadow duration-300', className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};
