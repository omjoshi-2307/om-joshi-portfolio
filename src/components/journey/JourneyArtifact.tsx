import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Bot, Gauge, Lock, Compass, Sparkles } from 'lucide-react';
import type { JourneyVisualType } from '@/types/journey';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

export interface JourneyArtifactProps {
  type: JourneyVisualType;
  title?: string;
  className?: string;
}

export const JourneyArtifact: React.FC<JourneyArtifactProps> = ({ type, className }) => {
  const prefersReduced = useReducedMotion();

  switch (type) {
    case 'code':
      // Milestone 01 Discovery: Early computing terminal + registers + logic architecture
      return (
        <div
          className={cn(
            'p-5 sm:p-6 rounded-xl border border-border bg-card font-mono text-xs shadow-subtle flex flex-col gap-4 overflow-hidden',
            className
          )}
        >
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between pb-3 border-b border-border text-[10px] text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-border-strong inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-border-strong inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-border-strong inline-block" />
              <span className="text-foreground font-semibold ml-2 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-muted-foreground" aria-hidden="true" />
                <span>discovery_core.cpp</span>
              </span>
            </div>
            <span className="px-2 py-0.5 rounded-sm bg-elevated border border-border text-[10px] font-semibold text-foreground">
              ASM_8086 • 16-BIT
            </span>
          </div>

          {/* Code Window with Syntax Highlighting */}
          <div className="p-3.5 rounded-md bg-surface-soft border border-border text-[11px] leading-relaxed font-mono space-y-1">
            <div className="text-muted-subtle">// First low-level computing experiments</div>
            <div>
              <span className="text-accent font-medium">#include</span>{' '}
              <span className="text-foreground/90">&lt;iostream&gt;</span>
            </div>
            <div>
              <span className="text-accent-secondary font-medium">int</span>{' '}
              <span className="text-foreground font-semibold">main</span>() &#123;
            </div>
            <div className="pl-4">
              <span className="text-muted-foreground">std::cout &lt;&lt;</span>{' '}
              <span className="text-foreground font-medium">"Hello, Hardware!\n"</span>;
            </div>
            <div className="pl-4">
              <span className="text-accent-depth font-medium">__asm__</span> (
              <span className="text-accent font-medium">"MOV AX, 0x01\n\t"</span>
              <span className="text-accent font-medium">"MOV BX, 0x04"</span>);
            </div>
            <div className="pl-4">
              <span className="text-accent-secondary font-medium">return</span> 0;
            </div>
            <div>&#125;</div>
          </div>

          {/* Register State Grid (Visualizing CPU memory architecture) */}
          <div className="grid grid-cols-4 gap-2 pt-1 text-[10px]">
            <div className="p-2 rounded-sm bg-elevated border border-border flex flex-col">
              <span className="text-muted-subtle">REG AX</span>
              <span className="font-bold text-foreground font-mono">0x0001</span>
            </div>
            <div className="p-2 rounded-sm bg-elevated border border-border flex flex-col">
              <span className="text-muted-subtle">REG BX</span>
              <span className="font-bold text-foreground font-mono">0x0004</span>
            </div>
            <div className="p-2 rounded-sm bg-elevated border border-border flex flex-col">
              <span className="text-muted-subtle">REG SP</span>
              <span className="font-bold text-foreground font-mono">0xFFFE</span>
            </div>
            <div className="p-2 rounded-sm bg-elevated border border-border flex flex-col">
              <span className="text-muted-subtle">CLOCK</span>
              <span className="font-bold text-accent font-mono">8.00 MHz</span>
            </div>
          </div>

          {/* Schematic Footnote */}
          <div className="pt-2 border-t border-border flex items-center justify-between text-[10px] text-muted-foreground">
            <span>LOGIC: Memory, Pointers, Registers & Web Basics</span>
            <span className="text-foreground font-medium">FOUNDATION</span>
          </div>
        </div>
      );

    case 'hardware':
      // Milestone 02 First Build: Conceptual Hardware Schematic
      return (
        <div
          className={cn(
            'p-5 sm:p-6 rounded-xl border border-border bg-card font-mono text-xs shadow-subtle flex flex-col gap-4 overflow-hidden',
            className
          )}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-border text-[10px] text-muted-foreground">
            <div className="flex items-center gap-2 text-foreground font-semibold">
              <Cpu className="w-3.5 h-3.5 text-accent-secondary" aria-hidden="true" />
              <span>HARDWARE SCHEMATIC // ARDUINO UNO</span>
            </div>
            <span className="px-2 py-0.5 rounded-sm bg-accent-secondary-soft text-accent-secondary border border-accent-secondary/20 text-[9px] font-semibold">
              CONCEPTUAL SCHEMATIC
            </span>
          </div>

          {/* Hardware Flow Diagram: Sensor -> Arduino -> Actuator */}
          <div className="grid grid-cols-3 gap-2.5 items-center my-1 text-[11px]">
            {/* Sensor Input */}
            <div className="p-3 rounded-md bg-elevated border border-border flex flex-col gap-1 text-center shadow-subtle">
              <span className="text-[9px] font-mono text-muted-foreground uppercase">TRIGGER SENSOR</span>
              <span className="font-bold text-foreground text-xs">ADC Input A0</span>
              <span className="text-[9px] text-accent-secondary">● Active Level</span>
            </div>

            {/* Central MCU Silhouette */}
            <div className="p-3.5 rounded-md bg-accent-secondary-soft border border-accent-secondary/30 flex flex-col items-center justify-center text-center gap-1 shadow-subtle">
              <span className="font-mono text-[9px] font-bold text-accent-secondary uppercase">
                ATMEGA328P
              </span>
              <span className="font-bold text-foreground text-xs font-mono">Arduino Core</span>
              <span className="text-[8px] text-muted-foreground font-mono">GPIO_07 CONTROL</span>
            </div>

            {/* Relay Actuator */}
            <div className="p-3 rounded-md bg-elevated border border-border flex flex-col gap-1 text-center shadow-subtle">
              <span className="text-[9px] font-mono text-muted-foreground uppercase">RELAY ACTUATION</span>
              <span className="font-bold text-foreground text-xs">Heating Element</span>
              <span className="text-[9px] text-accent">● Opto-Isolated</span>
            </div>
          </div>

          {/* Control Logic State Pipeline */}
          <div className="p-3 rounded-md bg-surface-soft border border-border flex items-center justify-between text-[10px]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse" />
              <span className="font-semibold text-foreground">DISCRETE CONTROL LOOP</span>
            </div>
            <span className="text-muted-foreground font-mono">INTERRUPT &rarr; TIMED HEAT &rarr; SAFE SHUTOFF</span>
          </div>

          {/* Clarification Label for Honesty */}
          <div className="pt-2 border-t border-border flex items-center justify-between text-[10px] text-muted-subtle">
            <span>First physical software experiment</span>
            <span>Arduino UNO • Embedded C++</span>
          </div>
        </div>
      );

    case 'robotics':
      // Milestone 03 WALL-E: High-Impact Robotics & Ultrasonic Radar Visual
      return (
        <div
          className={cn(
            'p-5 sm:p-6 rounded-xl border border-border bg-card font-mono text-xs shadow-subtle flex flex-col gap-4 overflow-hidden',
            className
          )}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-border text-[10px] text-muted-foreground">
            <div className="flex items-center gap-2 text-foreground font-semibold">
              <Bot className="w-4 h-4 text-accent-secondary" aria-hidden="true" />
              <span>WALL-E // AUTONOMOUS KINEMATICS</span>
            </div>
            <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-sm bg-signal-soft text-signal border border-signal/20 text-[9px] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-signal" aria-hidden="true" />
              OBSTACLE AVOIDANCE LOOP
            </span>
          </div>

          {/* Visual Radar & Chassis Graphic Container */}
          <div className="relative h-44 rounded-lg bg-surface-soft border border-border flex items-center justify-center overflow-hidden">
            {/* Concentric Sonar Distance Arcs */}
            <div aria-hidden="true" className="absolute w-24 h-24 rounded-full border border-dashed border-accent-depth/30" />
            <div aria-hidden="true" className="absolute w-44 h-44 rounded-full border border-dashed border-accent-secondary/20" />
            <div aria-hidden="true" className="absolute w-64 h-64 rounded-full border border-dashed border-accent-secondary/10" />

            {/* Sweep Sonar Beam */}
            <motion.div
              aria-hidden="true"
              animate={prefersReduced ? {} : { rotate: [-42, 42, -42] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: 'bottom center' }}
              className="absolute bottom-4 w-1 h-32 bg-gradient-to-t from-accent-secondary via-accent-secondary/40 to-transparent"
            />

            {/* Obstacle Target Lock Marker */}
            <div className="absolute top-4 right-8 flex items-center gap-1.5 bg-card/90 backdrop-blur-sm px-2.5 py-1 rounded-sm border border-border text-[10px] text-foreground shadow-subtle">
              <span className="w-1.5 h-1.5 rounded-full bg-signal" aria-hidden="true" />
              <span className="font-bold">OBSTACLE: 18.4 cm</span>
            </div>

            {/* Wheeled Robot Chassis Diagram Vector */}
            <div className="absolute bottom-4 flex flex-col items-center">
              <div className="w-20 h-10 rounded-t-md bg-elevated border border-border flex items-center justify-around px-1 text-[8px] font-mono text-muted-foreground shadow-subtle">
                <span className="text-accent-secondary font-bold">L_MTR</span>
                <span className="text-[7px] text-foreground font-semibold">HC-SR04</span>
                <span className="text-accent font-bold">R_MTR</span>
              </div>
              <div className="w-24 h-3 bg-border rounded-full flex justify-between px-1">
                <span className="w-3 h-2 bg-foreground rounded-xs" />
                <span className="w-3 h-2 bg-foreground rounded-xs" />
              </div>
            </div>

            {/* Real-Time Telemetry Coordinates */}
            <div className="absolute top-4 left-4 text-[9px] font-mono text-muted-subtle flex flex-col gap-0.5">
              <span>ECHO_TIME: 1070 µs</span>
              <span>ANGLE: +28°</span>
            </div>
          </div>

          {/* Motor Actuation Telemetry Footer */}
          <div className="grid grid-cols-3 gap-2 text-[10px]">
            <div className="p-2 rounded-sm bg-elevated border border-border flex flex-col">
              <span className="text-muted-subtle">LEFT MOTOR</span>
              <span className="font-bold text-foreground">PWM 180 (FWD)</span>
            </div>
            <div className="p-2 rounded-sm bg-elevated border border-border flex flex-col">
              <span className="text-muted-subtle">RIGHT MOTOR</span>
              <span className="font-bold text-accent">PWM 0 (BRAKE)</span>
            </div>
            <div className="p-2 rounded-sm bg-elevated border border-border flex flex-col">
              <span className="text-muted-subtle">KINEMATICS</span>
              <span className="font-bold text-accent-secondary">STEER RIGHT</span>
            </div>
          </div>
        </div>
      );

    case 'hackathon':
      // Milestone 04 Hackathon: JalSanchaee Water Telemetry & Rapid Iteration
      return (
        <div
          className={cn(
            'p-5 sm:p-6 rounded-xl border border-border bg-card font-mono text-xs shadow-subtle flex flex-col gap-4 overflow-hidden',
            className
          )}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-border text-[10px] text-muted-foreground">
            <div className="flex items-center gap-2 text-foreground font-semibold">
              <Gauge className="w-4 h-4 text-accent" aria-hidden="true" />
              <span>JALSANCHAEE // IOT WATER TELEMETRY</span>
            </div>
            <span className="px-2 py-0.5 rounded-sm bg-accent-soft text-accent border border-accent/20 text-[9px] font-semibold">
              TECHATHON 3.0 SPRINT
            </span>
          </div>

          {/* Water Conservation Flow Architecture */}
          <div className="grid grid-cols-2 gap-3 my-1">
            <div className="p-3.5 rounded-md bg-elevated border border-border flex flex-col gap-1.5 shadow-subtle">
              <span className="text-[9px] font-mono text-muted-foreground uppercase">NODE 01: RESERVOIR</span>
              <div className="flex items-baseline justify-between">
                <span className="text-base font-bold text-foreground font-mono">84.2%</span>
                <span className="text-[9px] text-accent font-semibold">OPTIMAL LEVEL</span>
              </div>
              <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
                <div className="h-full bg-accent-depth w-[84%] rounded-full" />
              </div>
            </div>

            <div className="p-3.5 rounded-md bg-elevated border border-border flex flex-col gap-1.5 shadow-subtle">
              <span className="text-[9px] font-mono text-muted-foreground uppercase">NODE 02: FLOW METRICS</span>
              <div className="flex items-baseline justify-between">
                <span className="text-base font-bold text-foreground font-mono">12.4 L/min</span>
                <span className="text-[9px] text-accent-secondary font-semibold">CONSUMPTION</span>
              </div>
              <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
                <div className="h-full bg-accent-secondary w-[62%] rounded-full" />
              </div>
            </div>
          </div>

          {/* Hackathon Constraint & Scope Discipline Box */}
          <div className="p-3 rounded-md bg-surface-soft border border-border flex items-center justify-between text-[10px]">
            <div className="flex flex-col">
              <span className="text-muted-subtle uppercase text-[8px]">SPRINT CONSTRAINTS</span>
              <span className="font-semibold text-foreground">Rapid Scope Control & IoT Modeling</span>
            </div>
            <span className="px-2 py-1 rounded-sm bg-elevated border border-border text-[9px] text-accent font-mono font-bold">
              MULTI-HOUR HACK
            </span>
          </div>

          {/* Retrospective Insight */}
          <div className="pt-2 border-t border-border flex items-center justify-between text-[10px] text-muted-subtle">
            <span>Collaborative rapid prototyping</span>
            <span>AISSMS Techathon 3.0</span>
          </div>
        </div>
      );

    case 'product':
      // Milestone 05 SureD: Escrow Flow (Tenant -> Soroban Vault -> Landlord)
      return (
        <div
          className={cn(
            'p-5 sm:p-6 rounded-xl border border-border bg-card font-mono text-xs shadow-subtle flex flex-col gap-4 overflow-hidden',
            className
          )}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-border text-[10px] text-muted-foreground">
            <div className="flex items-center gap-2 text-foreground font-semibold">
              <Lock className="w-4 h-4 text-accent" aria-hidden="true" />
              <span>SURED // SMART ESCROW FLOW</span>
            </div>
            <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-sm bg-accent-soft text-accent border border-accent/20 text-[9px] font-semibold">
              <Sparkles className="w-3 h-3 text-accent" aria-hidden="true" />
              STELLAR BUILD STATION
            </span>
          </div>

          {/* Interactive Escrow State Visualizer */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 items-center my-1">
            {/* Party A (Tenant) */}
            <div className="p-3 rounded-md bg-elevated border border-border flex flex-col gap-1 text-left shadow-subtle">
              <span className="text-[9px] font-mono text-muted-foreground uppercase">PARTY A // TENANT</span>
              <span className="font-bold text-foreground text-xs">Deposit Locked</span>
              <span className="text-[9px] text-accent font-mono">Freighter Signed</span>
            </div>

            {/* Soroban Escrow Vault */}
            <div className="p-3.5 rounded-md bg-accent-soft border border-accent/30 flex flex-col items-center justify-center text-center gap-1 shadow-subtle">
              <div className="w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center">
                <Lock className="w-3 h-3" />
              </div>
              <span className="font-mono text-[9px] font-bold text-accent uppercase">
                SOROBAN ESCROW
              </span>
              <span className="font-mono font-bold text-foreground text-xs">
                2,500.00 XLM
              </span>
            </div>

            {/* Party B (Landlord) */}
            <div className="p-3 rounded-md bg-elevated border border-border flex flex-col gap-1 text-left shadow-subtle">
              <span className="text-[9px] font-mono text-muted-foreground uppercase">PARTY B // LANDLORD</span>
              <span className="font-bold text-foreground text-xs">Claim Release</span>
              <span className="text-[9px] text-accent-secondary font-mono">Mutual Approval</span>
            </div>
          </div>

          {/* Smart Contract State Meta */}
          <div className="p-3 rounded-md bg-surface-soft border border-border flex items-center justify-between text-[10px]">
            <span className="text-muted-foreground">STELLAR TESTNET PROTOCOL</span>
            <span className="font-bold text-foreground font-mono">STATUS: ESCROW_ACTIVE</span>
          </div>

          {/* Stack Summary */}
          <div className="pt-2 border-t border-border flex items-center justify-between text-[10px] text-muted-subtle">
            <span>React • TypeScript • Tailwind • Soroban</span>
            <span className="text-accent font-semibold">SURE-D</span>
          </div>
        </div>
      );

    case 'exploration':
      // Milestone 06 Now: Open Frontier Constellation
      return (
        <div
          className={cn(
            'p-5 sm:p-6 rounded-xl border border-border bg-card font-mono text-xs shadow-subtle flex flex-col gap-4 overflow-hidden',
            className
          )}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-border text-[10px] text-muted-foreground">
            <div className="flex items-center gap-2 text-foreground font-semibold">
              <Compass className="w-4 h-4 text-accent" aria-hidden="true" />
              <span>FRONTIER MAP // ACTIVE RESEARCH</span>
            </div>
            <span className="flex items-center gap-1.5 text-accent font-semibold text-[9px]">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping inline-block" />
              ACTIVE LAB
            </span>
          </div>

          {/* 4 Pillars Constellation Grid */}
          <div className="grid grid-cols-2 gap-2 text-[10px] my-1">
            <div className="p-3 rounded-sm bg-elevated border border-border flex flex-col gap-1">
              <span className="text-accent font-bold">01 / Full-Stack Web</span>
              <span className="text-muted-foreground text-[9px]">React, TypeScript, Node & Scalable UI</span>
            </div>
            <div className="p-3 rounded-sm bg-elevated border border-border flex flex-col gap-1">
              <span className="text-accent-secondary font-bold">02 / Web3 Protocols</span>
              <span className="text-muted-foreground text-[9px]">Stellar, Soroban & Escrow Logic</span>
            </div>
            <div className="p-3 rounded-sm bg-elevated border border-border flex flex-col gap-1">
              <span className="text-accent font-bold">03 / AI Workflows</span>
              <span className="text-muted-foreground text-[9px]">Local LLMs, Agentic Tools & Runtimes</span>
            </div>
            <div className="p-3 rounded-sm bg-elevated border border-border flex flex-col gap-1">
              <span className="text-accent-depth font-bold">04 / Cybersecurity</span>
              <span className="text-muted-foreground text-[9px]">AppSec, OWASP & Secure Systems</span>
            </div>
          </div>

          {/* Continuous Evolution Footnote */}
          <div className="pt-2 border-t border-border flex items-center justify-between text-[10px] text-muted-subtle">
            <span>Continuous hands-on experimentation</span>
            <span className="text-foreground font-medium">B.Tech IT • Pune</span>
          </div>
        </div>
      );
  }
};
