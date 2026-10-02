import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { siteIdentity } from '@/config/identity';
import { cn } from '@/utils/cn';

export interface ContactAvailabilityCardProps {
  className?: string;
}

export const ContactAvailabilityCard: React.FC<ContactAvailabilityCardProps> = ({ className }) => {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 16 }}
      whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'relative flex flex-col justify-between p-6 sm:p-8 rounded-lg border border-border bg-card shadow-card select-none font-mono text-xs',
        className
      )}
    >
      {/* 1. Header Coordinates Tag */}
      <div className="flex items-center justify-between pb-4 border-b border-border text-[11px] text-muted-subtle uppercase">
        <span className="flex items-center gap-2 text-foreground font-semibold">
          <Mail className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
          <span>STATUS & COORDINATES</span>
        </span>
        <span className="text-muted-foreground font-mono">PUNE // IST</span>
      </div>

      {/* 2. Structured Availability Readout */}
      <div className="py-6 flex flex-col gap-4 text-xs">
        <div className="flex items-center gap-2 text-foreground">
          <span className="w-2 h-2 rounded-full bg-signal animate-pulse" />
          <span className="font-semibold text-sm font-display tracking-tight">
            Open to Engineering Opportunities
          </span>
        </div>

        <p className="text-muted-foreground font-sans text-xs sm:text-sm leading-relaxed">
          Available for software engineering internships, collaborative builder sprints, and technical discussions across web, security, and Web3.
        </p>

        <div className="flex flex-col gap-2 pt-2 border-t border-border/60 text-[11px] text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
            <span>Pune, Maharashtra, India (18.52° N, 73.85° E)</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-accent-secondary shrink-0" />
            <span>Standard Time: IST (UTC+5:30)</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-signal shrink-0" />
            <span>Direct reply usually within 24 hours</span>
          </div>
        </div>
      </div>

      {/* 3. Footer Direct Connect Action */}
      <div className="pt-4 border-t border-border flex items-center justify-between text-[11px]">
        <a
          href={`mailto:${siteIdentity.email}`}
          className="inline-flex items-center gap-1.5 text-foreground hover:text-accent font-semibold transition-colors focus-visible:outline-1 focus-visible:outline-accent"
        >
          <span>Send email direct</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
        <span className="text-[10px] text-muted-subtle uppercase">
          VERIFIED INBOX
        </span>
      </div>
    </motion.div>
  );
};
