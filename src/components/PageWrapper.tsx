'use client';
import { ColorsProvider } from '@/contexts/ColorsContext';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class" enableSystem>
      <ColorsProvider>
        <div className="flex min-h-screen w-full max-w-[750px] flex-col bg-transparent px-4 pt-10 md:px-10 md:py-10">
          {children}
        </div>
      </ColorsProvider>
    </ThemeProvider>
  );
}
