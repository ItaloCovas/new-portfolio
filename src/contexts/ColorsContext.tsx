'use client';
import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState
} from 'react';

interface ColorsContextProps {
  color: 'blue' | 'green' | 'red' | 'orange' | 'violet' | undefined;

  setColor: Dispatch<
    SetStateAction<'blue' | 'green' | 'red' | 'orange' | 'violet' | undefined>
  >;
}

interface ColorsProviderProps {
  children: React.ReactNode;
}

export const ColorsContext = createContext({} as ColorsContextProps);

export function ColorsProvider({ children }: ColorsProviderProps) {
  const [color, setColor] = useState<
    'blue' | 'green' | 'red' | 'orange' | 'violet' | undefined
  >();

  useEffect(() => {
    if (typeof window !== undefined) {
      const previousColor =
        (window?.localStorage?.getItem('preferred_color') as
          | 'blue'
          | 'green'
          | 'red'
          | 'orange'
          | 'violet') ?? 'blue';

      setColor(previousColor);
      localStorage.setItem('preferred_color', previousColor);
    }
  }, []);

  return (
    <ColorsContext.Provider value={{ color, setColor }}>
      {children}
    </ColorsContext.Provider>
  );
}
