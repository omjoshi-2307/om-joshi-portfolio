import React from 'react';
import { cn } from '@/utils/cn';
import { Container } from './Container';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  headerClassName?: string;
  innerClassName?: string;
  hasDivider?: boolean;
  children?: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  id,
  eyebrow,
  title,
  description,
  containerSize = 'xl',
  className,
  headerClassName,
  innerClassName,
  hasDivider = false,
  children,
  ...props
}) => {
  const hasHeader = Boolean(eyebrow || title || description);

  return (
    <section
      id={id}
      data-section-id={id}
      className={cn(
        'relative py-16 sm:py-20 md:py-28 lg:py-32',
        hasDivider && 'border-t border-border/60',
        className
      )}
      {...props}
    >
      <Container size={containerSize} className={innerClassName}>
        {hasHeader && (
          <header className={cn('mb-12 sm:mb-16 md:mb-20', headerClassName)}>
            {eyebrow && (
              <div className="section-eyebrow text-muted-foreground mb-3 flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
                <span>{eyebrow}</span>
              </div>
            )}
            {title && (
              <h2 className="section-display text-foreground font-semibold">
                {title}
              </h2>
            )}
            {description && (
              <p className="editorial-lead text-muted-foreground mt-4 max-w-2xl">
                {description}
              </p>
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
};
