import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
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
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  activeSection,
  items = DEFAULT_NAV_ITEMS,
}) => {
  const prefersReduced = useReducedMotion();
  const menuRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);

  // Handle ESC key and Focus Trapping
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Prevent body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus the first element
    firstFocusableRef.current?.focus();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    onClose();

    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        setTimeout(() => {
          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: prefersReduced ? 'auto' : 'smooth',
          });
        }, 150);
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="fixed inset-0 z-50 md:hidden flex flex-col justify-between bg-background/98 backdrop-blur-xl"
        >
          {/* Mobile Header Bar */}
          <div className="flex items-center justify-between px-6 h-20 border-b border-border/60">
            <Brand onClick={onClose} showLocation={false} />

            <div className="flex items-center gap-3">
              <ThemeControl />
              
              {/* Close Button */}
              <button
                ref={firstFocusableRef}
                type="button"
                onClick={onClose}
                aria-label="Close navigation menu"
                className="w-10 h-10 rounded-md border border-border/80 bg-surface/60 flex items-center justify-center text-foreground hover:bg-surface transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-accent"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation Links List */}
          <nav className="flex-1 px-8 py-12 flex flex-col justify-center">
            <ul className="flex flex-col gap-6">
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
                      delay: prefersReduced ? 0 : index * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                      className={cn(
                        'group flex items-center justify-between py-2 text-2xl font-display font-semibold transition-colors',
                        isActive
                          ? 'text-accent'
                          : 'text-foreground hover:text-accent'
                      )}
                    >
                      <span className="flex items-center gap-3">
                        <span className="font-mono text-xs text-muted-foreground">
                          0{index + 1}
                        </span>
                        <span>{item.label}</span>
                      </span>

                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-accent" />
                      )}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile Footer Meta */}
          <div className="px-8 py-6 border-t border-border/60 bg-surface/30 flex items-center justify-between text-xs font-mono text-muted-foreground">
            <span>B.Tech IT • Pune</span>
            <span className="text-[10px] text-accent">Interactive Portfolio</span>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
