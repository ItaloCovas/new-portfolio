'use client';
import { Icon } from '@/components/Icon';
import { TEXTS } from '@/constants/colors';
import { STACK_ICONS_LIST } from '@/constants/constants';
import { useColors } from '@/hooks/useColors';
import { cn } from '@/utils/cn';
import Link from 'next/link';

export default function AboutMe() {
  const { color } = useColors();

  return (
    <main className="flex min-h-[70vh] w-full flex-col gap-y-10 bg-transparent py-10 text-white">
      <section className="text-zinc-300">
        <p className="mt-4 text-base">
          Meu nome é Ítalo Garcia Covas, um Desenvolvedor de Software do 🇧🇷, com
          quase 3 anos de experiência em{' '}
          <strong className={TEXTS[color!]}>
            Desenvolvimento Front End / Fullstack
          </strong>
          .
        </p>
        <p className="mt-4 text-base">
          Consegui meu primeiro estágio em 2021 e desde então tenho trabalhado
          em diversos projetos e clientes diferentes. Estou no último período em{' '}
          <Link
            href="http://www.fatecrp.edu.br/analise-e-desenvolvimento-de-sistemas/"
            target="_blank"
            className={cn(
              'cursor-pointer text-base font-bold underline',
              TEXTS[color!]
            )}
          >
            Análise e Desenvolvimento de Sistemas
          </Link>{' '}
          na FATEC e sou extremamente empolgado com tecnologia e o que posso
          construir com ela, principalmente contribuindo com times e pessoas!
        </p>
        <p className="mt-4 text-base">
          Gosto muito de aprender e ver como as coisas funcionam, principalmente
          em conteúdos relacionados a Web. Além disso,{' '}
          <strong className={TEXTS[color!]}>
            tenho muito entusiasmo em Segurança da Informação
          </strong>
          , área que pretendo aprender cada vez mais e aplicar os conhecimentos
          no meu dia a dia.
        </p>
      </section>
      <section className="flex h-full w-full flex-col gap-y-10">
        <h1 className="text-center text-2xl font-bold md:text-left">
          ~ minha <span className={TEXTS[color!]}>tech stack</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-6 ">
          {STACK_ICONS_LIST.map((item) => {
            return (
              <Icon key={item.id} category={item.category} icon={item.icon} />
            );
          })}
        </div>
      </section>
    </main>
  );
}
