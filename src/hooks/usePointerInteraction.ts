import { useCallback } from 'react';
import { usePointer } from '@/hooks/usePointer';
import type { PointerMode } from '@/context/pointer-context';

/**
 * Hook to attach pointer micro-interaction triggers to any interactive element.
 */
export function usePointerInteraction(mode: PointerMode = 'link', label?: string) {
  const { setPointerState, resetPointerState } = usePointer();

  const onMouseEnter = useCallback(() => {
    setPointerState(mode, label);
  }, [mode, label, setPointerState]);

  const onMouseLeave = useCallback(() => {
    resetPointerState();
  }, [resetPointerState]);

  return {
    onMouseEnter,
    onMouseLeave,
    'data-pointer': mode,
    ...(label ? { 'data-pointer-label': label } : {}),
  };
}
