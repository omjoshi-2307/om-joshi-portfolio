import { createContext } from 'react';

export type PointerMode = 'default' | 'link' | 'view' | 'email';

export interface PointerContextType {
  mode: PointerMode;
  label?: string;
  setPointerState: (mode: PointerMode, label?: string) => void;
  resetPointerState: () => void;
}

export const PointerContext = createContext<PointerContextType>({
  mode: 'default',
  label: undefined,
  setPointerState: () => {},
  resetPointerState: () => {},
});
