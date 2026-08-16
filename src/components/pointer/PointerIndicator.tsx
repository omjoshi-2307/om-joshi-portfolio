import React, { useEffect, useRef, useState, memo } from 'react';
import { usePointer } from '@/hooks/usePointer';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/utils/cn';

export const PointerIndicator: React.FC = memo(() => {
  const { mode, label } = usePointer();
  const prefersReduced = useReducedMotion();

  const [isFinePointer, setIsFinePointer] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -100, y: -100, targetX: -100, targetY: -100 });
  const isRunningRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Verify pointer is fine (desktop mouse / precision trackpad)
    const media = window.matchMedia('(pointer: fine)');
    setIsFinePointer(media.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsFinePointer(e.matches);
    };

    media.addEventListener('change', handleMediaChange);
    return () => media.removeEventListener('change', handleMediaChange);
  }, []);

  useEffect(() => {
    if (!isFinePointer || prefersReduced || typeof window === 'undefined') return;

    let animFrameId: number;

    const renderLoop = () => {
      if (!dotRef.current) return;

      const lerp = 0.22;
      const dx = posRef.current.targetX - posRef.current.x;
      const dy = posRef.current.targetY - posRef.current.y;

      // Stop RAF animation loop when pointer is at rest (0% idle CPU usage)
      if (Math.abs(dx) < 0.08 && Math.abs(dy) < 0.08) {
        posRef.current.x = posRef.current.targetX;
        posRef.current.y = posRef.current.targetY;
        dotRef.current.style.transform = `translate3d(${posRef.current.x.toFixed(2)}px, ${posRef.current.y.toFixed(2)}px, 0) translate(-50%, -50%)`;
        isRunningRef.current = false;
        return;
      }

      posRef.current.x += dx * lerp;
      posRef.current.y += dy * lerp;
      dotRef.current.style.transform = `translate3d(${posRef.current.x.toFixed(2)}px, ${posRef.current.y.toFixed(2)}px, 0) translate(-50%, -50%)`;

      animFrameId = requestAnimationFrame(renderLoop);
    };

    const handleMouseMove = (e: MouseEvent) => {
      posRef.current.targetX = e.clientX;
      posRef.current.targetY = e.clientY;

      if (dotRef.current && dotRef.current.style.opacity !== '1') {
        dotRef.current.style.opacity = '1';
      }

      if (!isRunningRef.current) {
        isRunningRef.current = true;
        animFrameId = requestAnimationFrame(renderLoop);
      }
    };

    const handleMouseLeave = () => {
      if (dotRef.current) {
        dotRef.current.style.opacity = '0';
      }
    };

    const handleMouseEnter = () => {
      if (dotRef.current) {
        dotRef.current.style.opacity = '1';
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      cancelAnimationFrame(animFrameId);
      isRunningRef.current = false;
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isFinePointer, prefersReduced]);

  // Do not render anything on touch devices or reduced motion
  if (!isFinePointer || prefersReduced) {
    return null;
  }

  // Mode-based styles
  const getModeClasses = () => {
    switch (mode) {
      case 'view':
        return 'w-14 h-14 rounded-full bg-surface/90 border border-accent text-accent shadow-elevated backdrop-blur-xs scale-100';
      case 'email':
        return 'w-16 h-8 rounded-full bg-surface/90 border border-accent text-accent shadow-elevated backdrop-blur-xs scale-100';
      case 'link':
        return 'w-6 h-6 rounded-full bg-accent/20 border border-accent shadow-subtle scale-100';
      case 'default':
      default:
        return 'w-2 h-2 rounded-full bg-foreground/40 border border-foreground/20 scale-100';
    }
  };

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      style={{ willChange: 'transform', opacity: 0 }}
      className={cn(
        'fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center transition-all duration-200 ease-out select-none',
        getModeClasses()
      )}
    >
      {(mode === 'view' || mode === 'email') && (
        <span className="text-[9px] font-mono font-bold tracking-widest uppercase transition-opacity duration-150">
          {label || (mode === 'view' ? 'VIEW' : 'EMAIL')}
        </span>
      )}
    </div>
  );
});

PointerIndicator.displayName = 'PointerIndicator';
