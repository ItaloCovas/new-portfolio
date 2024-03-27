'use client';
import { ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="flex min-h-screen w-full max-w-[800px] flex-col bg-transparent px-4 py-10 md:px-10">
      {children}
    </div>
  );
}
