import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

export interface IntroTransitionHookProps {
  className?: string;
  targetId?: string;
}

export const IntroTransitionHook: React.FC<IntroTransitionHookProps> = ({
  className,
  targetId = 'journey',
}) => {
  const prefersReduced = useReducedMotion();

  const handleScrollToJourney = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: prefersReduced ? 'auto' : 'smooth',
      });
    }
  };

  return (
    <motion.div
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
      whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn('pt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-dashed border-border/70', className)}
    >
      <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
        <span className="text-accent font-semibold">02 // NEXT CHAPTER</span>
        <span>•</span>
        <span>From early hardware & robotics to modern software engineering</span>
      </div>

      <a
        href={`#${targetId}`}
        onClick={handleScrollToJourney}
        className="group inline-flex items-center gap-2 text-xs font-mono text-foreground hover:text-accent font-medium transition-colors cursor-pointer select-none"
      >
        <span>Explore the evolution</span>
        <ArrowDownRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
      </a>
    </motion.div>
  );
};
