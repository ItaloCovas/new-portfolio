'use client';
import { ColorsProvider } from '@/contexts/ColorsContext';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class" enableSystem>
      <ColorsProvider>
        <div className="flex min-h-screen w-full max-w-[800px] flex-col bg-transparent px-4 py-10 md:px-10">
          {children}
        </div>
      </ColorsProvider>
    </ThemeProvider>
  );
}
