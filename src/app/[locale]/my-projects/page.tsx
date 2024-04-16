'use client';

import { ProjectsTab } from '@/components/ProjectsTab';
import { TEXTS } from '@/constants/colors';
import { useColors } from '@/hooks/useColors';
import { cn } from '@/utils/cn';
import { useTranslations } from 'next-intl';

export default function MyProjects() {
  const t = useTranslations();
  const { color } = useColors();

  return (
    <main className="flex min-h-[70vh] w-full flex-col gap-y-10 bg-transparent py-10 text-white md:py-10">
      <div>
        <h1 className="mb-2 text-3xl font-bold text-zinc-500 dark:text-zinc-300">
          {t('myProjects.firstTitle')}{' '}
          <span className={TEXTS[color!]}>{t('myProjects.secondTitle')}</span>
        </h1>
        <span className="text-xl font-bold text-zinc-500 dark:text-zinc-300">
          Veja meus projetos e como coloco minhas habilidades em prática.
        </span>
        <small className={cn('text-md mt-2 block font-bold', TEXTS[color!])}>
          * em alguns projetos onde desenvolvi API's, elas podem não funcionar
          devido a hospedagem grátis com limite, sempre olhe o Github para mais
          detalhes.
        </small>
      </div>
      <ProjectsTab />
    </main>
  );
}
