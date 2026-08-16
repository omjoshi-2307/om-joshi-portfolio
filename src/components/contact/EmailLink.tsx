import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';
import { CopyEmailButton } from './CopyEmailButton';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

export interface EmailLinkProps {
  email: string;
  className?: string;
  onHoverStateChange?: (isHovered: boolean) => void;
}

export const EmailLink: React.FC<EmailLinkProps> = ({
  email,
  className,
  onHoverStateChange,
}) => {
  const prefersReduced = useReducedMotion();

  return (
    <div
      className={cn(
        'relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 sm:p-8 rounded-2xl border border-border/80 bg-card/70 dark:bg-card/40 backdrop-blur-xs shadow-xs transition-all duration-300 hover:border-accent/40 group',
        className
      )}
      onMouseEnter={() => onHoverStateChange?.(true)}
      onMouseLeave={() => onHoverStateChange?.(false)}
    >
      {/* Corner crosshairs */}
      <div aria-hidden="true" className="absolute top-2 left-2 w-2 h-2 border-t border-l border-accent/40" />
      <div aria-hidden="true" className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-accent/40" />

      {/* Left: Email Primary Link */}
      <div className="flex flex-col gap-1.5 min-w-0">
        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-1.5">
          <Mail className="w-3 h-3 text-accent" />
          <span>PRIMARY CONTACT INBOX</span>
        </span>

        <a
          href={`mailto:${email}`}
          aria-label={`Send email to ${email} (opens default mail client)`}
          className="inline-flex items-center gap-2 group/link select-all focus-visible:outline-2 focus-visible:outline-accent rounded-sm"
        >
          <span className="text-xl sm:text-2xl md:text-3xl font-display font-semibold text-foreground tracking-tight group-hover/link:text-accent transition-colors duration-200 break-all">
            {email}
          </span>
          <motion.span
            animate={prefersReduced ? {} : { x: [0, 2, 0], y: [0, -2, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-accent shrink-0 hidden sm:inline-flex"
          >
            <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </motion.span>
        </a>
      </div>

      {/* Right: Copy Action Button */}
      <div className="shrink-0 self-start sm:self-center">
        <CopyEmailButton email={email} variant="pill" />
      </div>
    </div>
  );
};
