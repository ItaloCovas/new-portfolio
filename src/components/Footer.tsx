'use client';
import { TEXTS } from '@/constants/colors';
import { useColors } from '@/hooks/useColors';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { TbBrandGithub, TbBrandLinkedin } from 'react-icons/tb';

export function Footer() {
  const { color } = useColors();

  return (
    <footer className="flex max-w-[800px] flex-col items-center gap-y-8 border-t-[1px] border-zinc-500/20 bg-transparent py-4 text-zinc-500 dark:border-white/10 dark:text-zinc-300 md:flex-row md:justify-between md:py-2">
      <Link href="/" className="text-center text-sm font-medium">
        © 2024 italocovas.dev
      </Link>
      <span
        className={cn(
          'text-center text-sm font-semibold md:mr-12',
          TEXTS[color!]
        )}
      >
        feito com atenção e carinho.
      </span>

      <div className="flex items-center gap-x-[1px] justify-self-end">
        <Link
          href="https://www.github.com/ItaloCovas"
          target="_blank"
          className="cursor-pointer rounded-full p-[2px] transition-all duration-200 hover:bg-zinc-200/90 dark:hover:bg-zinc-300/20"
        >
          <TbBrandGithub className="h-6 w-6 text-zinc-500 dark:text-zinc-300 dark:hover:text-white" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/ItaloCovas"
          target="_blank"
          className="cursor-pointer rounded-full p-[2px] transition-all duration-200 hover:bg-zinc-200/90 dark:hover:bg-zinc-300/20"
        >
          <TbBrandLinkedin className="h-6 w-6 text-zinc-500 dark:text-zinc-300 dark:hover:text-white" />
        </Link>
      </div>
    </footer>
  );
}
