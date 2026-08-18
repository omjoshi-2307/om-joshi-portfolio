import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useRouter } from '@/hooks/useRouter';
import { ThemeControl } from './ThemeControl';
import { Brand } from './Brand';
import { DEFAULT_NAV_ITEMS } from '@/config/navigation';
import { cn } from '@/utils/cn';
import type { NavItem, SectionId } from '@/types';

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection?: SectionId;
  items?: NavItem[];
  onOpenCommandPalette?: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  activeSection,
  items = DEFAULT_NAV_ITEMS,
  onOpenCommandPalette,
}) => {
  const prefersReduced = useReducedMotion();
  const { navigate } = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);

  // Handle ESC key, focus trapping, and focus restoration
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      // Keyboard Focus Trap for Modal Dialog
      if (e.key === 'Tab' && menuRef.current) {
        const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Prevent body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus the first element on open
    setTimeout(() => {
      firstFocusableRef.current?.focus();
    }, 50);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;

      // Restore focus to opening trigger
      const trigger = document.getElementById('mobile-menu-trigger');
      if (trigger) {
        trigger.focus();
      }
    };
  }, [isOpen, onClose]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onClose();
    navigate('/' + href);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="mobile-navigation-menu"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="fixed inset-0 z-50 md:hidden flex flex-col justify-between bg-background h-dvh max-h-dvh overflow-y-auto"
        >
          {/* Mobile Header Bar */}
          <div className="flex items-center justify-between px-6 h-20 border-b border-border shrink-0">
            <Brand onClick={onClose} showLocation={false} />

            <div className="flex items-center gap-3">
              <ThemeControl />
              
              {/* Close Button with 44x44px target */}
              <button
                ref={firstFocusableRef}
                type="button"
                onClick={onClose}
                aria-label="Close navigation menu"
                className="min-w-[44px] min-h-[44px] w-11 h-11 rounded-sm border border-border bg-elevated flex items-center justify-center text-foreground hover:bg-card transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-accent shadow-subtle"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation Links List */}
          <nav aria-label="Mobile Navigation Links" className="flex-1 px-8 py-8 flex flex-col justify-center">
            <ul className="flex flex-col gap-4 sm:gap-6">
              {items.map((item: NavItem, index: number) => {
                const isActive = activeSection === item.sectionId;

                return (
                  <motion.li
                    key={item.sectionId}
                    initial={prefersReduced ? { opacity: 0 } : { opacity: 0, x: -20 }}
                    animate={prefersReduced ? { opacity: 1 } : { opacity: 1, x: 0 }}
                    exit={prefersReduced ? { opacity: 0 } : { opacity: 0, x: -10 }}
                    transition={{
                      duration: 0.3,
                      delay: prefersReduced ? 0 : index * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                      aria-current={isActive ? 'page' : undefined}
                      className={cn(
                        'group flex items-center justify-between min-h-[44px] py-2.5 text-2xl sm:text-3xl font-display font-bold transition-colors duration-150 rounded-sm focus-visible:outline-2 focus-visible:outline-accent',
                        isActive
                          ? 'text-accent'
                          : 'text-foreground hover:text-accent'
                      )}
                    >
                      <span className="flex items-center gap-3">
                        <span className="font-mono text-xs text-muted-subtle" aria-hidden="true">
                          0{index + 1}
                        </span>
                        <span>{item.label}</span>
                      </span>

                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
                      )}
                    </a>
                  </motion.li>
                );
              })}
            </ul>

            {/* Quick Mobile Command Palette Trigger */}
            {onOpenCommandPalette && (
              <div className="pt-6 mt-4 border-t border-border">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    setTimeout(onOpenCommandPalette, 150);
                  }}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg border border-border bg-elevated hover:bg-card text-xs font-mono text-foreground font-medium transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-accent shadow-subtle min-h-[44px]"
                  aria-label="Open command palette search"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
                    <span>Search & Commands</span>
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface border border-border text-[10px] text-muted-foreground font-mono">
                    ⌘K / Ctrl+K
                  </span>
                </button>
              </div>
            )}
          </nav>

          {/* Mobile Footer Meta with Safe Area padding */}
          <div className="px-8 py-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] border-t border-border bg-surface flex items-center justify-between text-xs font-mono text-muted-foreground shrink-0">
            <span>Pune, India // IST (UTC+5:30)</span>
            <span className="text-[10px] text-accent font-semibold tracking-wider uppercase font-mono">
              B.Tech IT • 2026
            </span>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
