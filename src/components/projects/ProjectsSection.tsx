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

  const handleScrollToSkills = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('skills');
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
      aria-label="Om Joshi Selected Work and Engineering Projects"
      className={cn(
        'relative py-24 sm:py-32 md:py-36 bg-surface/20 dark:bg-surface/10 border-t border-border/60 transition-colors',
        className
      )}
    >
      <Container className="flex flex-col gap-16 sm:gap-20">
        {/* Section Header */}
        <ProjectsHeader />

        {/* 1. High-Impact Featured Project Showcase (SureD) */}
        <FeaturedProjectCard project={featuredProject} />

        {/* 2. Secondary Projects Asymmetric Grid (WALL-E & JalSanchaeeNavachar) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {secondaryProjects.map((project) => (
            <SecondaryProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* 3. Transition Bridge to Technical Toolbox / Skills */}
        <div className="pt-12 mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-dashed border-border/80 text-xs font-mono">
          <div className="flex items-center gap-2.5 text-muted-foreground">
            <span className="text-accent font-semibold">04 // NEXT CHAPTER</span>
            <span>•</span>
            <span>There is more in the toolbox — engineering frameworks & domains</span>
          </div>

          <a
            href="#skills"
            onClick={handleScrollToSkills}
            className="group inline-flex items-center gap-2 text-foreground hover:text-accent font-semibold transition-colors cursor-pointer select-none"
          >
            <span>Explore technical matrix</span>
            <ArrowDownRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>
        </div>
      </Container>
    </section>
  );
};
