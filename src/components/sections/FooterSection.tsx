import React from 'react';
import { Container } from '@/components/layout/Container';

export const FooterSection: React.FC = () => {
  return (
    <div className="w-full border-t border-border py-8 bg-surface/30">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
        <span>© {new Date().getFullYear()} Om Joshi. All rights reserved.</span>
        <span>Pune, India</span>
      </Container>
    </div>
  );
};
