export type JourneyVisualType =
  | 'code'
  | 'hardware'
  | 'robotics'
  | 'hackathon'
  | 'product'
  | 'exploration';

export interface JourneyStage {
  id: string;
  number: string;
  stageLabel: string;
  timeframe?: string;
  title: string;
  tagline: string;
  quote?: string;
  narrative: string[];
  technologies?: string[];
  repositoryUrl?: string;
  repositoryName?: string;
  roleContributions?: string[];
  keyLearning?: string;
  visualType: JourneyVisualType;
}
