export type SkillTier = 'core' | 'familiar' | 'exploring';

export type SkillCategoryType =
  | 'development'
  | 'security'
  | 'ai-data'
  | 'web3'
  | 'tools'
  | 'languages'
  | 'frontend'
  | 'backend'
  | 'data'
  | 'dev-tools'
  | 'design-product';

export interface TechnologyItem {
  name: string;
  tier: SkillTier;
  contextNote?: string;
  associatedProjects?: string[];
}

export interface SkillCategory {
  id: SkillCategoryType;
  number: string;
  label: string;
  description: string;
  disciplineOverview?: string;
  technologies: TechnologyItem[];
}

export interface ExplorationDomain {
  id: string;
  title: string;
  badge: string;
  description: string;
  topics: string[];
}
