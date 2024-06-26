import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import { cn } from '@/utils/cn';
import { Header } from '@/components/Header';
import { PageWrapper } from '@/components/PageWrapper';
import { Footer } from '@/components/Footer';
import { validLocales } from '@/lib/locales/validLocales';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { getLocalesConfig } from '@/utils/getLocalesConfig';
import AnimationLayout from '@/components/AnimationLayout';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Ítalo Covas',
  description: 'Generated by create next app'
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export function generateStaticParams() {
  return validLocales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale }
}: RootLayoutProps) {
  const isValidLocale = validLocales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  unstable_setRequestLocale(locale);
  const messages = await getLocalesConfig(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          'flex h-full w-full items-center justify-center bg-white dark:bg-[#151515]',
          inter.className
        )}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <PageWrapper>
            <Header />
            <AnimationLayout>{children}</AnimationLayout>
            <Footer />
          </PageWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
