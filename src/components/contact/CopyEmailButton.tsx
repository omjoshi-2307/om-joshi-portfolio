import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

export interface CopyEmailButtonProps {
  email: string;
  className?: string;
  variant?: 'compact' | 'pill' | 'button';
}

export const CopyEmailButton: React.FC<CopyEmailButtonProps> = ({
  email,
  className,
  variant = 'pill',
}) => {
  const [copied, setCopied] = useState(false);
  const prefersReduced = useReducedMotion();

  const handleCopy = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        // Fallback for non-secure / older browser environments
        const textArea = document.createElement('textarea');
        textArea.value = email;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }

      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? 'Email address copied to clipboard' : 'Copy email address to clipboard'}
      aria-live="polite"
      className={cn(
        'group relative inline-flex items-center justify-center min-h-[44px] min-w-[44px] gap-2 font-mono text-xs transition-colors duration-150 cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-accent',
        variant === 'pill' &&
          'px-4 py-2.5 rounded-sm border border-border bg-elevated hover:bg-card hover:border-border-strong text-muted-foreground hover:text-foreground shadow-subtle',
        variant === 'button' &&
          'px-5 py-3 rounded-md border border-border bg-elevated hover:border-border-strong text-foreground font-semibold shadow-subtle',
        variant === 'compact' &&
          'p-2 rounded-sm text-muted-foreground hover:text-foreground hover:bg-elevated',
        copied && 'border-accent bg-accent-soft text-accent font-bold',
        className
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.span
            key="copied"
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.8 }}
            animate={prefersReduced ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            exit={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            className="inline-flex items-center gap-1.5 text-accent font-semibold"
          >
            <Check className="w-3.5 h-3.5 text-accent" />
            <span>COPIED</span>
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.8 }}
            animate={prefersReduced ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            exit={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            className="inline-flex items-center gap-1.5"
          >
            <Copy className="w-3.5 h-3.5 text-accent" />
            <span>COPY EMAIL</span>
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
};
