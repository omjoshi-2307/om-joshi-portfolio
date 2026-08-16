import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { MapPin, GraduationCap, Compass } from 'lucide-react';
import { cn } from '@/utils/cn';
import type { AboutSectionData } from '@/types/about';

export interface AboutMetaProps {
  metadata: AboutSectionData['metadata'];
  className?: string;
}

export const AboutMeta: React.FC<AboutMetaProps> = ({ metadata, className }) => {
  const prefersReduced = useReducedMotion();

  const metaItems = [
    { key: 'location', data: metadata.location, icon: MapPin },
    { key: 'education', data: metadata.education, icon: GraduationCap },
    { key: 'orientation', data: metadata.orientation, icon: Compass },
  ];

  return (
    <div className={cn('grid grid-cols-1 sm:grid-cols-3 gap-4', className)}>
      {metaItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.key}
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
            whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.5,
              delay: 0.2 + index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="p-4 sm:p-5 rounded-xl border border-border/80 bg-card/60 dark:bg-card/40 backdrop-blur-xs flex flex-col gap-2 transition-all duration-200 hover:border-accent/40"
          >
            {/* Header: Icon + Label */}
            <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
              <Icon className="w-3.5 h-3.5 text-accent" />
              <span>{item.data.label}</span>
            </div>

            {/* Value */}
            <div className="text-sm sm:text-base font-semibold text-foreground tracking-tight">
              {item.data.value}
            </div>

            {/* Detail Subtitle */}
            {item.data.detail && (
              <div className="text-xs text-muted-foreground font-mono">
                {item.data.detail}
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};
