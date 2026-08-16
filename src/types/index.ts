export type { JourneyVisualType, JourneyStage } from './journey';
export type { ProjectVisualType, ProjectCategory, ProjectItem } from './projects';
export type { SkillTier, SkillCategoryType, TechnologyItem, SkillCategory, ExplorationDomain } from './skills';
export type { ExplorationVisualCategory, ExplorationArea } from './exploration';
export type { PersonalInterest, AboutMetadataItem, AboutSectionData } from './about';
export type { SocialLinkItem, ContactSectionData } from './contact';

export type ThemeMode = 'light' | 'dark' | 'system';

export interface ThemeContextValue {
  theme: ThemeMode;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
}

export type SectionId = 
  | 'hero'
  | 'intro'
  | 'projects'
  | 'journey'
  | 'toolbox'
  | 'skills'
  | 'exploration'
  | 'about'
  | 'contact'
  | 'footer';

export interface NavItem {
  label: string;
  href: string;
  sectionId: SectionId;
  badge?: string;
}

export interface SectionMeta {
  id: SectionId;
  label: string;
  eyebrow?: string;
  order: number;
}

/* Character Subsystem Foundation Types */
export interface LookTarget {
  x: number; // Normalized -1 to 1 relative to character center
  y: number; // Normalized -1 to 1 relative to character center
  distance: number; // Euclidean distance
  isTracking: boolean;
}

export type CharacterMood = 'focused' | 'idle' | 'curious' | 'waving';

export interface CharacterState {
  lookTarget: LookTarget;
  mood: CharacterMood;
  isHovered: boolean;
  reducedMotion: boolean;
}
