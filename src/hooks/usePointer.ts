import { useContext } from 'react';
import { PointerContext } from '@/context/pointer-context';

export const usePointer = () => useContext(PointerContext);
