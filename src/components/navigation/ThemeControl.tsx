import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

export interface ThemeControlProps {
  className?: string;
  variant?: 'minimal' | 'bordered';
}

export const ThemeControl: React.FC<ThemeControlProps> = ({
  className,
  variant = 'bordered',
}) => {
  const { resolvedTheme, toggleTheme } = useTheme();
  const prefersReduced = useReducedMotion();

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      className={cn(
        'relative inline-flex items-center justify-center w-9 h-9 rounded-md transition-all duration-200 cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-accent',
        variant === 'bordered' && 'border border-border/80 bg-surface/50 hover:bg-surface hover:border-border text-foreground',
        variant === 'minimal' && 'bg-transparent hover:bg-surface text-muted-foreground hover:text-foreground',
        className
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="dark-icon"
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, rotate: -30, scale: 0.8 }}
            animate={prefersReduced ? { opacity: 1 } : { opacity: 1, rotate: 0, scale: 1 }}
            exit={prefersReduced ? { opacity: 0 } : { opacity: 0, rotate: 30, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            <Moon className="w-4 h-4 text-foreground/90" />
          </motion.div>
        ) : (
          <motion.div
            key="light-icon"
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, rotate: 30, scale: 0.8 }}
            animate={prefersReduced ? { opacity: 1 } : { rotate: 0, opacity: 1, scale: 1 }}
            exit={prefersReduced ? { opacity: 0 } : { opacity: 0, rotate: -30, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            <Sun className="w-4 h-4 text-foreground/90" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};
