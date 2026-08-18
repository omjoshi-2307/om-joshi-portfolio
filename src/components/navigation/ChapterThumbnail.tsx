import React from 'react';
import { cn } from '@/utils/cn';

export interface ChapterThumbnailProps {
  src: string;
  alt: string;
  isActive: boolean;
  className?: string;
}

/**
 * Editorial Chapter Image Thumbnail.
 * Renders authentic, high-contrast chapter visuals with responsive aspect ratio and dynamic active highlights.
 */
export const ChapterThumbnail: React.FC<ChapterThumbnailProps> = ({
  src,
  alt,
  isActive,
  className,
}) => {
  return (
    <div
      className={cn(
        'relative w-full h-full rounded-lg overflow-hidden transition-all duration-200 select-none bg-surface border',
        isActive
          ? 'border-accent ring-1 ring-accent/30 shadow-subtle'
          : 'border-border opacity-70 group-hover:opacity-100 group-hover:border-border-strong',
        className
      )}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={cn(
          'w-full h-full object-cover transition-all duration-300',
          isActive ? 'scale-105 contrast-[1.05]' : 'group-hover:scale-105'
        )}
      />
      {/* Subtle tonal gradient for depth */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
};
