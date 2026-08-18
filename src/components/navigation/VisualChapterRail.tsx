import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CHAPTER_RAIL_ITEMS, type ChapterRailItem } from '@/data/chapterRail';
import { ChapterThumbnail } from './ChapterThumbnail';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

export interface VisualChapterRailProps {
  activeId?: string;
  className?: string;
}

/**
 * Scroll-Synchronized Visual Chapter Rail.
 * Provides an image-first visual chapter strip across the long-form homepage narrative.
 */
export const VisualChapterRail: React.FC<VisualChapterRailProps> = ({
  activeId = 'hero',
  className,
}) => {
  const prefersReduced = useReducedMotion();
  const railContainerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  // Map active section to chapter id
  const activeChapterId = React.useMemo(() => {
    if (activeId === 'journey') return 'stage-walle';
    const found = CHAPTER_RAIL_ITEMS.find(
      (item) => item.targetId === activeId || item.id === activeId
    );
    return found ? found.targetId : 'hero';
  }, [activeId]);

  // Auto-scroll active image to center on mobile / narrow viewports
  useEffect(() => {
    const activeEl = itemRefs.current.get(activeChapterId);
    if (activeEl && railContainerRef.current) {
      activeEl.scrollIntoView({
        behavior: prefersReduced ? 'auto' : 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [activeChapterId, prefersReduced]);

  const handleChapterClick = (item: ChapterRailItem) => {
    const el = document.getElementById(item.targetId);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: prefersReduced ? 'auto' : 'smooth',
      });

      window.history.replaceState(null, '', item.sectionAnchor);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = (index + 1) % CHAPTER_RAIL_ITEMS.length;
      const nextItem = CHAPTER_RAIL_ITEMS[nextIndex];
      itemRefs.current.get(nextItem.targetId)?.focus();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = (index - 1 + CHAPTER_RAIL_ITEMS.length) % CHAPTER_RAIL_ITEMS.length;
      const prevItem = CHAPTER_RAIL_ITEMS[prevIndex];
      itemRefs.current.get(prevItem.targetId)?.focus();
    }
  };

  return (
    <aside
      aria-label="Story Visual Chapter Rail"
      className={cn(
        'fixed bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 pointer-events-none max-w-[calc(100vw-1.5rem)] sm:max-w-max',
        className
      )}
    >
      <div
        ref={railContainerRef}
        className="pointer-events-auto flex items-end gap-2 sm:gap-3 p-2 sm:p-2.5 rounded-2xl bg-card/95 dark:bg-surface/90 backdrop-blur-md border border-border shadow-elevated overflow-x-auto no-scrollbar max-w-full"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {CHAPTER_RAIL_ITEMS.map((item, index) => {
          const isActive = activeChapterId === item.targetId;

          return (
            <motion.button
              key={item.id}
              ref={(el) => {
                if (el) itemRefs.current.set(item.targetId, el);
                else itemRefs.current.delete(item.targetId);
              }}
              type="button"
              onClick={() => handleChapterClick(item)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              aria-label={`Go to chapter ${item.chapterNumber}: ${item.title}`}
              aria-current={isActive ? 'true' : undefined}
              animate={
                prefersReduced
                  ? {}
                  : {
                      scale: isActive ? 1.04 : 0.96,
                      opacity: isActive ? 1 : 0.7,
                    }
              }
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                'group relative flex flex-col items-center gap-1.5 transition-all duration-200 cursor-pointer shrink-0 focus-visible:outline-2 focus-visible:outline-accent select-none',
                isActive ? 'opacity-100' : 'hover:opacity-100'
              )}
            >
              {/* Image Container: Desktop ~72px height, Mobile ~50px height */}
              <div
                className={cn(
                  'w-16 h-12 sm:w-24 sm:h-16 md:w-28 md:h-18 rounded-lg overflow-hidden transition-all duration-200',
                  isActive
                    ? 'ring-2 ring-accent shadow-warm'
                    : 'group-hover:ring-1 group-hover:ring-border-strong'
                )}
              >
                <ChapterThumbnail
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  isActive={isActive}
                />
              </div>

              {/* Active Chapter Label */}
              {isActive && (
                <motion.div
                  initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 3 }}
                  animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-1 px-1.5 py-0.5 rounded-sm bg-accent-soft text-accent text-[9.5px] font-mono font-bold uppercase tracking-wider whitespace-nowrap"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
                  <span>{item.shortLabel}</span>
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </div>
    </aside>
  );
};
