import { useState, useEffect, type RefObject } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import type { LookAngle } from './types';

interface UseCharacterLookAtOptions {
  maxHeadYaw?: number;     // Max horizontal head turn in deg (default 24)
  maxHeadPitch?: number;   // Max vertical head tilt in deg (default 18)
  maxEyeOffset?: number;   // Max pupil shift in px (default 4)
  enabled?: boolean;
}

export function useCharacterLookAt(
  containerRef: RefObject<HTMLElement | null>,
  options: UseCharacterLookAtOptions = {}
): LookAngle {
  const {
    maxHeadYaw = 24,
    maxHeadPitch = 18,
    maxEyeOffset = 4,
    enabled = true,
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

  useEffect(() => {
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

        // Normalize based on screen dimensions for responsive behavior
        const screenHalfW = window.innerWidth / 2;
        const screenHalfH = window.innerHeight / 2;

        const normalizedX = Math.max(-1, Math.min(1, dx / screenHalfW));
        const normalizedY = Math.max(-1, Math.min(1, dy / screenHalfH));

        // Subtly damped angles
        const headYaw = Number((normalizedX * maxHeadYaw).toFixed(2));
        const headPitch = Number((-normalizedY * maxHeadPitch).toFixed(2));
        const eyeOffsetX = Number((normalizedX * maxEyeOffset).toFixed(2));
        const eyeOffsetY = Number((normalizedY * maxEyeOffset).toFixed(2));

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
  }, [containerRef, enabled, prefersReduced, maxHeadYaw, maxHeadPitch, maxEyeOffset]);

  return lookAngle;
}
