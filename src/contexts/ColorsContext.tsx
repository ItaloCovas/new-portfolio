'use client';
import { getCookie, setCookie } from 'cookies-next';
import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState
} from 'react';

interface ColorsContextProps {
  color: 'blue' | 'green' | 'red' | 'orange' | 'violet';

  setColor: Dispatch<
    SetStateAction<'blue' | 'green' | 'red' | 'orange' | 'violet'>
  >;
}

interface ColorsProviderProps {
  children: React.ReactNode;
}

export const ColorsContext = createContext({} as ColorsContextProps);

export function ColorsProvider({ children }: ColorsProviderProps) {
  const [color, setColor] = useState<
    'blue' | 'green' | 'red' | 'orange' | 'violet'
  >(
    (getCookie('preferred_color') as
      | 'blue'
      | 'green'
      | 'red'
      | 'orange'
      | 'violet') ?? 'blue'
  );

  useEffect(() => {
    setCookie('preferred_color', color);
  }, [color]);

  return (
    <ColorsContext.Provider value={{ color, setColor }}>
      {children}
    </ColorsContext.Provider>
  );
}
