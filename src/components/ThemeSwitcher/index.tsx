'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { RxMoon, RxSun } from 'react-icons/rx';

export default function ThemeSwitcher(): JSX.Element | null {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Workaround to see if its already rendered in the client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="mt-2">
      {theme === 'dark' ? (
        <RxSun
          onClick={handleThemeSwitch}
          className="h-7 w-7 cursor-pointer text-[#F3C432] hover:text-[#3F4347] hover:transition hover:duration-500 hover:ease-in-out"
        />
      ) : (
        <RxMoon
          onClick={handleThemeSwitch}
          className="h-7 w-7 cursor-pointer text-[#3F4347] hover:text-[#F3C432] hover:transition hover:duration-500 hover:ease-in-out"
        />
      )}
    </div>
  );
}
