import React, { useEffect } from 'react';
import { Container } from '@/components/layout/Container';
import { CaseStudyHero } from '@/components/casestudy/CaseStudyHero';
import { CaseStudyOverview } from '@/components/casestudy/CaseStudyOverview';
import { CaseStudyStorySection } from '@/components/casestudy/CaseStudyStorySection';
import { CaseStudyContributions } from '@/components/casestudy/CaseStudyContributions';
import { CaseStudyLearnings } from '@/components/casestudy/CaseStudyLearnings';
import { CaseStudyNav } from '@/components/casestudy/CaseStudyNav';
import { ProjectVisual } from '@/components/projects/ProjectVisual';
import { usePageMetadata } from '@/hooks/usePageMetadata';
import type { ProjectCaseStudy } from '@/types/projects';
import { cn } from '@/utils/cn';

export interface ProjectCaseStudyPageProps {
  caseStudy: ProjectCaseStudy;
  onNavigate: (slug: string) => void;
  className?: string;
}

export const ProjectCaseStudyPage: React.FC<ProjectCaseStudyPageProps> = ({
  caseStudy,
  onNavigate,
  className,
}) => {
  // Sync page metadata, Open Graph tags, canonical link, and JSON-LD schema
  usePageMetadata(undefined, caseStudy.id as 'sured' | 'walle' | 'jalsanchaee');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [caseStudy]);

  return (
    <article className={cn('relative min-h-screen pt-4 pb-16 bg-background', className)}>
      <Container size="xl">
        {/* 1. Hero Header */}
        <CaseStudyHero
          caseStudy={caseStudy}
          onBackToWork={() => onNavigate('/#projects')}
        />

        {/* 2. Primary Architectural Visual */}
        <div className="py-10 border-b border-border">
          <div className="flex items-center justify-between pb-4 text-xs font-mono text-muted-subtle uppercase tracking-widest">
            <span>ARCHITECTURAL SCHEMATIC & FLOW</span>
            <span>SYSTEM PREVIEW</span>
          </div>
          <ProjectVisual type={caseStudy.heroVisual} />
        </div>

        {/* 3. Role, Stack, and Problem / Solution Overview */}
        <CaseStudyOverview caseStudy={caseStudy} />

        {/* 4. Story Sections (Narrative Chapters 01, 02, 03, 04) */}
        <div className="flex flex-col">
          {caseStudy.sections.map((section) => (
            <CaseStudyStorySection key={section.number} section={section} />
          ))}
        </div>

        {/* 5. Personal Engineering Contributions */}
        <CaseStudyContributions contributions={caseStudy.contributions} />

        {/* 6. Retrospective Takeaways */}
        <CaseStudyLearnings learnings={caseStudy.learnings} />

        {/* 7. Previous / Next Project Navigation */}
        <CaseStudyNav
          navigation={caseStudy.navigation}
          onNavigate={onNavigate}
        />
      </Container>
    </article>
  );
};
