import React from 'react';
import { Container } from '@/components/layout/Container';
import { ArrowLeft } from 'lucide-react';

export interface NotFoundPageProps {
  onGoHome: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onGoHome }) => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 bg-background text-center">
      <Container size="sm" className="flex flex-col items-center gap-6">
        <span className="text-6xl sm:text-8xl font-display font-extrabold text-accent">
          404
        </span>
        <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
          Page Not Found
        </h1>
        <p className="text-sm text-muted-foreground max-w-md">
          The requested path does not exist or has been moved. Explore the portfolio journey and selected projects from the homepage.
        </p>
        <button
          type="button"
          onClick={onGoHome}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-accent hover:bg-accent-hover text-accent-foreground text-xs font-mono font-semibold transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Homepage</span>
        </button>
      </Container>
    </div>
  );
};
