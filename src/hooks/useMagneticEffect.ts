import { useRef, useEffect } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface UseMagneticEffectOptions {
  strength?: number; // 0.15 - 0.35 (subtle 2px-6px shift)
  maxDistance?: number; // Maximum offset in px
  enabled?: boolean;
}

export function useMagneticEffect<T extends HTMLElement = HTMLButtonElement>(
  options: UseMagneticEffectOptions = {}
) {
  const { strength = 0.2, maxDistance = 6, enabled = true } = options;
  const ref = useRef<T>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled || prefersReduced || typeof window === 'undefined') return;

    // Disable magnetic effect on touch devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    let frameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = (e.clientX - centerX) * strength;
        const deltaY = (e.clientY - centerY) * strength;

        const clampedX = Math.max(-maxDistance, Math.min(maxDistance, deltaX));
        const clampedY = Math.max(-maxDistance, Math.min(maxDistance, deltaY));

        el.style.transform = `translate3d(${clampedX.toFixed(2)}px, ${clampedY.toFixed(2)}px, 0)`;
        el.style.transition = 'transform 0.1s ease-out';
      });
    };

    const handleMouseLeave = () => {
      cancelAnimationFrame(frameId);
      el.style.transform = 'translate3d(0px, 0px, 0px)';
      el.style.transition = 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
    };

    el.addEventListener('mousemove', handleMouseMove, { passive: true });
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(frameId);
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
      el.style.transform = '';
      el.style.transition = '';
    };
  }, [strength, maxDistance, enabled, prefersReduced]);

  return ref;
}
