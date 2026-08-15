import React from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import { SiteShell } from '@/components/layout/SiteShell';
import { Section } from '@/components/layout/Section';
import { HeroSection } from '@/components/sections/HeroSection';
import { IntroSection } from '@/components/intro/IntroSection';
import { JourneySection } from '@/components/journey/JourneySection';
import {
  ProjectsSection,
  AboutSection,
  SkillsSection,
  ExplorationSection,
  ContactSection,
} from '@/components/sections';
import { CharacterSection } from '@/components/sections/CharacterSection';
import { StaggerContainer, StaggerItem, TextReveal, HoverCard } from '@/components/motion';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { useTheme } from '@/hooks/useTheme';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Sparkles, Eye, Layers, Palette, Terminal, Compass } from 'lucide-react';

const PortfolioShellView: React.FC = () => {
  const { theme, resolvedTheme } = useTheme();
  const prefersReducedMotion = useReducedMotion();

  return (
    <SiteShell>
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. INTRO / CURRENT IDENTITY SECTION */}
      <IntroSection />

      {/* 3. JOURNEY / EVOLUTION SECTION */}
      <JourneySection />

      {/* 4. SYSTEM STATUS & DESIGN TOKEN VERIFICATION BAR */}
      <Section id="foundation-status" containerSize="xl" className="py-8 bg-surface/30 border-y border-border/60">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
          <div className="flex flex-col gap-1 p-3 rounded-md bg-card border border-border">
            <span className="text-muted-foreground uppercase text-[10px]">Theme Engine</span>
            <span className="font-semibold text-foreground capitalize flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-accent inline-block" />
              {theme} ({resolvedTheme})
            </span>
          </div>

          <div className="flex flex-col gap-1 p-3 rounded-md bg-card border border-border">
            <span className="text-muted-foreground uppercase text-[10px]">Reduced Motion</span>
            <span className="font-semibold text-foreground">
              {prefersReducedMotion ? 'Active (Disabled Anim)' : 'Standard (Smooth 60fps)'}
            </span>
          </div>

          <div className="flex flex-col gap-1 p-3 rounded-md bg-card border border-border">
            <span className="text-muted-foreground uppercase text-[10px]">Narrative Flow</span>
            <span className="font-semibold text-foreground flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-accent inline-block" />
              Hero &rarr; Intro &rarr; Journey
            </span>
          </div>

          <div className="flex flex-col gap-1 p-3 rounded-md bg-card border border-border">
            <span className="text-muted-foreground uppercase text-[10px]">Stages Verified</span>
            <span className="font-semibold text-foreground flex items-center gap-1.5 text-emerald-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
              6 Evolution Stages
            </span>
          </div>
        </div>
      </Section>

      {/* 5. WORK / PROJECTS SECTION PLACEHOLDER */}
      <ProjectsSection />

      {/* 6. ABOUT SECTION PLACEHOLDER */}
      <AboutSection />

      {/* 7. CHARACTER SUBSYSTEM FOUNDATION */}
      <CharacterSection />

      {/* 8. DESIGN TOKENS & TYPOGRAPHY SYSTEM SPEC */}
      <Section
        id="tokens-spec"
        eyebrow="Foundation Audit / Tokens & Typo"
        title="Editorial Typography & Surface Tokens"
        description="Every color, typeface, border, and elevation is centralized into semantic CSS variables for instant global customization."
        hasDivider
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Typography Hierarchy */}
          <div className="p-6 sm:p-8 rounded-xl border border-border bg-card flex flex-col gap-6">
            <div className="flex items-center gap-2 pb-4 border-b border-border text-xs font-mono text-muted-foreground uppercase tracking-wider">
              <Terminal className="w-4 h-4 text-accent" />
              <span>Typography Hierarchy Test</span>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <span className="text-[11px] font-mono text-muted-foreground block mb-1">Display Headings (Syne / Plus Jakarta Sans)</span>
                <TextReveal text="Precision Systems & High Polish." className="text-2xl sm:text-3xl font-display font-bold text-foreground" />
              </div>

              <div>
                <span className="text-[11px] font-mono text-muted-foreground block mb-1">Section Display (H2)</span>
                <h3 className="section-display text-foreground font-semibold">
                  Architectural Consistency
                </h3>
              </div>

              <div>
                <span className="text-[11px] font-mono text-muted-foreground block mb-1">Editorial Lead / Body</span>
                <p className="editorial-lead text-muted-foreground">
                  Carefully proportioned body copy designed for crisp legibility across both dark technical canvases and bright editorial workspaces.
                </p>
              </div>

              <div>
                <span className="text-[11px] font-mono text-muted-foreground block mb-1">Mono System Code Tokens (JetBrains Mono)</span>
                <div className="bg-surface p-3 rounded-md font-mono text-xs text-foreground border border-border">
                  <code>const stack = ["React", "TypeScript", "Tailwind", "Framer Motion"];</code>
                </div>
              </div>
            </div>
          </div>

          {/* Color & Elevation Token Palette */}
          <div className="p-6 sm:p-8 rounded-xl border border-border bg-card flex flex-col gap-6">
            <div className="flex items-center gap-2 pb-4 border-b border-border text-xs font-mono text-muted-foreground uppercase tracking-wider">
              <Palette className="w-4 h-4 text-accent" />
              <span>Color & Surface Token Matrix</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-lg bg-background border border-border flex flex-col gap-1">
                <span className="text-xs font-semibold text-foreground">Background</span>
                <span className="text-[10px] font-mono text-muted-foreground">var(--background)</span>
              </div>

              <div className="p-4 rounded-lg bg-card border border-border flex flex-col gap-1 shadow-sm">
                <span className="text-xs font-semibold text-card-foreground">Card / Panel</span>
                <span className="text-[10px] font-mono text-muted-foreground">var(--card)</span>
              </div>

              <div className="p-4 rounded-lg bg-surface border border-border flex flex-col gap-1">
                <span className="text-xs font-semibold text-surface-foreground">Surface / Container</span>
                <span className="text-[10px] font-mono text-muted-foreground">var(--surface)</span>
              </div>

              <div className="p-4 rounded-lg bg-accent text-accent-foreground flex flex-col gap-1 shadow-sm">
                <span className="text-xs font-semibold">Accent Core</span>
                <span className="text-[10px] font-mono opacity-80">var(--accent)</span>
              </div>
            </div>

            {/* UI Primitives Showcase */}
            <div className="pt-4 border-t border-border flex flex-col gap-3">
              <span className="text-[11px] font-mono text-muted-foreground uppercase">Interactive UI Primitives</span>
              <div className="flex flex-wrap gap-2.5 items-center">
                <Button variant="primary" size="sm" leftIcon={<Sparkles className="w-3.5 h-3.5" />}>
                  Primary Button
                </Button>
                <Button variant="secondary" size="sm">
                  Secondary
                </Button>
                <Button variant="outline" size="sm">
                  Outline
                </Button>
                <Badge variant="accent">Production Ready</Badge>
                <Badge variant="outline">Strict TS</Badge>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 9. MOTION FOUNDATION MATRIX */}
      <Section
        id="motion-primitives"
        eyebrow="Foundation Audit / Motion"
        title="Restrained Motion Primitives"
        description="Smooth, cubic-bezier choreographed transitions that automatically gracefully degrade when reduced motion is requested."
        hasDivider
      >
        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StaggerItem>
            <HoverCard className="p-6 rounded-xl border border-border bg-card h-full flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4">
                  <Eye className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Fade & Slide Reveals</h4>
                <p className="text-sm text-muted-foreground">
                  Viewport-triggered entrance animations with editorial damping curve [0.22, 1, 0.36, 1].
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/50 text-[11px] font-mono text-accent">
                FadeIn • SlideIn
              </div>
            </HoverCard>
          </StaggerItem>

          <StaggerItem>
            <HoverCard className="p-6 rounded-xl border border-border bg-card h-full flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Stagger Cascades</h4>
                <p className="text-sm text-muted-foreground">
                  Natural item sequence revelations without jarring visual jumps or high frame drops.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/50 text-[11px] font-mono text-accent">
                StaggerContainer • StaggerItem
              </div>
            </HoverCard>
          </StaggerItem>

          <StaggerItem>
            <HoverCard className="p-6 rounded-xl border border-border bg-card h-full flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Hover Micro-Physics</h4>
                <p className="text-sm text-muted-foreground">
                  Tactile spring response and elevation on pointer hover for responsive feedback.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/50 text-[11px] font-mono text-accent">
                HoverCard • Active Scale
              </div>
            </HoverCard>
          </StaggerItem>
        </StaggerContainer>
      </Section>

      {/* 10. SKILLS, EXPLORATION, CONTACT PLACEHOLDERS */}
      <SkillsSection />
      <ExplorationSection />
      <ContactSection />
    </SiteShell>
  );
};

export function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <PortfolioShellView />
    </ThemeProvider>
  );
}

export default App;
