import React, { useState, useCallback, useMemo } from 'react';
import { PointerContext, type PointerMode } from './pointer-context';

export const PointerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<PointerMode>('default');
  const [label, setLabel] = useState<string | undefined>(undefined);

  const setPointerState = useCallback((newMode: PointerMode, newLabel?: string) => {
    setMode(newMode);
    setLabel(newLabel);
  }, []);

  const resetPointerState = useCallback(() => {
    setMode('default');
    setLabel(undefined);
  }, []);

  const value = useMemo(
    () => ({
      mode,
      label,
      setPointerState,
      resetPointerState,
    }),
    [mode, label, setPointerState, resetPointerState]
  );

  return <PointerContext.Provider value={value}>{children}</PointerContext.Provider>;
};
