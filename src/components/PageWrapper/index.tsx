import { ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="flex min-h-screen w-full max-w-[800px] flex-col py-16">
      {children}
    </div>
  );
}
