import React from 'react';
import { cn } from '@/utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outline' | 'accent' | 'subtle';
  size?: 'sm' | 'md';
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'default',
  size = 'md',
  children,
  ...props
}) => {
  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5 font-mono',
    md: 'text-xs px-2.5 py-1 font-sans font-medium',
  };

  const variantStyles = {
    default: 'bg-muted text-muted-foreground border border-border',
    outline: 'border border-border text-foreground bg-transparent',
    accent: 'bg-accent/10 text-accent border border-accent/20',
    subtle: 'bg-surface text-surface-foreground',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-sm tracking-wide transition-colors',
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
