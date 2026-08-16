import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { usePointer } from '@/hooks/usePointer';
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
  const { setPointerState, resetPointerState } = usePointer();

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      onMouseEnter={() => setPointerState('link')}
      onMouseLeave={resetPointerState}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      className={cn(
        'relative inline-flex items-center justify-center min-w-[44px] min-h-[44px] w-11 h-11 sm:w-10 sm:h-10 rounded-sm transition-colors duration-150 cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-accent',
        variant === 'bordered' && 'border border-border bg-elevated hover:bg-card text-foreground shadow-subtle',
        variant === 'minimal' && 'bg-transparent hover:bg-elevated text-muted-foreground hover:text-foreground',
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
            transition={{ duration: 0.15 }}
            className="flex items-center justify-center"
          >
            <Moon className="w-4 h-4 text-foreground/90" />
          </motion.div>
        ) : (
          <motion.div
            key="light-icon"
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, rotate: 30, scale: 0.8 }}
            animate={prefersReduced ? { rotate: 0, opacity: 1, scale: 1 } : { rotate: 0, opacity: 1, scale: 1 }}
            exit={prefersReduced ? { opacity: 0 } : { opacity: 0, rotate: -30, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            className="flex items-center justify-center"
          >
            <Sun className="w-4 h-4 text-foreground/90" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};
