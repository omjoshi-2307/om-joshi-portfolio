import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Cpu, Code2, Copy, Check } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

export interface HeroTerminalCardProps {
  className?: string;
}

export const HeroTerminalCard: React.FC<HeroTerminalCardProps> = ({ className }) => {
  const prefersReduced = useReducedMotion();
  const [copied, setCopied] = useState(false);

  const handleCopyCmd = async () => {
    try {
      await navigator.clipboard.writeText('npx om-joshi');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <motion.div
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.98, y: 16 }}
      animate={prefersReduced ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'w-full max-w-lg rounded-lg border border-border bg-card shadow-card overflow-hidden font-mono text-xs select-none',
        className
      )}
    >
      {/* 1. Terminal Window Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-surface border-b border-border">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-border-strong inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-border inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-border-subtle inline-block" />
          <span className="ml-2 text-[11px] text-muted-foreground flex items-center gap-1.5 font-medium">
            <Terminal className="w-3 h-3 text-accent" aria-hidden="true" />
            <span>om@workstation: ~/om-joshi-portfolio</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-soft border border-border text-[10px] text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
            <span>ONLINE</span>
          </span>
        </div>
      </div>

      {/* 2. Terminal Shell Output */}
      <div className="p-4 sm:p-5 flex flex-col gap-3.5 bg-card/95 text-[11px] leading-relaxed">
        {/* Command 1: Identity */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-foreground font-semibold">
            <span className="text-accent">$</span>
            <span>whoami</span>
          </div>
          <div className="pl-4 text-muted-foreground">
            <span className="text-foreground">Om Joshi</span> · B.Tech Information Technology Student
            <div className="text-[10px] text-muted-subtle">Pune, Maharashtra, India // IST (UTC+5:30)</div>
          </div>
        </div>

        {/* Command 2: Core Matrix */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-foreground font-semibold">
            <span className="text-accent">$</span>
            <span>cat core-domains.json</span>
          </div>
          <div className="pl-4 py-1.5 rounded bg-surface/80 border border-border/80 flex flex-col gap-1 text-[10px]">
            <div className="flex items-center justify-between text-muted-foreground">
              <span className="text-foreground flex items-center gap-1.5">
                <Code2 className="w-3 h-3 text-accent" />
                <span>Development:</span>
              </span>
              <span>TypeScript, React, Node.js, C++</span>
            </div>
            <div className="flex items-center justify-between text-muted-foreground">
              <span className="text-foreground flex items-center gap-1.5">
                <Shield className="w-3 h-3 text-accent-secondary" />
                <span>Cybersecurity:</span>
              </span>
              <span>AppSec Basics, OWASP, Networks</span>
            </div>
            <div className="flex items-center justify-between text-muted-foreground">
              <span className="text-foreground flex items-center gap-1.5">
                <Cpu className="w-3 h-3 text-signal" />
                <span>Frontiers:</span>
              </span>
              <span>Web3 / Escrow, Local LLMs, Hardware</span>
            </div>
          </div>
        </div>

        {/* Command 3: Highlighted Builds */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-foreground font-semibold">
            <span className="text-accent">$</span>
            <span>git log --oneline -n 2</span>
          </div>
          <div className="pl-4 text-muted-foreground flex flex-col gap-0.5 text-[10px]">
            <div>
              <span className="text-accent font-semibold">8f2c01d</span>{' '}
              <span className="text-foreground">feat(sured):</span> tenant-landlord deposit workflow & wallet UI
            </div>
            <div>
              <span className="text-accent-secondary font-semibold">4a19b8e</span>{' '}
              <span className="text-foreground">feat(wall-e):</span> ultrasonic obstacle avoiding robot in C++
            </div>
          </div>
        </div>

        {/* Command 4: Ethos */}
        <div className="flex flex-col gap-1 pt-1 border-t border-border">
          <div className="flex items-center gap-2 text-foreground font-semibold">
            <span className="text-accent">$</span>
            <span>echo $CORE_PHILOSOPHY</span>
          </div>
          <div className="pl-4 text-accent font-semibold text-xs tracking-tight">
            &quot;I am an IT student who learns by building real things.&quot;
          </div>
        </div>
      </div>

      {/* 3. Terminal Footer Telemetry */}
      <div className="px-4 py-2 bg-surface border-t border-border flex items-center justify-between text-[10px] text-muted-subtle">
        <div className="flex items-center gap-3">
          <span>ARCH: x86_64</span>
          <span>•</span>
          <span>STATUS: READY</span>
        </div>

        <button
          type="button"
          onClick={handleCopyCmd}
          className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground cursor-pointer transition-colors focus-visible:outline-1 focus-visible:outline-accent"
          aria-label="Copy terminal command"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-signal" />
              <span className="text-signal">COPIED</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>npx om-joshi</span>
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
};
