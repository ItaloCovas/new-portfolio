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
          esse é o meu lugar na Internet.
        </h2>
      </div>

      <section className="font-medium text-zinc-500 dark:text-zinc-300">
        <p className="text-base md:text-lg">
          Seja bem-vindo! Meu nome é <strong>Ítalo Garcia Covas</strong> e
          atualmente sou um Desenvolvedor de Software e um{' '}
          <Link
            href="https://www.sebrae-sc.com.br/blog/o-que-e-lifelong-learning"
            target="_blank"
            className={cn(
              'cursor-pointer text-base font-bold underline md:text-lg',
              TEXTS[color!]
            )}
          >
            eterno aprendiz
          </Link>{' '}
          que vive no 🇧🇷.
        </p>
        {/* <p className="mt-4 text-base md:text-lg">
          Tenho quase 3 anos de experiência trabalhando como Desenvolvedor Front
          End/Fullstack desde que consegui meu primeiro estágio e estou no
          último período em Análise e Desenvolvimento de Sistemas na FATEC.
        </p> */}
        <p className="mt-4 text-base md:text-lg">
          Sou extremamente empolgado com tecnologia e o que posso construir com
          ela, mas para além do trabalho algumas coisas que eu gosto são:{' '}
          <Link
            href="https://www.symplicity.com/pt-br/blog/como-hobbies-e-atividades-extracurriculares-ajudam-no-crescimento-da-carreira#:~:text=Atividades%20fora%20do%20ambiente%20de,na%20carreira%20e%20vice%2Dversa."
            target="_blank"
            className={cn(
              'cursor-pointer text-base font-bold underline md:text-lg',
              TEXTS[color!]
            )}
          >
            música ~ games ~ arte e natureza.
          </Link>
        </p>
        <p className="mt-4 text-base md:text-lg">
          Obrigado por visitar meu{' '}
          <Link
            href="https://medium.com/valter-nascimento-blog/o-que-e-jardim-digital-7029673da847"
            target="_blank"
            className={cn(
              'cursor-pointer text-base font-bold underline md:text-lg',
              TEXTS[color!]
            )}
          >
            jardim digital🪴
          </Link>{' '}
          onde compartilho coisas que me fazem ser quem sou. Caso queira falar
          sobre trabalho ou até mesmo conversar tomando um café ☕, não hesite
          em{' '}
          <Link
            href="https://calendly.com/italocovas/coffee-chat"
            target="_blank"
            className={cn(
              'cursor-pointer text-base font-bold underline md:text-lg',
              TEXTS[color!]
            )}
          >
            marcar uma chamada
          </Link>{' '}
          comigo.
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
            - “O importante é não parar de questionar, a curiosidade tem sua
            própria razão de existir.”
          </span>
          <span className="text-zinc-400 dark:text-zinc-300">
            Essa frase parece ser minha mas é do Einstein.
          </span>
        </div>
      </section>
    </main>
  );
}
