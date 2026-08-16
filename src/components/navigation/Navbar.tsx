import React, { useState, useEffect } from 'react';
import { Container } from '@/components/layout/Container';
import { Brand } from './Brand';
import { NavLinks } from './NavLinks';
import { ThemeControl } from './ThemeControl';
import { MobileMenu } from './MobileMenu';
import { CommandPalette } from './CommandPalette';
import { Search } from 'lucide-react';
import { DEFAULT_NAV_ITEMS, TRACKED_SECTIONS } from '@/config/navigation';
import { useIsScrolled } from '@/hooks/useScrollPosition';
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
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const isScrolled = useIsScrolled(24);
  const activeSection = useActiveSection(TRACKED_SECTIONS, 'hero');

  // Listen for Cmd+K / Ctrl+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
            {/* Command Palette Trigger */}
            <button
              type="button"
              onClick={() => setCommandPaletteOpen(true)}
              aria-label="Open command palette (Ctrl+K or Cmd+K)"
              className="hidden sm:inline-flex items-center gap-2 px-2.5 py-1.5 min-h-[36px] rounded-sm border border-border bg-elevated hover:bg-card text-muted-foreground hover:text-foreground text-xs font-mono transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-accent shadow-subtle"
            >
              <Search className="w-3.5 h-3.5 text-accent" />
              <span className="hidden lg:inline text-[11px]">Command</span>
              <kbd className="px-1.5 py-0.5 rounded bg-surface border border-border text-[10px] font-mono text-muted-subtle">
                ⌘K
              </kbd>
            </button>

            <ThemeControl />

            {/* Mobile Menu Trigger with accessible 44x44px touch target */}
            <button
              id="mobile-menu-trigger"
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-menu"
              className="md:hidden inline-flex items-center justify-center min-w-[44px] min-h-[44px] w-11 h-11 rounded-sm border border-border bg-elevated hover:bg-card text-foreground transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-accent shadow-subtle"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
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

      {/* Global Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </>
  );
};
