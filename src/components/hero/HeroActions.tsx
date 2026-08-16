import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useMagneticEffect } from '@/hooks/useMagneticEffect';
import { usePointer } from '@/hooks/usePointer';
import { cn } from '@/utils/cn';

export interface HeroActionsProps {
  className?: string;
  onHoverPrimary?: (isHovered: boolean) => void;
  onHoverSecondary?: (isHovered: boolean) => void;
}

export const HeroActions: React.FC<HeroActionsProps> = ({
  className,
  onHoverPrimary,
  onHoverSecondary,
}) => {
  const prefersReduced = useReducedMotion();
  const magneticRef = useMagneticEffect<HTMLAnchorElement>({ strength: 0.18, maxDistance: 5 });
  const { setPointerState, resetPointerState } = usePointer();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
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
      animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn('flex flex-wrap items-center gap-3.5 pt-2', className)}
    >
      {/* Primary Action (with subtle magnetic interaction) */}
      <a
        ref={magneticRef}
        href="#projects"
        onClick={(e) => handleScrollTo(e, 'projects')}
        onMouseEnter={() => {
          onHoverPrimary?.(true);
          setPointerState('link');
        }}
        onMouseLeave={() => {
          onHoverPrimary?.(false);
          resetPointerState();
        }}
        onFocus={() => onHoverPrimary?.(true)}
        onBlur={() => onHoverPrimary?.(false)}
        className="group relative inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] rounded-md bg-accent hover:bg-accent-hover text-accent-foreground text-sm font-semibold transition-colors duration-150 shadow-subtle active:scale-[0.98] cursor-pointer focus-visible:outline-2 focus-visible:outline-accent"
      >
        <span>View selected work</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true" />
      </a>

      {/* Secondary Action */}
      <a
        href="#journey"
        onClick={(e) => handleScrollTo(e, 'journey')}
        onMouseEnter={() => {
          onHoverSecondary?.(true);
          setPointerState('link');
        }}
        onMouseLeave={() => {
          onHoverSecondary?.(false);
          resetPointerState();
        }}
        onFocus={() => onHoverSecondary?.(true)}
        onBlur={() => onHoverSecondary?.(false)}
        className="group inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] rounded-md border border-border hover:border-border-strong bg-card hover:bg-elevated text-foreground text-sm font-medium transition-colors duration-150 shadow-subtle active:scale-[0.98] cursor-pointer focus-visible:outline-2 focus-visible:outline-accent"
      >
        <Compass className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" aria-hidden="true" />
        <span>Explore my journey</span>
      </a>
    </motion.div>
  );
};
