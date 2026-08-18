import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, CheckCircle2, ArrowRight } from 'lucide-react';
import { JourneyArtifact } from './JourneyArtifact';
import { Character } from '@/components/character/Character';
import type { JourneyStage } from '@/types/journey';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export interface JourneyActiveContentProps {
  stage: JourneyStage;
  onNextStage?: () => void;
  className?: string;
}

export const JourneyActiveContent: React.FC<JourneyActiveContentProps> = ({
  stage,
  onNextStage,
  className,
}) => {
  const prefersReduced = useReducedMotion();
  const isRoboticsMilestone = stage.id === 'stage-walle';

  return (
    <div
      role="tabpanel"
      id={`panel-${stage.id}`}
      aria-labelledby={`tab-${stage.id}`}
      className={cn('relative min-h-[420px] w-full pt-4', className)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={stage.id}
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 14 }}
          animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* 1. PRIMARY LARGE VISUAL ARTIFACT (Col 6) */}
          <div className="order-1 lg:order-2 lg:col-span-6 flex flex-col gap-3 justify-center">
            <div className="rounded-xl overflow-hidden border border-border bg-card shadow-card">
              <JourneyArtifact type={stage.visualType} title={stage.title} />
            </div>

            {/* Cameo for Robotics */}
            {isRoboticsMilestone && (
              <div className="p-3 rounded-md bg-elevated border border-border flex items-center gap-3 shadow-subtle">
                <div className="w-9 h-9 shrink-0">
                  <Character
                    lookAngle={{
                      headYaw: 10,
                      headPitch: 6,
                      eyeOffsetX: 2,
                      eyeOffsetY: 1.5,
                      distance: 80,
                      isTracking: true,
                    }}
                  />
                </div>
                <div className="text-[11px] font-mono text-muted-foreground">
                  <span className="text-foreground font-semibold block">Milestone 03: Perception Loop</span>
                  <span>Ultrasonic obstacle evasion & motor actuation</span>
                </div>
              </div>
            )}
          </div>

          {/* 2. CHAPTER METADATA & NARRATIVE (Col 6) */}
          <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col gap-4 sm:gap-5">
            {/* Numeral & Stage Header */}
            <div className="flex items-center gap-3">
              <span className="chapter-monumental text-accent tracking-tighter" aria-hidden="true">
                {stage.number}
              </span>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-subtle font-semibold">
                  CHAPTER STAGE // {stage.timeframe || 'MILESTONE'}
                </span>
                <span className="font-display text-xs sm:text-sm font-bold text-foreground uppercase tracking-wider">
                  {stage.stageLabel}
                </span>
              </div>
            </div>

            {/* Stage Title */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-foreground tracking-tight">
              {stage.title}
            </h3>

            {/* Quote */}
            {stage.quote && (
              <p className="text-sm sm:text-base font-semibold text-foreground/90 font-display italic">
                "{stage.quote}"
              </p>
            )}

            {/* Narrative text */}
            <div className="text-muted-foreground text-sm sm:text-[15px] leading-relaxed font-sans">
              {stage.narrative.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Role contributions for SureD */}
            {stage.roleContributions && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {stage.roleContributions.map((role) => (
                  <div key={role} className="flex items-center gap-2 text-xs text-foreground font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" aria-hidden="true" />
                    <span>{role}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Key Learning */}
            {stage.keyLearning && (
              <p className="text-xs font-mono text-muted-foreground border-l-2 border-accent pl-3 py-0.5">
                Insight: {stage.keyLearning}
              </p>
            )}

            {/* Technologies */}
            {stage.technologies && stage.technologies.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {stage.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-sm bg-elevated border border-border text-[10px] font-mono text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {/* Actions: Repository or Next chapter */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {stage.repositoryUrl && (
                <a
                  href={stage.repositoryUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`View source repository for ${stage.title} (opens in a new tab)`}
                  className="group inline-flex items-center gap-2 min-h-[40px] px-4 py-2 rounded-md border border-border bg-card hover:bg-elevated text-foreground text-xs font-mono font-medium transition-colors duration-150 active:scale-[0.98] cursor-pointer shadow-subtle focus-visible:outline-2 focus-visible:outline-accent"
                >
                  <GitHubIcon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  <span>{stage.repositoryName || 'View Source Repository'}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-accent transition-colors ml-1" aria-hidden="true" />
                </a>
              )}

              {onNextStage && (
                <button
                  type="button"
                  onClick={onNextStage}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-muted-foreground hover:text-accent transition-colors cursor-pointer"
                >
                  <span>Next milestone</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
