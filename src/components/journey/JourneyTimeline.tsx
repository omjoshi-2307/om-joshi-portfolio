import React from 'react';
import { motion } from 'framer-motion';
import { JOURNEY_MILESTONES, type TechnicalMilestone } from '@/data/journey';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface JourneyTimelineProps {
  className?: string;
  onNavigateCaseStudy?: (slug: string) => void;
}

export const JourneyTimeline: React.FC<JourneyTimelineProps> = ({
  className,
  onNavigateCaseStudy,
}) => {
  const prefersReduced = useReducedMotion();

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    milestone: TechnicalMilestone
  ) => {
    if (milestone.projectLink?.isCaseStudy && onNavigateCaseStudy) {
      e.preventDefault();
      onNavigateCaseStudy(milestone.projectLink.url);
    }
  };

  return (
    <div className={cn('relative flex flex-col', className)}>
      {/* Central / Left Timeline Spine */}
      <div
        aria-hidden="true"
        className="absolute top-4 bottom-8 left-4 sm:left-5 w-[2px] bg-gradient-to-b from-accent/50 via-border to-transparent"
      />

      <div className="flex flex-col gap-12 sm:gap-16">
        {JOURNEY_MILESTONES.map((milestone, index) => {
          const isLatest = index === JOURNEY_MILESTONES.length - 1;

          return (
            <motion.div
              key={milestone.number}
              initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
              whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-12 sm:pl-16 flex flex-col group"
            >
              {/* Spine Node Marker */}
              <div
                aria-hidden="true"
                className={cn(
                  'absolute left-[3px] sm:left-[7px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-surface border flex items-center justify-center font-mono text-[11px] font-bold shadow-subtle transition-all duration-300',
                  isLatest
                    ? 'border-accent bg-accent/10 text-accent ring-4 ring-accent/10'
                    : 'border-border text-foreground group-hover:border-accent group-hover:text-accent'
                )}
              >
                {milestone.number}
              </div>

              {/* Milestone Content Card */}
              <div className="flex flex-col gap-4 p-6 sm:p-7 rounded-xl border border-border bg-surface transition-all duration-200 group-hover:border-accent/40 shadow-card">
                {/* Meta Row: Phase Badge & Timeframe */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-sm bg-accent-soft text-accent font-semibold tracking-wider uppercase text-[10px]">
                      {milestone.phaseBadge}
                    </span>
                    <span className="text-muted-subtle">•</span>
                    <span className="text-muted-foreground uppercase">{milestone.subtitle}</span>
                  </div>
                  <span className="text-muted-subtle font-normal text-[11px]">
                    {milestone.timeframe}
                  </span>
                </div>

                {/* Milestone Headline */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl sm:text-2xl font-bold font-sans text-foreground tracking-tight">
                    {milestone.title}
                  </h3>
                </div>

                {/* Short Explanation: Bold Editorial Anchor */}
                <div className="border-l-2 border-accent pl-3.5 py-0.5 bg-accent-soft/30 rounded-r-sm">
                  <p className="text-sm sm:text-base font-sans font-medium text-foreground italic leading-relaxed">
                    “{milestone.shortExplanation}”
                  </p>
                </div>

                {/* Narrative Paragraphs */}
                <div className="flex flex-col gap-2.5 text-sm sm:text-[15px] font-sans text-muted-foreground leading-relaxed">
                  {milestone.narrative.map((para, pIdx) => (
                    <p key={pIdx}>{para}</p>
                  ))}
                </div>

                {/* Concrete Technical Highlights */}
                {milestone.keyHighlights && milestone.keyHighlights.length > 0 && (
                  <div className="pt-2 flex flex-col gap-1.5">
                    <span className="text-[10px] font-mono text-muted-subtle uppercase tracking-wider">
                      KEY EVIDENCE & HIGHLIGHTS
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-foreground/90">
                      {milestone.keyHighlights.map((hl, hlIdx) => (
                        <li key={hlIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Closing Punchline for Milestone 06 */}
                {milestone.closingRemark && (
                  <div className="mt-2 p-3.5 rounded-md bg-accent-soft border border-accent/30 flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-sm font-bold font-mono text-accent uppercase tracking-wider">
                      {milestone.closingRemark}
                    </span>
                  </div>
                )}

                {/* Technologies Pill Row */}
                <div className="pt-3 border-t border-border flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {milestone.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-sm bg-surface-elevated border border-border text-[11px] font-mono text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Optional Project / Repository Link */}
                  {milestone.projectLink && (
                    <a
                      href={milestone.projectLink.url}
                      onClick={(e) => handleLinkClick(e, milestone)}
                      target={milestone.projectLink.isExternal ? '_blank' : undefined}
                      rel={milestone.projectLink.isExternal ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-foreground hover:text-accent transition-colors group/link cursor-pointer select-none"
                    >
                      <span>{milestone.projectLink.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
