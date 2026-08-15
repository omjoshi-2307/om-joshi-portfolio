import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { EASINGS } from '@/utils/motion';
import { cn } from '@/utils/cn';

export interface TextRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.04,
  as: Component = 'div',
}) => {
  const prefersReduced = useReducedMotion();
  const words = text.split(' ');

  if (prefersReduced) {
    return <Component className={className}>{text}</Component>;
  }

  return (
    <Component className={cn('inline-flex flex-wrap overflow-hidden gap-x-[0.3em]', className)}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block overflow-hidden pb-[0.08em]">
          <motion.span
            className={cn('inline-block', wordClassName)}
            initial={{ y: '110%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: delay + index * stagger,
              ease: EASINGS.editorial,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  );
};
