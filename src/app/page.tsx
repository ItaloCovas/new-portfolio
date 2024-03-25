import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex w-full flex-col gap-y-10 bg-transparent py-8 text-white">
      <div className="">
        <h1 className="text-4xl font-bold text-white">Olá,</h1>
        <h2 className="text-2xl font-bold text-[#d4d4d8]">
          esse é o meu lugar na Internet.
        </h2>
      </div>

      <div className="text-[#d4d4d8]">
        <p className="text-base">
          Seja bem-vindo! Meu nome é <strong>Ítalo Garcia Covas</strong> e
          atualmente sou um Desenvolvedor de Software e um{' '}
          <a
            href="https://www.sebrae-sc.com.br/blog/o-que-e-lifelong-learning"
            target="_blank"
            className="cursor-pointer text-base font-bold text-white underline"
          >
            eterno aprendiz
          </a>{' '}
          ♾️ que vive no 🇧🇷. Criei esse website para mostrar um pouco do meu
          trabalho e também alguns pensamentos no meu futuro blog pessoal{' '}
          <strong>(tech/non-tech)</strong>.
        </p>
        {/* <p className="mt-4 text-base">
          Tenho quase 3 anos de experiência trabalhando como Desenvolvedor Front
          End/Fullstack desde que consegui meu primeiro estágio e estou no
          último período em Análise e Desenvolvimento de Sistemas na FATEC.
        </p> */}
        <p className="mt-4 text-base">
          Sou extremamente empolgado com tecnologia e o que posso construir com
          ela, mas para além do trabalho algumas coisas que eu gosto são:{' '}
          <a
            href="https://www.symplicity.com/pt-br/blog/como-hobbies-e-atividades-extracurriculares-ajudam-no-crescimento-da-carreira#:~:text=Atividades%20fora%20do%20ambiente%20de,na%20carreira%20e%20vice%2Dversa."
            target="_blank"
            className="cursor-pointer text-base font-bold text-white underline"
          >
            trilhas de bicicleta ~ música ~ arte ~ natureza e gastronomia.
          </a>
        </p>
        <p className="mt-4 text-base">
          Obrigado por visitar meu{' '}
          <Link href="/" className="cursor-pointer text-base font-bold ">
            jardim digital🪴
          </Link>{' '}
          onde compartilho coisas que me fazem ser quem sou. Caso queira falar
          sobre trabalho ou até mesmo conversar tomando um café ☕, não hesite
          em{' '}
          <a className="cursor-pointer text-base font-bold text-white underline">
            marcar uma chamada
          </a>{' '}
          comigo.
        </p>
      </div>
      <div className="flex justify-center md:justify-start">
        <Image
          alt="Ítalo Covas picture"
          src="/img/italo.jpg"
          width={200}
          height={200}
          className="rounded-lg bg-contain"
        />
      </div>
    </main>
  );
}
