import React from 'react';
import { useRouter } from '@/hooks/useRouter';
import { usePointer } from '@/hooks/usePointer';
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
  const { navigate } = useRouter();
  const { setPointerState, resetPointerState } = usePointer();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string, item: NavItem) => {
    e.preventDefault();
    if (onLinkClick) {
      onLinkClick(item);
    }
    navigate('/' + href);
  };

  return (
    <ul className={cn('flex items-center gap-1 sm:gap-1.5', className)}>
      {items.map((item) => {
        const isActive = activeSection === item.sectionId;

        return (
          <li key={item.sectionId} className="relative">
            <a
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href, item)}
              onMouseEnter={() => setPointerState('link')}
              onMouseLeave={resetPointerState}
              aria-current={isActive ? 'page' : undefined}
              className={cn(
                'group relative inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium transition-colors duration-150 cursor-pointer rounded-sm focus-visible:outline-2 focus-visible:outline-accent',
                isActive
                  ? 'text-foreground font-semibold bg-surface/80 border border-border/80 shadow-subtle'
                  : 'text-muted-foreground hover:text-foreground hover:bg-surface/40'
              )}
            >
              {/* Subtle pink active indicator dot */}
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" aria-hidden="true" />
              )}

              <span>{item.label}</span>

              {item.badge && (
                <span className="font-mono text-[9px] px-1 py-0.2 rounded bg-accent/10 text-accent border border-accent/20">
                  {item.badge}
                </span>
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
