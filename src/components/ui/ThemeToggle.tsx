import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Laptop } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';
import type { ThemeMode } from '@/types';

export interface ThemeToggleProps {
  className?: string;
  showLabels?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className, showLabels = false }) => {
  const { theme, resolvedTheme, setTheme, toggleTheme } = useTheme();
  const prefersReduced = useReducedMotion();

  if (!showLabels) {
    return (
      <button
        onClick={toggleTheme}
        aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
        className={cn(
          'relative p-2 rounded-md border border-border bg-surface hover:bg-muted text-foreground transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-accent',
          className
        )}
      >
        <AnimatePresence mode="wait" initial={false}>
          {resolvedTheme === 'dark' ? (
            <motion.div
              key="moon"
              initial={prefersReduced ? { opacity: 0 } : { rotate: -90, opacity: 0, scale: 0.8 }}
              animate={prefersReduced ? { opacity: 1 } : { rotate: 0, opacity: 1, scale: 1 }}
              exit={prefersReduced ? { opacity: 0 } : { rotate: 90, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <Moon className="w-4 h-4 text-foreground" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={prefersReduced ? { opacity: 0 } : { rotate: 90, opacity: 0, scale: 0.8 }}
              animate={prefersReduced ? { opacity: 1 } : { rotate: 0, opacity: 1, scale: 1 }}
              exit={prefersReduced ? { opacity: 0 } : { rotate: -90, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <Sun className="w-4 h-4 text-foreground" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    );
  }

  const modes: { mode: ThemeMode; label: string; icon: React.ReactNode }[] = [
    { mode: 'light', label: 'Light', icon: <Sun className="w-3.5 h-3.5" /> },
    { mode: 'dark', label: 'Dark', icon: <Moon className="w-3.5 h-3.5" /> },
    { mode: 'system', label: 'System', icon: <Laptop className="w-3.5 h-3.5" /> },
  ];

  return (
    <div
      role="radiogroup"
      aria-label="Color theme selection"
      className={cn(
        'inline-flex items-center p-1 rounded-md border border-border bg-surface text-muted-foreground gap-1',
        className
      )}
    >
      {modes.map(({ mode, label, icon }) => {
        const isActive = theme === mode;
        return (
          <button
            key={mode}
            role="radio"
            aria-checked={isActive}
            onClick={() => setTheme(mode)}
            className={cn(
              'relative flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-sm transition-colors cursor-pointer',
              isActive
                ? 'text-foreground bg-card shadow-sm'
                : 'hover:text-foreground hover:bg-muted/60'
            )}
          >
            {icon}
            <span>{label}</span>
          </button>
        );
      })}
    </div>
  );
};
