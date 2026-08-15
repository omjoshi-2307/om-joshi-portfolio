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
    value: 'Full-Stack • Web3 • AI • Cybersecurity',
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
    <div className={cn('grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border/60', className)}>
      {META_ITEMS.map((item, index) => (
        <motion.div
          key={item.label}
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
          whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{
            duration: 0.6,
            delay: prefersReduced ? 0 : 0.4 + index * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group flex flex-col gap-1.5 p-4 rounded-lg bg-card/50 border border-border hover:border-border/90 transition-colors"
        >
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
            {item.label}
          </span>
          <span className="text-sm font-semibold text-foreground">
            {item.value}
          </span>
          <span className="text-xs text-muted-foreground">
            {item.detail}
          </span>
        </motion.div>
      ))}
    </div>
  );
};
