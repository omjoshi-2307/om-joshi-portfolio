import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useIsScrolled } from '@/hooks/useScrollPosition';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { usePointer } from '@/hooks/usePointer';
import { cn } from '@/utils/cn';

export interface BackToTopButtonProps {
  threshold?: number;
  className?: string;
}

export const BackToTopButton: React.FC<BackToTopButtonProps> = ({
  threshold = 400,
  className,
}) => {
  const isVisible = useIsScrolled(threshold);
  const prefersReduced = useReducedMotion();
  const { setPointerState, resetPointerState } = usePointer();

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReduced ? 'auto' : 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={handleScrollTop}
          onMouseEnter={() => setPointerState('link')}
          onMouseLeave={resetPointerState}
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.95 }}
          animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
          exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.95 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Back to top of page"
          className={cn(
            'fixed bottom-6 right-6 z-30 group inline-flex items-center gap-2 px-3 py-2 rounded-md border border-border bg-elevated/95 backdrop-blur-xs text-foreground text-xs font-mono font-medium shadow-card hover:border-accent hover:text-accent transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-accent active:scale-[0.98]',
            className
          )}
        >
          <ArrowUp className="w-3.5 h-3.5 text-accent transition-transform duration-150 group-hover:-translate-y-0.5" aria-hidden="true" />
          <span className="hidden sm:inline text-[11px] uppercase tracking-wider">Top</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
