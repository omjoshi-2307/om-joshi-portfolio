import React from 'react';
import { Container } from '@/components/layout/Container';
import { ProjectsHeader } from './ProjectsHeader';
import { FeaturedProjectCard } from './FeaturedProjectCard';
import { SecondaryProjectCard } from './SecondaryProjectCard';
import { PROJECTS_DATA } from '@/data/projects';
import { ArrowDownRight } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface ProjectsSectionProps {
  className?: string;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ className }) => {
  const featuredProject = PROJECTS_DATA.find((p) => p.featured) || PROJECTS_DATA[0];
  const secondaryProjects = PROJECTS_DATA.filter((p) => !p.featured);

  const handleScrollToJourney = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('journey');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="projects"
      aria-label="03 — Selected Work and Engineering Projects"
      className={cn(
        'relative py-24 sm:py-32 md:py-36 bg-background border-t border-border transition-colors',
        className
      )}
    >
      <Container className="flex flex-col gap-14 sm:gap-18">
        {/* Section Header */}
        <ProjectsHeader />

        {/* 1. Flagship Project Showcase (SureD — Web3 Escrow on Stellar) */}
        <FeaturedProjectCard project={featuredProject} />

        {/* 2. Secondary Projects (WALL-E Autonomous Robot & JalSanchaee Water IoT) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {secondaryProjects.map((project) => (
            <SecondaryProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* 3. Transition Bridge to 04 — Journey */}
        <div className="pt-12 mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-border text-xs font-mono">
          <div className="flex items-center gap-2.5 text-muted-foreground">
            <span className="text-accent font-semibold">04 // NEXT CHAPTER</span>
            <span>•</span>
            <span>The progression of milestones, hackathons & technical evolution</span>
          </div>

          <a
            href="#journey"
            onClick={handleScrollToJourney}
            className="group inline-flex items-center gap-2 text-foreground hover:text-accent font-semibold transition-colors cursor-pointer select-none"
          >
            <span>Proceed to journey & milestones</span>
            <ArrowDownRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>
        </div>
      </Container>
    </section>
  );
};
