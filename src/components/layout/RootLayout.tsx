import React from 'react';
import { cn } from '@/utils/cn';

export interface RootLayoutProps {
  children: React.ReactNode;
  headerSlot?: React.ReactNode;
  footerSlot?: React.ReactNode;
  className?: string;
}

export const RootLayout: React.FC<RootLayoutProps> = ({
  children,
  headerSlot,
  footerSlot,
  className,
}) => {
  return (
    <div className={cn('relative min-h-screen flex flex-col bg-background text-foreground', className)}>
      {/* Subtle Ambient Background Layer */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-40 dark:opacity-20 transition-opacity"
      >
        <div className="absolute -top-[30%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute top-[60%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-accent/5 blur-[140px]" />
      </div>

      {headerSlot && (
        <header className="relative z-40 w-full">
          {headerSlot}
        </header>
      )}

      <main className="relative z-10 flex-1 w-full">
        {children}
      </main>

      {footerSlot && (
        <footer className="relative z-10 w-full mt-auto">
          {footerSlot}
        </footer>
      )}
    </div>
  );
};
