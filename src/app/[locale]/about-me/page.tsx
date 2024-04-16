'use client';
import { Icon } from '@/components/Icon';
import { TEXTS } from '@/constants/colors';
import { STACK_ICONS_LIST } from '@/constants/constants';
import { useColors } from '@/hooks/useColors';
import { cn } from '@/utils/cn';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function AboutMe() {
  const t = useTranslations();
  const { color } = useColors();

  return (
    <main className="flex min-h-[70vh] w-full flex-col gap-y-10 bg-transparent py-5 text-white md:py-10">
      <h1 className="text-3xl font-bold text-zinc-500 dark:text-zinc-300">
        {t('aboutMe.firstTitle')}{' '}
        <span className={TEXTS[color!]}>{t('aboutMe.secondTitle')}</span>
      </h1>

      <section className="font-medium text-zinc-500 dark:text-zinc-300">
        <p className=" text-base md:text-lg">
          {t('aboutMe.presentation')}{' '}
          <strong className={TEXTS[color!]}>{t('aboutMe.role')}</strong>.
        </p>
        <p className="mt-4 text-base md:text-lg">
          {t('aboutMe.internship')}{' '}
          <Link
            href="http://www.fatecrp.edu.br/analise-e-desenvolvimento-de-sistemas/"
            target="_blank"
            className={cn(
              'cursor-pointer text-base font-bold underline md:text-lg',
              TEXTS[color!]
            )}
          >
            {t('aboutMe.course')}
          </Link>{' '}
          {t('aboutMe.college')}
        </p>
        <p className="mt-4 text-base md:text-lg">
          {t('aboutMe.learning')}{' '}
          <strong className={TEXTS[color!]}>{t('aboutMe.security')}</strong>
          {t('aboutMe.knowledge')}
        </p>
      </section>
      <section className="flex h-full w-full flex-col gap-y-10">
        <h1 className="text-center text-2xl font-bold text-zinc-500 dark:text-zinc-300 md:text-left">
          {t('aboutMe.my')}{' '}
          <span className={TEXTS[color!]}>{t('aboutMe.techStack')}</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-6 md:justify-start">
          {STACK_ICONS_LIST.map((item) => {
            if (
              item.category !== 'front end' &&
              item.category !== 'back end' &&
              item.category !== 'front end/back end'
            ) {
              return;
            }

            return (
              <Icon
                key={item.id}
                category={item.category}
                icon={item.icon}
                name={item.name}
              />
            );
          })}
        </div>

        <h1 className="text-center text-2xl font-bold text-zinc-500 dark:text-zinc-300 md:text-left ">
          ~ <span className={TEXTS[color!]}>{t('aboutMe.tests')}</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-6 md:justify-start ">
          {STACK_ICONS_LIST.map((item) => {
            if (item.category !== 'tests') {
              return;
            }

            return (
              <Icon
                key={item.id}
                category={item.category}
                icon={item.icon}
                name={item.name}
              />
            );
          })}
        </div>

        <h1 className="text-center text-2xl font-bold text-zinc-500 dark:text-zinc-300 md:text-left">
          {t('aboutMe.libsAnd')}{' '}
          <span className={TEXTS[color!]}>{t('aboutMe.docs')}</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-6 md:justify-start ">
          {STACK_ICONS_LIST.map((item) => {
            if (item.category !== 'docs' && item.category !== 'lib') {
              return;
            }

            return (
              <Icon
                key={item.id}
                category={item.category}
                icon={item.icon}
                name={item.name}
              />
            );
          })}
        </div>

        <h1 className="text-center text-2xl font-bold text-zinc-500 dark:text-zinc-300 md:text-left">
          {t('aboutMe.versioning')}{' '}
          <span className={TEXTS[color!]}>{t('aboutMe.infra')}</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-6 md:justify-start ">
          {STACK_ICONS_LIST.map((item) => {
            if (item.category !== 'versioning' && item.category !== 'infra') {
              return;
            }

            return (
              <Icon
                key={item.id}
                category={item.category}
                icon={item.icon}
                name={item.name}
              />
            );
          })}
        </div>

        <h1 className="text-center text-2xl font-bold text-zinc-500 dark:text-zinc-300 md:text-left">
          {t('aboutMe.utilities')}{' '}
          <span className={TEXTS[color!]}>{t('aboutMe.os')}</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-6 md:justify-start ">
          {STACK_ICONS_LIST.map((item) => {
            if (item.category !== 'O.S' && item.category !== 'miscellaneous') {
              return;
            }

            return (
              <Icon
                key={item.id}
                category={item.category}
                icon={item.icon}
                name={item.name}
              />
            );
          })}
        </div>

        <h1 className="text-center text-2xl font-bold text-zinc-500 dark:text-zinc-300 md:text-left">
          ~<span className={TEXTS[color!]}> {t('aboutMe.databases')}</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-6 md:justify-start ">
          {STACK_ICONS_LIST.map((item) => {
            if (item.category !== 'database') {
              return;
            }

            return (
              <Icon
                key={item.id}
                category={item.category}
                icon={item.icon}
                name={item.name}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
