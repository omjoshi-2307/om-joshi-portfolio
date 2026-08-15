export interface Vector2D {
  x: number;
  y: number;
}

export interface LookAngle {
  headYaw: number;   // Horizontal head rotation in degrees (-18 to 18)
  headPitch: number; // Vertical head pitch in degrees (-12 to 12)
  eyeOffsetX: number; // Eye pupil normalized offset (-4 to 4 px)
  eyeOffsetY: number; // Eye pupil normalized offset (-3 to 3 px)
  distance: number;   // Distance in px from viewport cursor to character center
  isTracking: boolean;
}

export type CharacterMood = 'focused' | 'idle' | 'curious' | 'coding';

export type CharacterSize = 'sm' | 'md' | 'lg' | 'hero';

export interface CharacterTargetOverride {
  x: number; // -1 to 1 normalized override
  y: number; // -1 to 1 normalized override
}

export interface InteractiveCharacterProps {
  className?: string;
  size?: CharacterSize;
  targetOverride?: CharacterTargetOverride | null;
  mood?: CharacterMood;
  showPedestal?: boolean;
  showStatusBadge?: boolean;
  showDebugCoordinates?: boolean;
  interactive?: boolean;
  onCharacterClick?: () => void;
}
