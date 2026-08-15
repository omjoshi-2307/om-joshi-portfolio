import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { staggerContainerVariants, staggerItemVariants } from '@/utils/motion';
import { cn } from '@/utils/cn';

export interface StaggerContainerProps extends HTMLMotionProps<'div'> {
  staggerDelay?: number;
  initialDelay?: number;
  once?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  staggerDelay = 0.08,
  initialDelay = 0,
  once = true,
  className,
  children,
  ...props
}) => {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={staggerContainerVariants(staggerDelay, initialDelay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.1 }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export interface StaggerItemProps extends HTMLMotionProps<'div'> {
  className?: string;
  children: React.ReactNode;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({
  className,
  children,
  ...props
}) => {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={staggerItemVariants}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};
