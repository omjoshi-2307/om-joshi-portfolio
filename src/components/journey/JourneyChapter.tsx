import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
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
    className={className}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export interface JourneyChapterProps {
  stage: JourneyStage;
  isLast?: boolean;
}

export const JourneyChapter: React.FC<JourneyChapterProps> = ({ stage, isLast = false }) => {
  const prefersReduced = useReducedMotion();

  // Subtle character cameo on specific milestones (e.g. Stage 03 WALL-E)
  const isRoboticsMilestone = stage.id === 'stage-walle';

  return (
    <div
      id={stage.id}
      className={cn(
        'relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-20 sm:pb-28',
        !isLast && 'border-b border-border/50'
      )}
    >
      {/* Left Column: Stage Metadata & Narrative (7 cols) */}
      <motion.div
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
        whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="lg:col-span-7 flex flex-col gap-6"
      >
        {/* Stage Header Info */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
          <span className="font-display font-black text-2xl sm:text-3xl text-accent tracking-tighter">
            {stage.number}
          </span>
          <span className="px-2.5 py-1 rounded bg-surface border border-border text-foreground font-semibold uppercase tracking-wider">
            {stage.stageLabel}
          </span>
          {stage.timeframe && (
            <span className="text-muted-foreground">
              / {stage.timeframe}
            </span>
          )}
        </div>

        {/* Stage Title */}
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground tracking-tight">
          {stage.title}
        </h3>

        {/* Narrative Quote / Philosophy */}
        {stage.quote && (
          <div className="p-4 rounded-lg bg-surface/50 border-l-2 border-accent text-sm font-medium text-foreground italic">
            "{stage.quote}"
          </div>
        )}

        {/* Narrative Paragraphs */}
        <div className="space-y-3.5 text-muted-foreground text-sm sm:text-base leading-relaxed">
          {stage.narrative.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Role Contributions (if present) */}
        {stage.roleContributions && (
          <div className="p-4 rounded-lg bg-card border border-border space-y-2">
            <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider block">
              Primary Role & Contributions
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {stage.roleContributions.map((role) => (
                <div key={role} className="flex items-center gap-2 text-xs text-foreground">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span>{role}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Learning Callout (e.g. Hackathon) */}
        {stage.keyLearning && (
          <div className="p-4 rounded-lg bg-surface/80 border border-border text-xs text-muted-foreground space-y-1">
            <span className="font-mono text-[10px] text-accent uppercase tracking-wider font-semibold block">
              Key Retrospective Insight
            </span>
            <p className="text-foreground/90 leading-relaxed font-medium">
              {stage.keyLearning}
            </p>
          </div>
        )}

        {/* Technologies Pills */}
        {stage.technologies && stage.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {stage.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded bg-surface border border-border text-[11px] font-mono text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Repository Link (if present) */}
        {stage.repositoryUrl && (
          <div className="pt-2">
            <a
              href={stage.repositoryUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border bg-card hover:bg-surface text-foreground text-xs font-mono font-medium transition-all duration-200 active:scale-[0.98] cursor-pointer"
            >
              <GitHubIcon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              <span>{stage.repositoryName || 'View Source Repository'}</span>
              <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-accent transition-colors ml-1" />
            </a>
          </div>
        )}
      </motion.div>

      {/* Right Column: Visual Artifact & Cameo (5 cols) */}
      <motion.div
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 24 }}
        whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="lg:col-span-5 flex flex-col gap-4 justify-center"
      >
        <JourneyArtifact type={stage.visualType} title={stage.title} />

        {/* Subtle Milestone Cameo for Robotics */}
        {isRoboticsMilestone && (
          <div className="p-3 rounded-lg bg-surface/50 border border-border/80 flex items-center gap-3">
            <div className="w-10 h-10 shrink-0">
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
              <span className="text-foreground font-semibold block">Milestone 03: Autonomous Loop</span>
              <span>Physical obstacle evasion & hardware assembly</span>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
