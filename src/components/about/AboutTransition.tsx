import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { ArrowDownRight, Sparkles } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface AboutTransitionProps {
  preamble?: string;
  headline?: string;
  actionText?: string;
  targetId?: string;
  className?: string;
}

export const AboutTransition: React.FC<AboutTransitionProps> = ({
  preamble = 'NEXT STEP',
  headline = 'Now you know the person behind the projects.',
  actionText = "Let's connect & build something together",
  targetId = 'contact',
  className,
}) => {
  const prefersReduced = useReducedMotion();

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'pt-10 mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-dashed border-border/80 text-xs font-mono',
        className
      )}
    >
      {/* Left: Summary Note */}
      <div className="flex items-center gap-3">
        <span className="flex items-center justify-center w-6 h-6 rounded-md bg-accent/10 border border-accent/20 text-accent">
          <Sparkles className="w-3 h-3" />
        </span>
        <div className="flex flex-col gap-0.5">
          <span className="text-[10px] text-accent uppercase tracking-wider font-semibold">
            07 // {preamble}
          </span>
          <span className="text-sm font-sans text-muted-foreground">
            {headline}
          </span>
        </div>
      </div>

      {/* Right: Forward Action Link */}
      <a
        href={`#${targetId}`}
        onClick={handleScrollToContact}
        className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-card border border-border hover:border-accent/40 text-foreground hover:text-accent font-semibold transition-all duration-200 shadow-xs cursor-pointer select-none self-start sm:self-auto"
      >
        <span>{actionText}</span>
        <ArrowDownRight className="w-4 h-4 text-accent transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
      </a>
    </motion.div>
  );
};
