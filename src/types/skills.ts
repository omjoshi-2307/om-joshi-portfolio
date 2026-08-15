export type SkillTier = 'core' | 'familiar' | 'exploring';

export type SkillCategoryType =
  | 'languages'
  | 'frontend'
  | 'backend'
  | 'data'
  | 'web3'
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
  technologies: TechnologyItem[];
}

export interface ExplorationDomain {
  id: string;
  title: string;
  badge: string;
  description: string;
  topics: string[];
}
