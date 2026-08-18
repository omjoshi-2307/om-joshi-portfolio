import React, { Suspense, lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from '@/context/ThemeContext';
import { PointerProvider } from '@/context/PointerContext';
import { SiteShell } from '@/components/layout/SiteShell';
import { PageTransition } from '@/components/layout/PageTransition';
import { HeroSection } from '@/components/sections/HeroSection';
import { IntroSection } from '@/components/intro/IntroSection';
import { JourneySection } from '@/components/journey/JourneySection';
import { ProjectsSection } from '@/components/projects/ProjectsSection';
import { ToolboxSection } from '@/components/toolbox/ToolboxSection';
import { ExplorationSection } from '@/components/exploration/ExplorationSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { CASE_STUDIES } from '@/data/caseStudies';
import { useRouter } from '@/hooks/useRouter';
import { usePageMetadata } from '@/hooks/usePageMetadata';



// Route-level code splitting for case studies and fallback pages
const ProjectCaseStudyPage = lazy(() =>
  import('@/pages/ProjectCaseStudyPage').then((module) => ({
    default: module.ProjectCaseStudyPage,
  }))
);

const NotFoundPage = lazy(() =>
  import('@/pages/NotFoundPage').then((module) => ({
    default: module.NotFoundPage,
  }))
);

const CaseStudyLoadingFallback: React.FC = () => (
  <div className="min-h-[60vh] py-24 flex items-center justify-center bg-background">
    <div className="flex flex-col items-center gap-4">
      <div className="w-8 h-8 rounded-full border-2 border-accent border-t-transparent animate-spin" />
      <span className="font-mono text-xs text-muted-subtle tracking-widest uppercase">
        LOADING CASE STUDY...
      </span>
    </div>
  </div>
);

const PortfolioShellView: React.FC = () => {
  const { currentPath, navigate } = useRouter();

  const renderActiveView = () => {
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
          <PageTransition key={`casestudy-${caseStudy.id}`} routeKey={`casestudy-${caseStudy.id}`}>
            <Suspense fallback={<CaseStudyLoadingFallback />}>
              <ProjectCaseStudyPage
                caseStudy={caseStudy}
                onNavigate={(to) => navigate(to)}
              />
            </Suspense>
          </PageTransition>
        );
      }

      return (
        <PageTransition key="404" routeKey="404">
          <Suspense fallback={<CaseStudyLoadingFallback />}>
            <NotFoundPage onGoHome={() => navigate('/')} />
          </Suspense>
        </PageTransition>
      );
    }

    // Root / Homepage
    if (currentPath === '/' || currentPath === '' || currentPath.startsWith('/#')) {
      return (
        <PageTransition key="home" routeKey="home">
          <HomepageView />
        </PageTransition>
      );
    }

    // Fallback 404 for any other unrecognized route
    return (
      <PageTransition key="404" routeKey="404">
        <Suspense fallback={<CaseStudyLoadingFallback />}>
          <NotFoundPage onGoHome={() => navigate('/')} />
        </Suspense>
      </PageTransition>
    );
  };

  return (
    <SiteShell>
      <AnimatePresence mode="wait" initial={false}>
        {renderActiveView()}
      </AnimatePresence>
    </SiteShell>
  );
};

const HomepageView: React.FC = () => {
  usePageMetadata();

  return (
    <div className="flex flex-col">
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
    </div>
  );
};



export function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <PointerProvider>
        <PortfolioShellView />
      </PointerProvider>
    </ThemeProvider>
  );
}

export default App;
