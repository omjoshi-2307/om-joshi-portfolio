import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

export interface IntroMetaProps {
  className?: string;
}

const META_ITEMS = [
  {
    label: 'CURRENT ROLE',
    value: 'B.Tech IT Student & Builder',
    detail: 'Pune, Maharashtra, India',
  },
  {
    label: 'ACTIVE EXPLORATIONS',
    value: 'Full-Stack • Web3 • AI • Security',
    detail: 'Practical implementation & experiments',
  },
  {
    label: 'CORE ORIENTATION',
    value: 'Building to Understand',
    detail: 'From Arduino & Robotics to Software Systems',
  },
];

export const IntroMeta: React.FC<IntroMetaProps> = ({ className }) => {
  const prefersReduced = useReducedMotion();

  return (
    <div className={cn('grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 border-t border-border', className)}>
      {META_ITEMS.map((item, index) => (
        <motion.div
          key={item.label}
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
          whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{
            duration: 0.6,
            delay: prefersReduced ? 0 : 0.4 + index * 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-col gap-1.5"
        >
          <span className="technical-eyebrow text-muted-subtle flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-accent inline-block" />
            {item.label}
          </span>
          <span className="text-base font-bold text-foreground font-display tracking-tight">
            {item.value}
          </span>
          <span className="text-xs text-muted-foreground font-sans">
            {item.detail}
          </span>
        </motion.div>
      ))}
    </div>
  );
};
