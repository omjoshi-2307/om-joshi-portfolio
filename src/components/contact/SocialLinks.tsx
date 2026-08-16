import React from 'react';
import { motion } from 'framer-motion';
import { SocialLink } from './SocialLink';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Share2 } from 'lucide-react';
import { cn } from '@/utils/cn';
import type { SocialLinkItem } from '@/types/contact';

export interface SocialLinksProps {
  socials: SocialLinkItem[];
  heading?: string;
  eyebrow?: string;
  className?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  socials,
  heading = 'Direct Channels',
  eyebrow = 'DIGITAL PRESENCE',
  className,
}) => {
  const prefersReduced = useReducedMotion();

  return (
    <div className={cn('flex flex-col gap-4', className)}>
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border/80 pb-2.5">
        <div className="flex items-center gap-2">
          <Share2 className="w-3.5 h-3.5 text-accent" />
          <h3 className="text-xs font-mono uppercase tracking-widest text-foreground font-semibold">
            {heading}
          </h3>
        </div>
        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
          {eyebrow}
        </span>
      </div>

      {/* Grid of Social Channels */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {socials.map((item, index) => (
          <motion.div
            key={item.id}
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.5,
              delay: 0.15 + index * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <SocialLink item={item} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
