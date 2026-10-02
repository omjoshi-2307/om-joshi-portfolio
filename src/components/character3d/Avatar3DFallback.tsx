import React from 'react';
import { InteractiveCharacter } from '@/components/character/InteractiveCharacter';
import type { Avatar3DProps } from './avatar3d.types';

/**
 * Avatar3DFallback renders the existing 2D animated character.
 * Used whenever:
 * 1. The 3D GLB file has not yet been placed in /models/om-avatar.glb
 * 2. WebGL is unsupported or disabled
 * 3. The 3D canvas is loading
 */
export const Avatar3DFallback: React.FC<Avatar3DProps> = ({
  className,
  size = 'hero',
  targetOverride = null,
  showPedestal = true,
  showStatusBadge = true,
  customCoordinateText,
  customBadgeText,
  interactive = true,
  onCharacterClick,
}) => {
  return (
    <InteractiveCharacter
      className={className}
      size={size}
      targetOverride={targetOverride}
      showPedestal={showPedestal}
      showStatusBadge={showStatusBadge}
      customCoordinateText={customCoordinateText}
      customBadgeText={customBadgeText}
      interactive={interactive}
      onCharacterClick={onCharacterClick}
    />
  );
};
