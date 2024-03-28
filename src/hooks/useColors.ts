'use client';
import { ColorsContext } from '@/contexts/ColorsContext';
import { useContext } from 'react';

export function useColors() {
  return useContext(ColorsContext);
}
