import { useState, useEffect, useRef, type RefObject } from 'react';
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

  const centerRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const isCenterValidRef = useRef(false);

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
    if (targetOverride) return;

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

    // Check if device is touch-primary (pointer: coarse)
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

    // Cache element center position on resize / scroll to avoid getBoundingClientRect layout thrashing on mousemove
    const updateCenter = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      centerRef.current = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };
      isCenterValidRef.current = true;
    };

    updateCenter();
    window.addEventListener('resize', updateCenter, { passive: true });
    window.addEventListener('scroll', updateCenter, { passive: true });

    let animationFrameId: number;

    const handleMouseMove = (event: MouseEvent) => {
      if (!isCenterValidRef.current) {
        updateCenter();
      }

      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        const dx = event.clientX - centerRef.current.x;
        const dy = event.clientY - centerRef.current.y;
        const distance = Math.hypot(dx, dy);

        // Normalize based on screen dimensions
        const screenHalfW = Math.max(window.innerWidth / 2, 400);
        const screenHalfH = Math.max(window.innerHeight / 2, 400);

        const normalizedX = Math.max(-1, Math.min(1, dx / screenHalfW));
        const normalizedY = Math.max(-1, Math.min(1, dy / screenHalfH));

        // Subtly damped angles
        const headYaw = Number((normalizedX * maxHeadYaw).toFixed(1));
        const headPitch = Number((-normalizedY * maxHeadPitch).toFixed(1));
        const eyeOffsetX = Number((normalizedX * maxEyeOffset).toFixed(1));
        const eyeOffsetY = Number((normalizedY * (maxEyeOffset * 0.8)).toFixed(1));

        setLookAngle((prev) => {
          // Dead-zone check: avoid state updates for microscopic sub-pixel jitters
          if (
            prev.isTracking &&
            Math.abs(prev.headYaw - headYaw) < 0.15 &&
            Math.abs(prev.headPitch - headPitch) < 0.15
          ) {
            return prev;
          }

          return {
            headYaw,
            headPitch,
            eyeOffsetX,
            eyeOffsetY,
            distance: Math.round(distance),
            isTracking: true,
          };
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
      window.removeEventListener('resize', updateCenter);
      window.removeEventListener('scroll', updateCenter);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [containerRef, enabled, prefersReduced, targetOverride, maxHeadYaw, maxHeadPitch, maxEyeOffset]);

  return lookAngle;
}
