import { useState, useEffect, type RefObject } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import type { LookAngle, CharacterTargetOverride } from './types';

interface UseCharacterLookAtOptions {
  maxHeadYaw?: number;     // Max horizontal head turn in deg (default 16)
  maxHeadPitch?: number;   // Max vertical head tilt in deg (default 12)
  maxEyeOffset?: number;   // Max pupil shift in px (default 3.5)
  enabled?: boolean;
  targetOverride?: CharacterTargetOverride | null;
}

export function useCharacterLookAt(
  containerRef: RefObject<HTMLElement | null>,
  options: UseCharacterLookAtOptions = {}
): LookAngle {
  const {
    maxHeadYaw = 16,
    maxHeadPitch = 12,
    maxEyeOffset = 3.5,
    enabled = true,
    targetOverride = null,
  } = options;

  const prefersReduced = useReducedMotion();

  const [lookAngle, setLookAngle] = useState<LookAngle>({
    headYaw: 0,
    headPitch: 0,
    eyeOffsetX: 0,
    eyeOffsetY: 0,
    distance: 0,
    isTracking: false,
  });

  // Target override (e.g., hovering a specific CTA button)
  useEffect(() => {
    if (targetOverride) {
      const yaw = Number((targetOverride.x * maxHeadYaw).toFixed(2));
      const pitch = Number((-targetOverride.y * maxHeadPitch).toFixed(2));
      const eyeX = Number((targetOverride.x * maxEyeOffset).toFixed(2));
      const eyeY = Number((targetOverride.y * (maxEyeOffset * 0.8)).toFixed(2));

      setLookAngle({
        headYaw: yaw,
        headPitch: pitch,
        eyeOffsetX: eyeX,
        eyeOffsetY: eyeY,
        distance: 100,
        isTracking: true,
      });
    }
  }, [targetOverride, maxHeadYaw, maxHeadPitch, maxEyeOffset]);

  useEffect(() => {
    if (targetOverride) return; // If overriding, skip mouse listeners

    if (!enabled || prefersReduced || typeof window === 'undefined') {
      setLookAngle({
        headYaw: 0,
        headPitch: 0,
        eyeOffsetX: 0,
        eyeOffsetY: 0,
        distance: 0,
        isTracking: false,
      });
      return;
    }

    // Check if device is touch-primary
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) {
      setLookAngle({
        headYaw: 0,
        headPitch: 0,
        eyeOffsetX: 0,
        eyeOffsetY: 0,
        distance: 0,
        isTracking: false,
      });
      return;
    }

    let animationFrameId: number;

    const handleMouseMove = (event: MouseEvent) => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const dx = event.clientX - centerX;
        const dy = event.clientY - centerY;
        const distance = Math.hypot(dx, dy);

        // Normalize based on screen dimensions
        const screenHalfW = Math.max(window.innerWidth / 2, 400);
        const screenHalfH = Math.max(window.innerHeight / 2, 400);

        const normalizedX = Math.max(-1, Math.min(1, dx / screenHalfW));
        const normalizedY = Math.max(-1, Math.min(1, dy / screenHalfH));

        // Subtly damped angles
        const headYaw = Number((normalizedX * maxHeadYaw).toFixed(2));
        const headPitch = Number((-normalizedY * maxHeadPitch).toFixed(2));
        const eyeOffsetX = Number((normalizedX * maxEyeOffset).toFixed(2));
        const eyeOffsetY = Number((normalizedY * (maxEyeOffset * 0.8)).toFixed(2));

        setLookAngle({
          headYaw,
          headPitch,
          eyeOffsetX,
          eyeOffsetY,
          distance: Math.round(distance),
          isTracking: true,
        });
      });
    };

    const handleMouseLeave = () => {
      setLookAngle((prev) => ({
        ...prev,
        headYaw: 0,
        headPitch: 0,
        eyeOffsetX: 0,
        eyeOffsetY: 0,
        isTracking: false,
      }));
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [containerRef, enabled, prefersReduced, targetOverride, maxHeadYaw, maxHeadPitch, maxEyeOffset]);

  return lookAngle;
}
