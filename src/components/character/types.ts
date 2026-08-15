export interface Vector2D {
  x: number;
  y: number;
}

export interface LookAngle {
  headYaw: number;   // Horizontal head rotation in degrees (-25 to 25)
  headPitch: number; // Vertical head pitch in degrees (-20 to 20)
  eyeOffsetX: number; // Eye pupil normalized offset (-1 to 1)
  eyeOffsetY: number; // Eye pupil normalized offset (-1 to 1)
  distance: number;   // Distance in px from viewport cursor to character center
  isTracking: boolean;
}

export type CharacterActionState = 'idle' | 'tracking' | 'focused' | 'greeting';

export interface InteractiveCharacterProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showDebugCoordinates?: boolean;
  interactive?: boolean;
}
