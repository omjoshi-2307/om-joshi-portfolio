export type ThemeMode = 'light' | 'dark' | 'system';

export interface ThemeContextValue {
  theme: ThemeMode;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
}

export type SectionId = 
  | 'hero'
  | 'projects'
  | 'journey'
  | 'about'
  | 'character'
  | 'skills'
  | 'exploration'
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
