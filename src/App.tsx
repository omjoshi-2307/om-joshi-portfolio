import React from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import { SiteShell } from '@/components/layout/SiteShell';
import { HeroSection } from '@/components/sections/HeroSection';
import { IntroSection } from '@/components/intro/IntroSection';
import { JourneySection } from '@/components/journey/JourneySection';
import { ProjectsSection } from '@/components/projects/ProjectsSection';
import { ToolboxSection } from '@/components/toolbox/ToolboxSection';
import { ExplorationSection } from '@/components/exploration/ExplorationSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ContactSection } from '@/components/sections/ContactSection';

const PortfolioShellView: React.FC = () => {
  return (
    <SiteShell>
      {/* 1. HERO */}
      <HeroSection />

      {/* 2. INTRO / CURRENT IDENTITY */}
      <IntroSection />

      {/* 3. JOURNEY / EVOLUTION */}
      <JourneySection />

      {/* 4. SELECTED WORK / PROJECTS */}
      <ProjectsSection />

      {/* 5. TECHNICAL TOOLBOX */}
      <ToolboxSection />

      {/* 6. CURRENTLY EXPLORING */}
      <ExplorationSection />

      {/* 7. ABOUT / PERSONAL IDENTITY */}
      <AboutSection />

      {/* 8. CONTACT */}
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
