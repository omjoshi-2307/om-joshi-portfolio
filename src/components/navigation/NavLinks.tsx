import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useRouter } from '@/hooks/useRouter';
import { cn } from '@/utils/cn';
import { DEFAULT_NAV_ITEMS } from '@/config/navigation';
import type { NavItem, SectionId } from '@/types';

export interface NavLinksProps {
  items?: NavItem[];
  activeSection?: SectionId;
  className?: string;
  onLinkClick?: (item: NavItem) => void;
}

export const NavLinks: React.FC<NavLinksProps> = ({
  items = DEFAULT_NAV_ITEMS,
  activeSection,
  className,
  onLinkClick,
}) => {
  const prefersReduced = useReducedMotion();
  const { navigate } = useRouter();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string, item: NavItem) => {
    e.preventDefault();
    if (onLinkClick) {
      onLinkClick(item);
    }
    navigate('/' + href);
  };

  return (
    <ul className={cn('flex items-center gap-1 sm:gap-2', className)}>
      {items.map((item) => {
        const isActive = activeSection === item.sectionId;

        return (
          <li key={item.sectionId} className="relative">
            <a
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href, item)}
              aria-current={isActive ? 'page' : undefined}
              className={cn(
                'group relative inline-flex items-center px-3.5 py-1.5 text-sm font-medium transition-colors duration-200 cursor-pointer rounded-sm focus-visible:outline-2 focus-visible:outline-accent',
                isActive
                  ? 'text-foreground font-semibold'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {/* Subtle active pill background */}
              {isActive && (
                <motion.span
                  layoutId="activeNavBackground"
                  transition={
                    prefersReduced
                      ? { duration: 0 }
                      : { type: 'spring', stiffness: 380, damping: 30 }
                  }
                  className="absolute inset-0 rounded-md bg-surface/80 border border-border/80 -z-10"
                />
              )}

              {/* Text with subtle hover motion */}
              <span className="relative z-10 flex items-center gap-1.5">
                <span
                  className={cn(
                    'inline-block transition-transform duration-200 group-hover:-translate-y-0.5',
                    prefersReduced && 'group-hover:translate-y-0'
                  )}
                >
                  {item.label}
                </span>

                {item.badge && (
                  <span className="font-mono text-[9px] px-1 py-0.2 rounded bg-accent/10 text-accent border border-accent/20">
                    {item.badge}
                  </span>
                )}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};
