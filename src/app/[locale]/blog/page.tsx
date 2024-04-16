'use client';

import { TEXTS } from '@/constants/colors';
import { useColors } from '@/hooks/useColors';
import { cn } from '@/utils/cn';
import { useTranslations } from 'next-intl';

export default function Blog() {
  const t = useTranslations();
  const { color } = useColors();

  return (
    <main className="flex min-h-[70vh] w-full flex-col gap-y-10 bg-transparent py-10 text-white md:py-10">
      <div>
        <h1 className={cn('mb-2 text-4xl font-bold', TEXTS[color!])}>
          {t('blog.title')}{' '}
        </h1>
        <span className="text-xl font-bold text-zinc-500 dark:text-zinc-300">
          {t('blog.description')}.
        </span>
      </div>
    </main>
  );
}
