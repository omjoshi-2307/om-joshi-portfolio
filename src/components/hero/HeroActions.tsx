import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
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
      transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn('flex flex-wrap items-center gap-4 pt-2', className)}
    >
      {/* Primary Action */}
      <a
        href="#projects"
        onClick={(e) => handleScrollTo(e, 'projects')}
        onMouseEnter={() => onHoverPrimary?.(true)}
        onMouseLeave={() => onHoverPrimary?.(false)}
        onFocus={() => onHoverPrimary?.(true)}
        onBlur={() => onHoverPrimary?.(false)}
        className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-accent text-accent-foreground text-sm font-medium transition-all duration-200 shadow-sm hover:brightness-110 active:scale-[0.98] cursor-pointer focus-visible:outline-2 focus-visible:outline-accent"
      >
        <span>View selected work</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
      </a>

      {/* Secondary Action */}
      <a
        href="#journey"
        onClick={(e) => handleScrollTo(e, 'journey')}
        onMouseEnter={() => onHoverSecondary?.(true)}
        onMouseLeave={() => onHoverSecondary?.(false)}
        onFocus={() => onHoverSecondary?.(true)}
        onBlur={() => onHoverSecondary?.(false)}
        className="group inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-lg border border-border bg-card/80 hover:bg-surface text-foreground text-sm font-medium transition-all duration-200 active:scale-[0.98] cursor-pointer focus-visible:outline-2 focus-visible:outline-accent"
      >
        <Compass className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
        <span>Explore my journey</span>
      </a>
    </motion.div>
  );
};
