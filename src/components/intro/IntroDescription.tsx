import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

export interface IntroDescriptionProps {
  className?: string;
}

export const IntroDescription: React.FC<IntroDescriptionProps> = ({ className }) => {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
      whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={cn('flex flex-col gap-5 text-base sm:text-lg text-muted-foreground leading-relaxed', className)}
    >
      <p>
        My journey with technology started with curiosity about basic programming and hardware experimentation. Over time, that curiosity evolved into competing in hackathons, engineering physical robots and software tools, and contributing to decentralized systems like <span className="text-foreground font-medium underline decoration-accent/40 underline-offset-4">SureD</span>.
      </p>

      <p>
        Currently based in Pune, I focus on the intersection of modern full-stack development, Web3 protocols, AI integration, and cybersecurity. I approach software not just as code to ship, but as systems to deeply understand, refine, and build with purpose.
      </p>
    </motion.div>
  );
};
