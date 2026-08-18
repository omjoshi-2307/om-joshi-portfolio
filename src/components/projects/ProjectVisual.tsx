import React from 'react';
import { motion } from 'framer-motion';
import { Lock, ShieldCheck, Bot, Gauge, ArrowRight, Waves, Sparkles } from 'lucide-react';
import type { ProjectVisualType } from '@/types/projects';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

export interface ProjectVisualProps {
  type: ProjectVisualType;
  className?: string;
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ type, className }) => {
  const prefersReduced = useReducedMotion();

  switch (type) {
    case 'sured':
      return (
        <div
          className={cn(
            'relative p-6 sm:p-8 md:p-10 rounded-xl border border-border bg-card overflow-hidden shadow-card flex flex-col gap-6',
            className
          )}
        >
          {/* Subtle Technical Grid Overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:2rem_2rem]"
          />

          {/* Top Bar Spec */}
          <div className="relative flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-border text-xs font-mono">
            <div className="flex items-center gap-2.5 text-foreground font-semibold">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <Lock className="w-4 h-4 text-accent" aria-hidden="true" />
              <span>SURED // SMART ESCROW ARCHITECTURE</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm bg-accent-soft text-accent border border-accent/20 text-[10px] font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                <span>SOROBAN_STATE: LOCKED</span>
              </span>
              <span className="px-2 py-0.5 rounded-sm bg-elevated border border-border text-[10px] text-muted-foreground font-mono">
                STELLAR_TESTNET
              </span>
            </div>
          </div>

          {/* Core Escrow Flow Pipeline */}
          <div className="relative grid grid-cols-1 md:grid-cols-11 gap-4 items-center my-2">
            {/* 1. Tenant Node (4 cols) */}
            <div className="md:col-span-3 p-4 sm:p-5 rounded-lg bg-elevated border border-border flex flex-col gap-2.5 shadow-subtle">
              <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground">
                <span>PARTY A // TENANT</span>
                <span className="text-accent font-semibold">DEPOSITOR</span>
              </div>
              <span className="text-base font-bold text-foreground font-display">Deposit Deposited</span>
              <div className="flex items-center gap-1.5 text-xs text-foreground font-mono">
                <span className="text-accent font-bold">2,500.00 XLM</span>
              </div>
              <div className="mt-1 pt-2 border-t border-border flex items-center justify-between text-[10px] text-muted-foreground font-mono">
                <span>Freighter Connector</span>
                <span className="text-accent font-semibold">● Signed</span>
              </div>
            </div>

            {/* Connecting Arrow 1 (1 col) */}
            <div className="hidden md:flex md:col-span-1 justify-center items-center">
              <motion.div
                animate={prefersReduced ? {} : { x: [-3, 3, -3] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowRight className="w-5 h-5 text-accent" aria-hidden="true" />
              </motion.div>
            </div>

            {/* 2. Central Soroban Smart Contract Escrow Vault (3 cols) */}
            <div className="md:col-span-3 relative p-5 sm:p-6 rounded-lg bg-accent-soft border-2 border-accent/40 flex flex-col items-center justify-center text-center gap-2.5 shadow-warm">
              <div
                className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-subtle"
                aria-hidden="true"
              >
                <Lock className="w-5 h-5" />
              </div>
              <span className="font-mono text-[11px] font-bold text-accent uppercase tracking-wider">
                SOROBAN ESCROW VAULT
              </span>
              <span className="font-mono text-xl sm:text-2xl font-black text-foreground">
                2,500.00 XLM
              </span>
              <span className="text-[10px] font-mono text-muted-foreground leading-tight">
                Cryptographic release upon tenancy verification
              </span>
            </div>

            {/* Connecting Arrow 2 (1 col) */}
            <div className="hidden md:flex md:col-span-1 justify-center items-center">
              <motion.div
                animate={prefersReduced ? {} : { x: [-3, 3, -3] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <ArrowRight className="w-5 h-5 text-accent-secondary" aria-hidden="true" />
              </motion.div>
            </div>

            {/* 3. Landlord Node (3 cols) */}
            <div className="md:col-span-3 p-4 sm:p-5 rounded-lg bg-elevated border border-border flex flex-col gap-2.5 shadow-subtle">
              <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground">
                <span>PARTY B // LANDLORD</span>
                <span className="text-accent-secondary font-semibold">BENEFICIARY</span>
              </div>
              <span className="text-base font-bold text-foreground font-display">Claim Release</span>
              <div className="flex items-center gap-1.5 text-xs text-foreground font-mono">
                <span className="text-accent-secondary font-bold">Mutual Approval</span>
              </div>
              <div className="mt-1 pt-2 border-t border-border flex items-center justify-between text-[10px] text-muted-foreground font-mono">
                <span>Dispute Arbiter</span>
                <span className="text-accent-secondary font-semibold">● Ready</span>
              </div>
            </div>
          </div>

          {/* Bottom Telemetry & Contract Attributes Bar */}
          <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono text-muted-foreground">
            <div className="flex flex-wrap items-center gap-4">
              <span>CONTRACT: Soroban / Rust</span>
              <span>CLIENT: React + TypeScript</span>
              <span>TOKENS: Native XLM</span>
            </div>
            <div className="flex items-center gap-1.5 text-foreground font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
              <span>Stellar Build Station Pune Prototype</span>
            </div>
          </div>
        </div>
      );

    case 'walle':
      return (
        <div
          className={cn(
            'p-6 sm:p-8 rounded-xl border border-border bg-card font-mono text-xs shadow-subtle flex flex-col gap-4 overflow-hidden',
            className
          )}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-border text-[10px] text-muted-foreground">
            <div className="flex items-center gap-2 text-foreground font-semibold">
              <Bot className="w-4 h-4 text-accent-secondary" aria-hidden="true" />
              <span>WALL-E // ULTRASONIC SENSOR TELEMETRY</span>
            </div>
            <span className="text-accent-secondary flex items-center gap-1.5 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-signal inline-block" aria-hidden="true" />
              ACTIVE RADAR SWEEP
            </span>
          </div>

          {/* Radar Obstacle Detection Visualizer */}
          <div className="relative h-44 rounded-lg bg-surface-soft border border-border flex items-center justify-center overflow-hidden">
            {/* Concentric distance rings */}
            <div aria-hidden="true" className="absolute w-24 h-24 rounded-full border border-dashed border-accent-depth/30" />
            <div aria-hidden="true" className="absolute w-48 h-48 rounded-full border border-dashed border-accent-secondary/20" />
            <div aria-hidden="true" className="absolute w-72 h-72 rounded-full border border-dashed border-accent-secondary/10" />

            {/* Rotating sonar ray */}
            <motion.div
              aria-hidden="true"
              animate={prefersReduced ? {} : { rotate: [-42, 42, -42] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: 'bottom center' }}
              className="absolute bottom-4 w-1 h-32 bg-gradient-to-t from-accent-secondary to-transparent"
            />

            {/* Target indicator */}
            <div className="absolute top-3 right-6 bg-card px-2.5 py-1 rounded-sm border border-border text-[10px] text-foreground font-bold shadow-subtle flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-signal" />
              <span>HC-SR04 RANGE: 18.4 cm</span>
            </div>

            {/* Wheeled Robot Chassis Diagram Vector */}
            <div className="absolute bottom-3 flex flex-col items-center">
              <div className="w-24 h-10 rounded-t-md bg-elevated border border-border flex items-center justify-around px-2 text-[8px] font-mono text-muted-foreground shadow-subtle">
                <span className="text-accent-secondary font-bold">PWM 180</span>
                <span className="text-foreground font-semibold">CHASSIS</span>
                <span className="text-accent font-bold">PWM 0</span>
              </div>
              <div className="w-28 h-3 bg-border rounded-full flex justify-between px-1">
                <span className="w-4 h-2 bg-foreground rounded-xs" />
                <span className="w-4 h-2 bg-foreground rounded-xs" />
              </div>
            </div>

            <div className="absolute top-3 left-4 text-[9px] text-muted-subtle font-mono">
              <span>ALGORITHM: REAL-TIME EVASION</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-1 text-[10px]">
            <div className="p-2 rounded-sm bg-elevated border border-border">
              <span className="text-muted-subtle block">CONTROLLER</span>
              <span className="font-bold text-foreground">Arduino UNO</span>
            </div>
            <div className="p-2 rounded-sm bg-elevated border border-border">
              <span className="text-muted-subtle block">MOTOR DRIVER</span>
              <span className="font-bold text-foreground">L298N Dual H-Bridge</span>
            </div>
            <div className="p-2 rounded-sm bg-elevated border border-border">
              <span className="text-muted-subtle block">ACTION</span>
              <span className="font-bold text-accent">STEER RIGHT</span>
            </div>
          </div>
        </div>
      );

    case 'jalsanchaee':
      return (
        <div
          className={cn(
            'p-6 sm:p-8 rounded-xl border border-border bg-card font-mono text-xs shadow-subtle flex flex-col gap-4 overflow-hidden',
            className
          )}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-border text-[10px] text-muted-foreground">
            <div className="flex items-center gap-2 text-foreground font-semibold">
              <Gauge className="w-4 h-4 text-accent-depth" aria-hidden="true" />
              <span>JALSANCHAEE // IOT WATER MANAGEMENT</span>
            </div>
            <span className="text-accent-secondary font-semibold">TECHATHON 3.0 SPRINT</span>
          </div>

          {/* IoT Flow Diagram */}
          <div className="grid grid-cols-2 gap-3 my-1">
            <div className="p-4 rounded-md bg-elevated border border-border flex flex-col gap-2 shadow-subtle">
              <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                <span>RESERVOIR SENSING</span>
                <Waves className="w-3.5 h-3.5 text-accent-depth" />
              </div>
              <span className="text-lg font-bold text-foreground font-mono">84.2%</span>
              <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
                <div className="h-full bg-accent-depth w-[84%] rounded-full" />
              </div>
              <span className="text-[10px] text-accent-depth font-medium">Ultrasonic Depth Node</span>
            </div>

            <div className="p-4 rounded-md bg-elevated border border-border flex flex-col gap-2 shadow-subtle">
              <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                <span>FLOW CONSUMPTION</span>
                <Gauge className="w-3.5 h-3.5 text-accent-secondary" />
              </div>
              <span className="text-lg font-bold text-foreground font-mono">12.4 L/min</span>
              <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
                <div className="h-full bg-accent-secondary w-[62%] rounded-full" />
              </div>
              <span className="text-[10px] text-accent-secondary font-medium">Flow Sensor Telemetry</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[10px]">
            <div className="p-2 rounded-sm bg-surface-soft border border-border flex items-center justify-between">
              <span className="text-muted-foreground">SPRINT TYPE:</span>
              <span className="font-semibold text-foreground">Rapid Hackathon</span>
            </div>
            <div className="p-2 rounded-sm bg-surface-soft border border-border flex items-center justify-between">
              <span className="text-muted-foreground">ARCHITECTURE:</span>
              <span className="font-semibold text-foreground">Sensor &rarr; UI Model</span>
            </div>
          </div>
        </div>
      );
  }
};
