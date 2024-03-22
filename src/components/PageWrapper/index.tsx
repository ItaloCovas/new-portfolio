import { ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="flex min-h-screen w-full max-w-[800px] flex-col bg-transparent px-10 py-10">
      {children}
    </div>
  );
}
