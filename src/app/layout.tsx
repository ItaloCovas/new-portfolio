import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import { cn } from '@/utils/cn';
import { Header } from '@/components/Header';
import { PageWrapper } from '@/components/PageWrapper';
import { Footer } from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Ítalo Covas',
  description: 'Generated by create next app',
  icons: {
    icon: [
      {
        rel: 'icon',
        type: 'image/svg+xml',
        media: '(prefers-color-scheme: light)',
        sizes: '16x16',
        url: '/green-icon.svg'
      },
      {
        rel: 'icon',
        type: 'image/svg+xml',
        media: '(prefers-color-scheme: dark)',
        sizes: '16x16',
        url: '/violet-icon.svg'
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={cn(
          'flex h-full w-full items-center justify-center bg-white dark:bg-[#151515]',
          inter.className
        )}
      >
        <PageWrapper>
          <Header />
          {children}
          <Footer />
        </PageWrapper>
      </body>
    </html>
  );
}
