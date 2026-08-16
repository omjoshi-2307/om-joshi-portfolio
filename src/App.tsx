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
import { ProjectCaseStudyPage } from '@/pages/ProjectCaseStudyPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { CASE_STUDIES } from '@/data/caseStudies';
import { useRouter } from '@/hooks/useRouter';
import { usePageMetadata } from '@/hooks/usePageMetadata';

const PortfolioShellView: React.FC = () => {
  const { currentPath, navigate } = useRouter();

  // Route: /work/:slug Case Studies
  if (currentPath.startsWith('/work/')) {
    const slugKey = currentPath.replace('/work/', '').toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Map normalized slugs: 'sured', 'walle', 'jalsanchaeenavachar' -> 'jalsanchaee'
    let caseStudyKey = slugKey;
    if (slugKey.includes('jalsanchaee') || slugKey.includes('navachar')) {
      caseStudyKey = 'jalsanchaee';
    } else if (slugKey.includes('wall') || slugKey.includes('walle')) {
      caseStudyKey = 'walle';
    } else if (slugKey.includes('sure') || slugKey.includes('sured')) {
      caseStudyKey = 'sured';
    }

    const caseStudy = CASE_STUDIES[caseStudyKey];

    if (caseStudy) {
      return (
        <SiteShell>
          <ProjectCaseStudyPage
            caseStudy={caseStudy}
            onNavigate={(to) => navigate(to)}
          />
        </SiteShell>
      );
    }

    return (
      <SiteShell>
        <NotFoundPage onGoHome={() => navigate('/')} />
      </SiteShell>
    );
  }

  // Set default homepage metadata
  return <HomepageView />;
};

const HomepageView: React.FC = () => {
  usePageMetadata();

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
