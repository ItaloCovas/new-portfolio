import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <header className="flex h-32 max-w-[800px] items-end justify-between border-b-[1px] border-white/10 bg-transparent text-[#cacaca]">
      <Image
        src="/img/italo.jpg"
        alt="Ítalo Covas picture"
        width={75}
        height={75}
        className="rounded-xl pb-2"
      />
      <nav className="hidden md:flex">
        <ul className="flex">
          <li className="cursor-pointer rounded-t-md  px-4 py-2 text-base transition-colors duration-200 ease-in-out hover:bg-white/10">
            <Link href="/">Início</Link>
          </li>
          <li className="cursor-pointer rounded-t-md px-4 py-2 text-base transition-colors duration-200 ease-in-out hover:bg-white/10">
            <Link href="/about-me">Sobre mim</Link>
          </li>
          <li className="cursor-pointer rounded-t-md px-4 py-2 text-base transition-colors duration-200 ease-in-out hover:bg-white/10">
            <Link href="/my-projects">Meus projetos</Link>
          </li>
          <li className="cursor-pointer rounded-t-md px-4 py-2 text-base transition-colors duration-200 ease-in-out hover:bg-white/10">
            <Link href="/" target="_blank">
              Coffee Chat ☕
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
