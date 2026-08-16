import React, { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { Brand } from './Brand';
import { NavLinks } from './NavLinks';
import { ThemeControl } from './ThemeControl';
import { MobileMenu } from './MobileMenu';
import { DEFAULT_NAV_ITEMS, TRACKED_SECTIONS } from '@/config/navigation';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useActiveSection } from '@/hooks/useActiveSection';
import { cn } from '@/utils/cn';
import type { NavItem } from '@/types';

export interface NavbarProps {
  items?: NavItem[];
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  items = DEFAULT_NAV_ITEMS,
  className,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isScrolled } = useScrollPosition(24);
  const activeSection = useActiveSection(TRACKED_SECTIONS, 'hero');

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-40 w-full transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]',
          isScrolled
            ? 'h-16 bg-background/95 border-b border-border shadow-subtle'
            : 'h-20 bg-transparent border-b border-transparent',
          className
        )}
      >
        <Container className="h-full flex items-center justify-between">
          {/* Brand Mark */}
          <Brand />

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2"
          >
            <NavLinks items={items} activeSection={activeSection} />
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeControl />

            {/* Mobile Menu Trigger with accessible 44x44px touch target */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              className="md:hidden inline-flex items-center justify-center min-w-[44px] min-h-[44px] w-11 h-11 rounded-sm border border-border bg-elevated hover:bg-card text-foreground transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-accent shadow-subtle"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Navigation Sheet */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeSection={activeSection}
        items={items}
      />
    </>
  );
};
