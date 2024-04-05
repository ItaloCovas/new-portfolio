'use client';
import { TEXTS } from '@/constants/colors';
import { useColors } from '@/hooks/useColors';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { ImSad } from 'react-icons/im';

export default function NotFound() {
  const { color } = useColors();

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center text-white">
      <ImSad className="mb-6 h-[30px] w-[30px]" />

      <h2 className="text-base md:text-lg">
        Página não encontrada, tente{' '}
        <Link
          href="/"
          className={cn(
            'cursor-pointer text-base font-bold underline md:text-lg',
            TEXTS[color!]
          )}
        >
          voltar para o início.
        </Link>
      </h2>
    </div>
  );
}
