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
        'group relative inline-flex items-center justify-center gap-1.5 font-mono text-xs transition-all duration-200 cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-accent',
        variant === 'pill' &&
          'px-3 py-1.5 rounded-full border border-border/80 bg-card hover:bg-surface hover:border-accent/40 text-muted-foreground hover:text-foreground shadow-xs',
        variant === 'button' &&
          'px-4 py-2 rounded-xl border border-border bg-surface/80 hover:bg-surface hover:border-accent/40 text-foreground font-semibold shadow-xs',
        variant === 'compact' &&
          'p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-surface',
        copied && 'border-emerald-500/50 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
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
            transition={{ duration: 0.2 }}
            className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold"
          >
            <Check className="w-3.5 h-3.5" />
            <span>COPIED</span>
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.8 }}
            animate={prefersReduced ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            exit={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center gap-1.5"
          >
            <Copy className="w-3.5 h-3.5 text-accent group-hover:scale-105 transition-transform" />
            <span>COPY EMAIL</span>
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
};
