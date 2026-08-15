export type ExplorationVisualCategory = 'ai' | 'security' | 'systems' | 'web3' | 'tooling';

export interface ExplorationArea {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  conceptQuote: string;
  narrative: string;
  topics: string[];
  visualCategory: ExplorationVisualCategory;
}
