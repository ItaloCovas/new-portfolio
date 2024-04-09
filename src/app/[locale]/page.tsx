'use client';
import { TEXTS } from '@/constants/colors';
import { useColors } from '@/hooks/useColors';
import { cn } from '@/utils/cn';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function Home({}) {
  const t = useTranslations();
  const { color } = useColors();

  return (
    <main className="flex min-h-[70vh] w-full flex-col gap-y-10 bg-transparent py-10 text-white md:py-10">
      <div>
        <h1 className={cn('text-4xl font-bold', TEXTS[color!])}>
          {t('home.greetings')}
        </h1>
        <h2 className="text-2xl font-bold text-zinc-500 dark:text-zinc-300">
          {t('home.description')}
        </h2>
      </div>

      <section className="font-medium text-zinc-500 dark:text-zinc-300">
        <p className="text-base md:text-lg">
          {t('home.welcome')} <strong>{t('home.name')}</strong> {t('home.job')}{' '}
          <Link
            href="https://www.dictionary.com/browse/lifelong-learning"
            target="_blank"
            className={cn(
              'cursor-pointer text-base font-bold underline md:text-lg',
              TEXTS[color!]
            )}
          >
            {t('home.learner')}
          </Link>{' '}
          {t('home.location')}
        </p>
        <p className="mt-4 text-base md:text-lg">
          {t('home.tech')}{' '}
          <Link
            href="https://www.skilledatlife.com/why-hobbies-are-important/"
            target="_blank"
            className={cn(
              'cursor-pointer text-base font-bold underline md:text-lg',
              TEXTS[color!]
            )}
          >
            {t('home.hobbies')}
          </Link>
        </p>
        <p className="mt-4 text-base md:text-lg">
          {t('home.thanks')}{' '}
          <Link
            href="https://medium.com/the-obsidianist/what-is-a-digital-garden-eeae89c7c483"
            target="_blank"
            className={cn(
              'cursor-pointer text-base font-bold underline md:text-lg',
              TEXTS[color!]
            )}
          >
            {t('home.digitalGarden')}
          </Link>{' '}
          {t('home.coffeeChat')}{' '}
          <Link
            href="https://calendly.com/italocovas/coffee-chat"
            target="_blank"
            className={cn(
              'cursor-pointer text-base font-bold underline md:text-lg',
              TEXTS[color!]
            )}
          >
            {t('home.bookACall')}
          </Link>{' '}
          {t('home.withMe')}
        </p>
      </section>
      <section className="flex flex-col items-center justify-center md:flex-row md:justify-start md:gap-x-8">
        <Image
          alt="Ítalo Covas picture"
          src="/img/italo.jpg"
          width={200}
          height={200}
          className="rounded-lg bg-contain"
        />
        <div className="mt-8 flex flex-col items-center gap-y-2 text-center text-base md:items-start md:text-left md:text-lg">
          <span className="font-medium text-zinc-500 dark:text-zinc-300">
            {t('home.phrase')}
          </span>
          <span className="text-zinc-400 dark:text-zinc-300">
            {t('home.author')}
          </span>
        </div>
      </section>
    </main>
  );
}
