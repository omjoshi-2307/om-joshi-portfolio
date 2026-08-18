import React from 'react';
import { Container } from '@/components/layout/Container';
import { ArrowLeft } from 'lucide-react';
import { usePointer } from '@/hooks/usePointer';
import { usePageMetadata } from '@/hooks/usePageMetadata';

export interface NotFoundPageProps {
  onGoHome: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onGoHome }) => {
  const { setPointerState, resetPointerState } = usePointer();

  usePageMetadata({
    title: '404 // Page Not Found — Om Joshi',
    description: 'The requested page does not exist or has moved.',
  });

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-24 bg-background text-center">
      <Container size="sm" className="flex flex-col items-center gap-6">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 technical-eyebrow text-muted-subtle">
          <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
          <span>404 // UNKNOWN ROUTE</span>
        </div>

        {/* Monumental 404 Heading */}
        <h1 className="hero-monumental text-foreground select-none">
          404
        </h1>

        <div className="flex flex-col gap-2 max-w-md">
          <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground">
            Looks like this page wandered off.
          </h2>
          <p className="text-sm text-muted-foreground font-sans leading-relaxed">
            The requested destination doesn't exist or has moved. Return to the homepage to explore the portfolio and case studies.
          </p>
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={onGoHome}
          onMouseEnter={() => setPointerState('link')}
          onMouseLeave={resetPointerState}
          className="inline-flex items-center gap-2 min-h-[44px] px-6 py-3 rounded-md bg-accent hover:bg-accent-hover text-accent-foreground text-xs font-mono font-semibold transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-accent active:scale-[0.98] shadow-subtle mt-2"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Back to Portfolio</span>
        </button>
      </Container>
    </div>
  );
};
