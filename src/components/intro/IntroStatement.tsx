import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

export interface IntroStatementProps {
  className?: string;
}

export const IntroStatement: React.FC<IntroStatementProps> = ({ className }) => {
  const prefersReduced = useReducedMotion();

  const statementLines = [
    "I'm an Information Technology student",
    "who figures out how systems work by building them —",
    "and I'm still exploring what I can build next.",
  ];

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <div className="flex flex-col">
        {statementLines.map((line, idx) => (
          <div key={idx} className="overflow-hidden py-1">
            <motion.p
              initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: '90%' }}
              whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: '0%' }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.75,
                delay: prefersReduced ? 0 : idx * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-foreground leading-[1.2] tracking-tight"
            >
              {line}
            </motion.p>
          </div>
        ))}
      </div>
    </div>
  );
};
