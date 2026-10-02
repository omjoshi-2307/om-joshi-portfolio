import type { CharacterSize, CharacterTargetOverride } from '@/components/character/types';

export interface Avatar3DProps {
  className?: string;
  size?: CharacterSize;
  modelUrl?: string;
  targetOverride?: CharacterTargetOverride | null;
  showPedestal?: boolean;
  showStatusBadge?: boolean;
  customCoordinateText?: string;
  customBadgeText?: string;
  interactive?: boolean;
  onModelLoad?: () => void;
  onModelError?: (error: Error) => void;
  onCharacterClick?: () => void;
}

export type ModelStatus = 'idle' | 'loading' | 'loaded' | 'error';
