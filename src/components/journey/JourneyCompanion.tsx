import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Avatar3D } from '@/components/character3d';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Sparkles, Terminal } from 'lucide-react';
import { cn } from '@/utils/cn';

const COMPANION_MESSAGES = [
  { stage: '01', text: 'Started with physical circuits, Arduino, and sensors.' },
  { stage: '02', text: 'Mastered React, TypeScript, and component state.' },
  { stage: '03', text: 'Designed SureD rental escrow workflows on Stellar.' },
  { stage: '04', text: 'Shipped JalSanchaee under 24h hackathon pressure.' },
  { stage: '05', text: 'Deepening AppSec, OWASP, Linux, and protocols.' },
  { stage: '06', text: 'Exploring local LLMs, systems, and vision.' },
];

export interface JourneyCompanionProps {
  className?: string;
}

export const JourneyCompanion: React.FC<JourneyCompanionProps> = ({ className }) => {
  const prefersReduced = useReducedMotion();
  const [activeMessageIndex, setActiveMessageIndex] = useState(0);
  const [interactionCount, setInteractionCount] = useState(0);

  const handleCompanionClick = () => {
    setActiveMessageIndex((prev) => (prev + 1) % COMPANION_MESSAGES.length);
    setInteractionCount((prev) => prev + 1);
  };

  const currentMsg = COMPANION_MESSAGES[activeMessageIndex];

  return (
    <div
      className={cn(
        'relative flex flex-col items-center p-6 sm:p-7 rounded-xl border border-border bg-surface shadow-card transition-all duration-300 hover:border-accent/40',
        className
      )}
    >
      {/* Companion Card Header */}
      <div className="w-full flex items-center justify-between pb-4 mb-4 border-b border-border text-xs font-mono">
        <div className="flex items-center gap-2 text-foreground font-semibold">
          <Terminal className="w-3.5 h-3.5 text-accent" />
          <span className="tracking-wider uppercase">JOURNEY COMPANION</span>
        </div>
        <span className="text-[10px] text-muted-subtle tracking-widest uppercase">
          ID: OJ-AVATAR
        </span>
      </div>

      {/* Production 3D Avatar (with automatic seamless 2D fallback) in Companion Scale (size="md") */}
      <div className="relative py-2">
        <Avatar3D
          size="md"
          showPedestal={true}
          showStatusBadge={false}
          customCoordinateText="OM JOSHI // BUILDER"
          interactive={true}
          onCharacterClick={handleCompanionClick}
        />
      </div>

      {/* Dynamic Status / Interactive Speech Bubble */}
      <div className="w-full mt-4 flex flex-col gap-2">
        <div className="flex items-center justify-between text-[11px] font-mono text-muted-subtle">
          <span className="flex items-center gap-1.5 text-accent font-semibold">
            <Sparkles className="w-3 h-3" />
            <span>CLICK AVATAR TO CYCLE</span>
          </span>
          <span>STEP {currentMsg.stage}/06</span>
        </div>

        <div className="relative min-h-[56px] p-3 rounded-md bg-surface-soft border border-border/80 flex items-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeMessageIndex}
              initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 6 }}
              animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="text-xs font-mono text-foreground leading-relaxed"
            >
              <span className="text-accent font-bold mr-1.5">{currentMsg.stage} ›</span>
              {currentMsg.text}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Builder Telemetry Footer */}
      <div className="w-full mt-5 pt-4 border-t border-border flex flex-col gap-2 text-[10px] font-mono text-muted-foreground">
        <div className="flex items-center justify-between">
          <span className="text-muted-subtle">TELEMETRY</span>
          <span className="flex items-center gap-1.5 text-signal font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
            TRACKING PROGRESSION
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-subtle">LOCATION</span>
          <span className="text-foreground">PUNE, IN (18.52° N, 73.85° E)</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-subtle">INTERACTIONS</span>
          <span className="text-accent font-bold">{interactionCount} PINGS</span>
        </div>
      </div>
    </div>
  );
};
