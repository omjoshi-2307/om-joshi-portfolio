import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

export interface PageTransitionProps {
  children: React.ReactNode;
  routeKey: string;
  className?: string;
}

/**
 * Editorial Page & Project Transition Wrapper.
 * Delivers restrained, fast, and cinematic route transitions without layout shifts or artificial delays.
 */
export const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  routeKey,
  className,
}) => {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={cn('w-full', className)}>{children}</div>;
  }

  return (
    <motion.div
      key={routeKey}
      initial={{ opacity: 0, y: 12, scale: 0.996 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.996 }}
      transition={{
        duration: 0.28,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn('w-full', className)}
    >
      {children}
    </motion.div>
  );
};
