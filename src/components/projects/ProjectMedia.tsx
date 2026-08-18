import React from 'react';
import { ProjectVisual } from './ProjectVisual';
import type { ProjectVisualType } from '@/types/projects';
import { cn } from '@/utils/cn';

export interface ProjectMediaProps {
  visualType?: ProjectVisualType;
  src?: string;
  alt?: string;
  badge?: string;
  caption?: string;
  sourceAttribution?: string;
  aspectRatio?: 'video' | 'wide' | 'square' | 'auto';
  className?: string;
}

/**
 * Editorial Project Media Component.
 * Supports verified project media, bespoke vector schematics, and illustrative graphics with clear badges and captions.
 */
export const ProjectMedia: React.FC<ProjectMediaProps> = ({
  visualType,
  src,
  alt = 'Project visual representation',
  badge,
  caption,
  sourceAttribution,
  aspectRatio = 'auto',
  className,
}) => {
  const aspectClasses = {
    video: 'aspect-video',
    wide: 'aspect-[21/9]',
    square: 'aspect-square',
    auto: '',
  };

  return (
    <figure className={cn('flex flex-col gap-3 group/media', className)}>
      <div
        className={cn(
          'relative rounded-xl border border-border bg-card overflow-hidden shadow-card transition-colors duration-150 group-hover/media:border-border-strong',
          aspectClasses[aspectRatio]
        )}
      >
        {/* Optional Contextual Classification Badge */}
        {badge && (
          <div className="absolute top-3 right-3 z-10">
            <span className="px-2.5 py-1 rounded-sm bg-elevated/90 backdrop-blur-xs border border-border text-[10px] font-mono font-semibold uppercase tracking-wider text-accent shadow-subtle">
              {badge}
            </span>
          </div>
        )}

        {/* Vector Schematic or Raster Image */}
        {visualType ? (
          <ProjectVisual type={visualType} />
        ) : src ? (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover rounded-xl"
          />
        ) : null}
      </div>

      {/* Caption & Attribution */}
      {(caption || sourceAttribution) && (
        <figcaption className="flex flex-wrap items-center justify-between gap-2 px-1 text-[11px] font-mono text-muted-foreground">
          {caption && <span>{caption}</span>}
          {sourceAttribution && (
            <span className="text-[10px] text-muted-subtle">{sourceAttribution}</span>
          )}
        </figcaption>
      )}
    </figure>
  );
};
