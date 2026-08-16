import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Bot, Gauge, Lock, Compass } from 'lucide-react';
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
      // Milestone 01 Discovery: Mostly monochrome neutral
      return (
        <div className={cn('p-5 rounded-xl border border-border bg-card font-mono text-xs shadow-subtle', className)}>
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-border text-muted-foreground text-[10px]">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-muted-foreground" />
              <span>discovery.cpp // ASM_8086</span>
            </div>
            <span className="text-muted-foreground font-semibold">COMPILED</span>
          </div>

          {/* Code Body */}
          <div className="space-y-1.5 text-[11px] text-muted-foreground leading-relaxed">
            <p><span className="text-foreground font-medium">#include</span> <span className="text-foreground/90">&lt;iostream&gt;</span></p>
            <p><span className="text-foreground font-medium">int</span> <span className="text-foreground">main</span>() &#123;</p>
            <p className="pl-4 text-muted-subtle">// Understanding logic, memory & registers</p>
            <p className="pl-4"><span className="text-foreground/80">std::cout</span> &lt;&lt; <span className="text-muted-foreground">"Hello, Hardware!\n"</span>;</p>
            <p className="pl-4"><span className="text-foreground font-medium">__asm__</span>(<span className="text-muted-foreground">"MOV AX, 0x01"</span>);</p>
            <p className="pl-4"><span className="text-foreground font-medium">return</span> 0;</p>
            <p>&#125;</p>
          </div>

          <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-[10px] text-muted-foreground">
            <span>RAM: 64KB</span>
            <span>CLOCK: 8MHz</span>
          </div>
        </div>
      );

    case 'hardware':
      // Milestone 02 First Build: Tiny Lavender accent
      return (
        <div className={cn('p-5 rounded-xl border border-border bg-card font-mono text-xs shadow-subtle', className)}>
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-border text-muted-foreground text-[10px]">
            <div className="flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-accent-secondary" />
              <span>ARDUINO_UNO // HARDWARE SCHEMATIC</span>
            </div>
            <span className="text-accent-secondary font-semibold">PINOUT_ACTIVE</span>
          </div>

          {/* Schematic Diagram Grid */}
          <div className="grid grid-cols-2 gap-3 my-2 text-[11px]">
            <div className="p-3 rounded-md bg-elevated border border-border flex flex-col gap-1">
              <span className="text-muted-foreground text-[10px]">DISPOSAL_UNIT</span>
              <span className="font-semibold text-foreground">Relay Actuator</span>
              <span className="text-accent-secondary text-[10px]">● GPIO_07 (HIGH)</span>
            </div>

            <div className="p-3 rounded-md bg-elevated border border-border flex flex-col gap-1">
              <span className="text-muted-foreground text-[10px]">SENSOR_INPUT</span>
              <span className="font-semibold text-foreground">Trigger Detection</span>
              <span className="text-accent-secondary text-[10px]">● ADC_PIN A0</span>
            </div>
          </div>

          <div className="mt-3 p-2.5 rounded-sm bg-elevated border border-border text-[10px] text-muted-foreground">
            <span>LOGIC: Discrete timer loop • Hardware interrupt routine</span>
          </div>
        </div>
      );

    case 'robotics':
      // Milestone 03 WALL-E: Lavender + Deep Purple depth + Signal Yellow radar
      return (
        <div className={cn('p-5 rounded-xl border border-border bg-card font-mono text-xs shadow-subtle overflow-hidden', className)}>
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-border text-muted-foreground text-[10px]">
            <div className="flex items-center gap-2">
              <Bot className="w-3.5 h-3.5 text-accent-secondary" />
              <span>WALL-E // RADAR TELEMETRY</span>
            </div>
            <span className="text-accent-secondary flex items-center gap-1.5 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-signal inline-block" />
              AUTONOMOUS
            </span>
          </div>

          {/* Ultrasonic Radar Sweep Visualizer */}
          <div className="relative h-28 my-2 rounded-md bg-elevated border border-border flex items-center justify-center overflow-hidden">
            {/* Radar concentric arcs in Deep Purple / Lavender */}
            <div className="absolute w-20 h-20 rounded-full border border-dashed border-accent-depth/40" />
            <div className="absolute w-36 h-36 rounded-full border border-dashed border-accent-secondary/30" />
            
            {/* Sensor Beam sweep */}
            <motion.div
              animate={prefersReduced ? {} : { rotate: [ -45, 45, -45 ] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: 'bottom center' }}
              className="absolute bottom-3 w-0.5 h-20 bg-gradient-to-t from-accent-secondary to-transparent"
            />

            {/* Target indicator */}
            <div className="absolute top-3 right-8 flex items-center gap-1 bg-card px-2 py-0.5 rounded-sm border border-border text-[9px] text-foreground shadow-subtle">
              <span className="w-1 h-1 rounded-full bg-signal inline-block" />
              <span>OBSTACLE: 18.4cm</span>
            </div>

            <div className="absolute bottom-2 font-mono text-[10px] text-muted-foreground">
              HC-SR04 • Dual DC Motor Drive
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between text-[10px] text-muted-foreground">
            <span>MOTOR_L: PWM 180</span>
            <span>MOTOR_R: PWM 180</span>
            <span>ACTION: EVADE</span>
          </div>
        </div>
      );

    case 'hackathon':
      // Milestone 04 Hackathon: Electric Pink appears
      return (
        <div className={cn('p-5 rounded-xl border border-border bg-card font-mono text-xs shadow-subtle', className)}>
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-border text-muted-foreground text-[10px]">
            <div className="flex items-center gap-2">
              <Gauge className="w-3.5 h-3.5 text-accent" />
              <span>AISSMS_TECHATHON_3.0 // SPRINT</span>
            </div>
            <span className="text-accent font-semibold">RAPID_PROTOTYPE</span>
          </div>

          {/* Hackathon constraint & telemetry matrix */}
          <div className="space-y-2.5 my-2">
            <div className="p-3 rounded-md bg-elevated border border-border flex items-center justify-between">
              <div>
                <span className="text-[10px] text-muted-foreground block">DOMAIN</span>
                <span className="text-xs font-semibold text-foreground">Water Conservation & Monitoring</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-sm bg-accent-soft text-accent font-medium">IoT Logic</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[10px]">
              <div className="p-2 rounded-sm bg-elevated border border-border">
                <span className="text-muted-foreground block">TEAM SYNC</span>
                <span className="text-foreground font-semibold">Continuous Sprint</span>
              </div>
              <div className="p-2 rounded-sm bg-elevated border border-border">
                <span className="text-muted-foreground block">TIME CONSTRAINT</span>
                <span className="text-foreground font-semibold">Multi-Hour Hack</span>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2.5 border-t border-border text-[10px] text-muted-foreground">
            <span>LESSON: Architecture discipline & scope management under pressure.</span>
          </div>
        </div>
      );

    case 'product':
      // Milestone 05 SureD: Strongest Electric Pink / Lavender treatment
      return (
        <div className={cn('p-5 rounded-xl border border-border bg-card font-mono text-xs shadow-subtle', className)}>
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-border text-muted-foreground text-[10px]">
            <div className="flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-accent" />
              <span>SURED // STELLAR_ESCROW_CONTRACT</span>
            </div>
            <span className="text-accent-secondary font-semibold">FREIGHTER_CONNECTED</span>
          </div>

          {/* Product UI / Smart Contract State Mock */}
          <div className="p-3.5 rounded-md bg-elevated border border-border space-y-2.5 my-2">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-muted-foreground">DEPOSIT_AMOUNT</span>
              <span className="font-bold text-foreground">2,500.00 XLM</span>
            </div>

            <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
              <div className="h-full bg-accent w-3/4 rounded-full" />
            </div>

            <div className="flex items-center justify-between text-[10px] text-muted-foreground">
              <span>TENANT &harr; LANDLORD</span>
              <span className="text-accent font-semibold">ESCROW_LOCKED</span>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between text-[10px] text-muted-foreground">
            <span>SOROBAN / RUST</span>
            <span>REACT + TS CLIENT</span>
          </div>
        </div>
      );

    case 'exploration':
      // Milestone 06 Now: Pink + Deep Purple into neutral space
      return (
        <div className={cn('p-5 rounded-xl border border-border bg-card font-mono text-xs shadow-subtle', className)}>
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-border text-muted-foreground text-[10px]">
            <div className="flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-accent" />
              <span>FRONTIER_MATRIX // CURRENT_FOCUS</span>
            </div>
            <span className="text-accent flex items-center gap-1.5 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping inline-block" />
              ACTIVE LAB
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 my-2 text-[10px]">
            <div className="p-2.5 rounded-sm bg-elevated border border-border">
              <span className="text-accent font-semibold block">Full-Stack Web</span>
              <span className="text-muted-foreground">React, TypeScript, Node</span>
            </div>
            <div className="p-2.5 rounded-sm bg-elevated border border-border">
              <span className="text-accent-secondary font-semibold block">Web3 Protocols</span>
              <span className="text-muted-foreground">Stellar, Smart Contracts</span>
            </div>
            <div className="p-2.5 rounded-sm bg-elevated border border-border">
              <span className="text-accent font-semibold block">AI Tooling</span>
              <span className="text-muted-foreground">Agentic & LLM Systems</span>
            </div>
            <div className="p-2.5 rounded-sm bg-elevated border border-border">
              <span className="text-accent-depth font-semibold block">Cybersecurity</span>
              <span className="text-muted-foreground">Network & App Security</span>
            </div>
          </div>

          <div className="mt-3 pt-2.5 border-t border-border text-[10px] text-muted-foreground">
            <span>TRAJECTORY: Crafting durable, high-performance software.</span>
          </div>
        </div>
      );
  }
};
