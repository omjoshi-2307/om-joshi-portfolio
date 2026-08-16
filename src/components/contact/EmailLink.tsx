import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';
import { CopyEmailButton } from './CopyEmailButton';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { usePointer } from '@/hooks/usePointer';
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
  const { setPointerState, resetPointerState } = usePointer();

  return (
    <div
      className={cn(
        'relative flex flex-col sm:flex-row sm:items-center justify-between gap-8 p-8 sm:p-12 md:p-14 rounded-xl border border-border bg-card shadow-subtle transition-colors duration-200 hover:border-border-strong group',
        className
      )}
      onMouseEnter={() => onHoverStateChange?.(true)}
      onMouseLeave={() => onHoverStateChange?.(false)}
    >
      {/* Left: Email Monumental Link */}
      <div className="flex flex-col gap-3 min-w-0">
        <span className="technical-eyebrow text-muted-subtle flex items-center gap-2">
          <Mail className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
          <span>PRIMARY COMMUNICATION INBOX</span>
        </span>

        <a
          href={`mailto:${email}`}
          aria-label={`Send email to ${email} (opens default mail client)`}
          onMouseEnter={() => setPointerState('email', 'EMAIL')}
          onMouseLeave={resetPointerState}
          className="inline-flex items-center gap-3 group/link select-all focus-visible:outline-2 focus-visible:outline-accent rounded-sm"
        >
          <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-foreground tracking-tight group-hover/link:text-accent transition-colors duration-150 break-all leading-none">
            {email}
          </span>
          <motion.span
            animate={prefersReduced ? {} : { x: [0, 3, 0], y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-accent shrink-0 hidden sm:inline-flex"
            aria-hidden="true"
          >
            <ArrowUpRight className="w-8 h-8 transition-transform duration-150 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
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
