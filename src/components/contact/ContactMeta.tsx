import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Sparkles } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

export interface ContactMetaProps {
  location?: string;
  education?: string;
  availability?: string;
  className?: string;
}

export const ContactMeta: React.FC<ContactMetaProps> = ({
  location = 'Pune, Maharashtra, India',
  education = 'B.Tech — Information Technology',
  availability = 'Open to engineering conversations & collaborative builds',
  className,
}) => {
  const prefersReduced = useReducedMotion();

  const items = [
    { label: 'BASE LOCATION', value: location, icon: MapPin },
    { label: 'DISCIPLINE', value: education, icon: GraduationCap },
    { label: 'STATUS', value: availability, icon: Sparkles },
  ];

  return (
    <div className={cn('grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4', className)}>
      {items.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.label}
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.5,
              delay: 0.2 + index * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="p-4 rounded-xl border border-border/70 bg-card/50 dark:bg-card/30 backdrop-blur-xs flex flex-col gap-1 text-xs"
          >
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
              <Icon className="w-3 h-3 text-accent" />
              <span>{item.label}</span>
            </div>
            <div className="text-foreground font-medium font-sans truncate">
              {item.value}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
