import React from 'react';
import { motion } from 'framer-motion';
import { Lock, ShieldCheck, Bot, Gauge, ArrowRight } from 'lucide-react';
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
        <div className={cn('relative p-6 sm:p-8 rounded-xl border border-border bg-card overflow-hidden shadow-subtle', className)}>
          {/* Subtle Background Grid */}
          <div aria-hidden="true" className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:2rem_2rem]" />

          {/* Top Bar Spec */}
          <div className="relative flex items-center justify-between pb-4 mb-6 border-b border-border text-xs font-mono">
            <div className="flex items-center gap-2 text-foreground font-semibold">
              <Lock className="w-4 h-4 text-accent" aria-hidden="true" />
              <span>SURED // STELLAR_ESCROW_CORE</span>
            </div>
            <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm bg-accent-soft text-accent border border-accent/20 text-[10px] font-semibold">
              <ShieldCheck className="w-3 h-3 text-accent" aria-hidden="true" />
              <span>SMART_CONTRACT_LOCKED</span>
            </span>
          </div>

          {/* Core Escrow Flow Visualization */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            {/* 1. Tenant Party Card */}
            <div className="p-4 rounded-md bg-elevated border border-border flex flex-col gap-2 shadow-subtle">
              <span className="text-[10px] font-mono text-muted-foreground uppercase">PARTY_A // TENANT</span>
              <span className="text-sm font-bold text-foreground font-display">Deposit Depositor</span>
              <div className="mt-2 text-[10px] font-mono text-accent-secondary flex items-center gap-1">
                <span>● Freighter Signed</span>
              </div>
            </div>

            {/* 2. Central Escrow Vault (Middle Column) */}
            <div className="relative p-5 rounded-md bg-accent-soft border border-accent/30 flex flex-col items-center justify-center text-center gap-2 shadow-subtle">
              <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-subtle" aria-hidden="true">
                <Lock className="w-4 h-4" />
              </div>
              <span className="font-mono text-[11px] font-bold text-accent uppercase tracking-wider">
                SOROBAN ESCROW VAULT
              </span>
              <span className="font-mono text-lg font-black text-foreground">
                2,500.00 XLM
              </span>
              <span className="text-[9px] font-mono text-muted-foreground">
                Release upon mutual verification
              </span>
            </div>

            {/* 3. Landlord Party Card */}
            <div className="p-4 rounded-md bg-elevated border border-border flex flex-col gap-2 shadow-subtle">
              <span className="text-[10px] font-mono text-muted-foreground uppercase">PARTY_B // LANDLORD</span>
              <span className="text-sm font-bold text-foreground font-display">Beneficiary</span>
              <div className="mt-2 text-[10px] font-mono text-accent flex items-center gap-1">
                <span>● Claim Ready</span>
              </div>
            </div>
          </div>

          {/* Bottom Telemetry Bar */}
          <div className="mt-6 pt-4 border-t border-border flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono text-muted-foreground">
            <div className="flex items-center gap-4">
              <span>NETWORK: STELLAR TESTNET</span>
              <span>WALLET: FREIGHTER</span>
            </div>
            <div className="flex items-center gap-1.5 text-foreground">
              <span>Soroban Contract Execution</span>
              <ArrowRight className="w-3 h-3 text-accent" aria-hidden="true" />
            </div>
          </div>
        </div>
      );

    case 'walle':
      return (
        <div className={cn('p-6 rounded-xl border border-border bg-card font-mono text-xs shadow-subtle', className)}>
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-border text-[10px] text-muted-foreground">
            <div className="flex items-center gap-2 text-foreground font-semibold">
              <Bot className="w-4 h-4 text-accent-secondary" aria-hidden="true" />
              <span>WALL-E // KINEMATICS & SENSORS</span>
            </div>
            <span className="text-accent-secondary flex items-center gap-1.5 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-signal inline-block" aria-hidden="true" />
              ACTIVE SENSOR SWEEP
            </span>
          </div>

          {/* Radar Obstacle Detection Visualizer */}
          <div className="relative h-36 rounded-md bg-elevated border border-border flex items-center justify-center overflow-hidden">
            {/* Concentric distance rings */}
            <div aria-hidden="true" className="absolute w-24 h-24 rounded-full border border-dashed border-accent-depth/30" />
            <div aria-hidden="true" className="absolute w-48 h-48 rounded-full border border-dashed border-accent-secondary/20" />
            
            {/* Rotating sonar ray */}
            <motion.div
              aria-hidden="true"
              animate={prefersReduced ? {} : { rotate: [-40, 40, -40] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: 'bottom center' }}
              className="absolute bottom-4 w-0.5 h-24 bg-gradient-to-t from-accent-secondary to-transparent"
            />

            <div className="absolute top-3 left-3 bg-card px-2 py-0.5 rounded-sm border border-border text-[10px] text-foreground shadow-subtle">
              HC-SR04 RANGE: 18.4cm
            </div>

            <div className="absolute bottom-3 font-mono text-[10px] text-muted-foreground">
              EVASION PROTOCOL: STEER RIGHT (PWM 180)
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-[11px] text-muted-foreground">
            <span>ARDUINO UNO</span>
            <span>L298N DUAL MOTOR DRIVE</span>
          </div>
        </div>
      );

    case 'jalsanchaee':
      return (
        <div className={cn('p-6 rounded-xl border border-border bg-card font-mono text-xs shadow-subtle', className)}>
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-border text-[10px] text-muted-foreground">
            <div className="flex items-center gap-2 text-foreground font-semibold">
              <Gauge className="w-4 h-4 text-accent-depth" aria-hidden="true" />
              <span>JALSANCHAEE // IOT ARCHITECTURE</span>
            </div>
            <span className="text-accent-secondary font-semibold">TECHATHON 3.0 SPRINT</span>
          </div>

          {/* IoT Flow Diagram */}
          <div className="grid grid-cols-2 gap-3 my-2">
            <div className="p-3 rounded-md bg-elevated border border-border flex flex-col gap-1">
              <span className="text-muted-foreground text-[10px]">WATER_SENSING</span>
              <span className="font-semibold text-foreground font-display">Flow & Level Monitor</span>
              <span className="text-accent-depth text-[10px]">Telemetry Stream</span>
            </div>

            <div className="p-3 rounded-md bg-elevated border border-border flex flex-col gap-1">
              <span className="text-muted-foreground text-[10px]">MONITORING_UI</span>
              <span className="font-semibold text-foreground font-display">Conservation Dashboard</span>
              <span className="text-accent-secondary text-[10px]">Client Interface</span>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-[11px] text-muted-foreground">
            <span>RAPID SPRINT</span>
            <span>TEAM COLLABORATION</span>
          </div>
        </div>
      );
  }
};
