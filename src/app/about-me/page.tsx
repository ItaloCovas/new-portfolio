'use client';
import { useColors } from '@/hooks/useColors';

export default function AboutMe() {
  const { color } = useColors();

  return (
    <main className="flex w-full flex-col gap-y-10 bg-transparent py-10 text-white md:pt-14">
      <div className="text-zinc-300">
        <p className="mt-4 text-base">
          Meu nome é Ítalo Garcia Covas, um Desenvolvedor de Software do 🇧🇷, com
          quase 3 anos de experiência em{' '}
          <strong>Desenvolvimento Front End / Fullstack</strong>.
        </p>
        <p className="mt-4 text-base">
          Consegui meu primeiro estágio em 2021 e desde então tenho trabalhado
          em diversos projetos e clientes diferentes. Estou no último período em
          <strong> Análise e Desenvolvimento de Sistemas</strong> na FATEC e sou
          extremamente empolgado com tecnologia e o que posso construir com ela,
          principalmente contribuindo com times e pessoas!
        </p>
        <p className="mt-4 text-base">
          Gosto muito de aprender e ver como as coisas funcionam, principalmente
          em conteúdos relacionados a Web. Além disso, tenho muito entusiasmo em
          Segurança da Informação, área que pretendo aprender cada vez mais e
          aplicar os conhecimentos no meu dia a dia.
        </p>
      </div>
      <h1 className="text-2xl font-bold text-orange-500">~ minha stack</h1>
      <div></div>
    </main>
  );
}
