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
    "I figure out how systems work",
    "by building them — and I'm still",
    "exploring what I can build next.",
  ];

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <div className="flex flex-col">
        {statementLines.map((line, idx) => (
          <div key={idx} className="overflow-hidden py-1">
            <motion.h2
              initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: '95%' }}
              whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: '0%' }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.8,
                delay: prefersReduced ? 0 : idx * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="statement-monumental font-bold text-foreground tracking-tight"
            >
              {line}
            </motion.h2>
          </div>
        ))}
      </div>
    </div>
  );
};
