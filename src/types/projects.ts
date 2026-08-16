export type ProjectVisualType = 'sured' | 'walle' | 'jalsanchaee';

export type ProjectCategory = 'product' | 'hardware' | 'hackathon';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  context: string;
  slug: string;
  featured?: boolean;
  category: ProjectCategory;
  summary: string;
  problem?: string;
  solution?: string;
  mainTechnologies: string[];
  supportingTechnologies?: string[];
  myContributions?: string[];
  teamContext?: string;
  repositoryUrl?: string;
  repositoryName?: string;
  visualType: ProjectVisualType;
}

export interface CaseStudySection {
  number: string;
  title: string;
  content: string[];
  callout?: string;
  points?: string[];
}

export interface ProjectCaseStudy {
  slug: string;
  id: string;
  title: string;
  subtitle: string;
  context: string;
  timeline?: string;
  summary: string;
  role: string[];
  technologies: {
    frontend?: string[];
    backend?: string[];
    hardware?: string[];
    blockchain?: string[];
    core: string[];
  };
  heroVisual: ProjectVisualType;
  accentColor?: 'pink' | 'lavender' | 'purple';
  problemStatement: {
    title: string;
    description: string;
  };
  solutionStatement: {
    title: string;
    description: string;
  };
  contributions: {
    title: string;
    points: string[];
    note?: string;
  };
  sections: CaseStudySection[];
  learnings: string[];
  links: {
    liveDemo?: string;
    repository?: string;
    repositoryName?: string;
  };
  navigation: {
    previous: { slug: string; title: string };
    next: { slug: string; title: string };
  };
}
