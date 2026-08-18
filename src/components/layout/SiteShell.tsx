import React from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { ScrollProgress } from '@/components/navigation/ScrollProgress';
import { BackToTopButton } from '@/components/navigation/BackToTopButton';
import { FooterSection } from '@/components/sections/FooterSection';
import { PointerIndicator } from '@/components/pointer/PointerIndicator';
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
        'relative min-h-screen flex flex-col bg-background text-foreground selection:bg-accent-soft selection:text-foreground',
        className
      )}
    >
      {/* 1. Global Minimal Scroll Progress Line (Top edge) */}
      <ScrollProgress />

      {/* 2. Desktop Fine Pointer Micro-interaction Layer */}
      <PointerIndicator />

      {/* 3. Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-elevated focus:text-foreground focus:border focus:border-accent focus:rounded-sm font-mono text-xs shadow-subtle"
      >
        Skip to main content
      </a>

      {/* 4. Global Navigation Header */}
      {headerSlot !== undefined ? headerSlot : <Navbar />}

      {/* 5. Main Content Area */}
      <main id="main-content" tabIndex={-1} className="relative z-10 flex-1 w-full pt-20 focus:outline-none">
        {children}
      </main>

      {/* 6. Contextual Back-to-Top Floating Trigger */}
      <BackToTopButton />

      {/* 7. Unified Global Footer */}
      {showFooter && (footerSlot !== undefined ? footerSlot : <FooterSection />)}
    </div>
  );
};
