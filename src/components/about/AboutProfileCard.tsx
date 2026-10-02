import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Cpu, Compass } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

export interface AboutProfileCardProps {
  className?: string;
}

export const AboutProfileCard: React.FC<AboutProfileCardProps> = ({ className }) => {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 16 }}
      whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'relative flex flex-col justify-between p-6 sm:p-8 rounded-lg border border-border bg-card shadow-card select-none font-mono text-xs',
        className
      )}
    >
      {/* 1. Header Coordinates Tag */}
      <div className="flex items-center justify-between pb-4 border-b border-border text-[11px] text-muted-subtle uppercase">
        <span className="flex items-center gap-2 text-foreground font-semibold">
          <Terminal className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
          <span>BUILDER IDENTITY // DOSSIER</span>
        </span>
        <span className="text-muted-foreground font-mono">PUNE // 18.52° N</span>
      </div>

      {/* 2. Structured Profile Attributes */}
      <div className="py-6 flex flex-col gap-4 text-xs">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] text-muted-subtle uppercase tracking-wider">ACADEMIC FOUNDATION</span>
          <span className="text-sm font-semibold text-foreground font-display">
            B.Tech in Information Technology
          </span>
          <span className="text-[11px] text-muted-foreground">
            Pune, India · Undergraduate Engineering Student
          </span>
        </div>

        <div className="p-3.5 rounded bg-surface border border-border flex flex-col gap-2 text-[11px]">
          <div className="flex items-start gap-2.5">
            <Compass className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
            <div>
              <span className="text-foreground font-semibold">Core Mindset:</span>{' '}
              <span className="text-muted-foreground">Learn by building real, testable systems rather than passive observation.</span>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <Cpu className="w-3.5 h-3.5 text-accent-secondary shrink-0 mt-0.5" />
            <div>
              <span className="text-foreground font-semibold">Hardware Roots:</span>{' '}
              <span className="text-muted-foreground">Started with physical microcontrollers, sensors, and obstacle-avoiding robotics.</span>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <Shield className="w-3.5 h-3.5 text-signal shrink-0 mt-0.5" />
            <div>
              <span className="text-foreground font-semibold">Active Vectors:</span>{' '}
              <span className="text-muted-foreground">Software development, Web3 escrow workflows, cybersecurity, and local AI tooling.</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Footer Status Stamp */}
      <div className="pt-4 border-t border-border flex items-center justify-between text-[11px]">
        <div className="flex items-center gap-2 text-foreground">
          <span className="w-1.5 h-1.5 rounded-full bg-signal inline-block" />
          <span className="font-semibold uppercase tracking-wider text-[10px]">VERIFIED STUDENT BUILDER</span>
        </div>
        <span className="text-muted-subtle text-[10px]">IST (UTC+5:30)</span>
      </div>
    </motion.div>
  );
};
