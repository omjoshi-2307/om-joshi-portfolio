import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Trophy, Tv, Headphones, Heart } from 'lucide-react';
import { cn } from '@/utils/cn';
import type { PersonalInterest } from '@/types/about';

export interface PersonalInterestsProps {
  interests: PersonalInterest[];
  heading?: string;
  eyebrow?: string;
  className?: string;
}

const iconMap = {
  football: Trophy,
  anime: Tv,
  music: Headphones,
};

export const PersonalInterests: React.FC<PersonalInterestsProps> = ({
  interests,
  heading = "When I'm Not Building",
  eyebrow = 'PERSONAL PURSUITS',
  className,
}) => {
  const prefersReduced = useReducedMotion();

  return (
    <div className={cn('flex flex-col gap-6', className)}>
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border pb-3">
        <div className="flex items-center gap-2">
          <Heart className="w-3.5 h-3.5 text-accent" />
          <h3 className="text-sm font-mono uppercase tracking-widest text-foreground font-semibold">
            {heading}
          </h3>
        </div>
        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
          {eyebrow}
        </span>
      </div>

      {/* Interests Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {interests.map((interest, index) => {
          const Icon = iconMap[interest.iconName] || Heart;

          return (
            <motion.div
              key={interest.id}
              initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
              whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.5,
                delay: 0.15 + index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={prefersReduced ? {} : { y: -2 }}
              className="p-5 sm:p-6 rounded-xl border border-border bg-card shadow-subtle flex flex-col gap-3 group transition-colors duration-150 hover:border-border-strong"
            >
              {/* Icon & Category Pill */}
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-sm bg-elevated border border-border flex items-center justify-center text-accent group-hover:border-accent transition-colors duration-150">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono text-muted-foreground uppercase px-2 py-0.5 rounded-sm bg-elevated border border-border">
                  {interest.category}
                </span>
              </div>

              {/* Title & Tagline */}
              <div className="flex flex-col gap-0.5">
                <span className="text-base font-display font-semibold text-foreground group-hover:text-accent transition-colors duration-150">
                  {interest.name}
                </span>
                <span className="text-xs font-mono text-accent">
                  {interest.tagline}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans">
                {interest.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
