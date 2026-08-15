import React from 'react';
import { Container } from '@/components/layout/Container';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="w-full border-b border-border/40 backdrop-blur-md bg-background/80 sticky top-0 z-50">
      <Container className="h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-semibold tracking-wider text-foreground">
            OM JOSHI
          </span>
          <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-surface border border-border text-muted-foreground hidden sm:inline-block">
            B.Tech IT • Pune
          </span>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle showLabels />
        </div>
      </Container>
    </div>
  );
};
