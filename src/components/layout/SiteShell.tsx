import React from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { FooterSection } from '@/components/sections/FooterSection';
import { cn } from '@/utils/cn';

export interface SiteShellProps {
  children: React.ReactNode;
  headerSlot?: React.ReactNode;
  footerSlot?: React.ReactNode;
  className?: string;
  showFooter?: boolean;
}

export const SiteShell: React.FC<SiteShellProps> = ({
  children,
  headerSlot,
  footerSlot,
  className,
  showFooter = true,
}) => {
  return (
    <div
      id="top"
      className={cn(
        'relative min-h-screen flex flex-col bg-background text-foreground selection:bg-accent/20 selection:text-accent-foreground',
        className
      )}
    >
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-card focus:text-foreground focus:border focus:border-accent focus:rounded-md focus:shadow-md font-mono text-xs"
      >
        Skip to main content
      </a>

      {/* Subtle Restrained Ambient Layer */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-30 dark:opacity-15 transition-opacity"
      >
        <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-accent/8 blur-[140px]" />
        <div className="absolute top-[50%] -right-[10%] w-[45vw] h-[45vw] rounded-full bg-accent/8 blur-[160px]" />
      </div>

      {/* Global Navigation Header */}
      {headerSlot !== undefined ? headerSlot : <Navbar />}

      {/* Main Content Area */}
      <main id="main-content" tabIndex={-1} className="relative z-10 flex-1 w-full pt-20 focus:outline-none">
        {children}
      </main>

      {/* Footer Area */}
      {showFooter && (footerSlot !== undefined ? footerSlot : <FooterSection />)}
    </div>
  );
};
