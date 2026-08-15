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
