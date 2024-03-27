import Link from 'next/link';
import { TbBrandGithub, TbBrandLinkedin } from 'react-icons/tb';

export function Footer() {
  return (
    <footer className="flex max-w-[800px] flex-1 flex-col items-center justify-between gap-y-4 border-t-[1px] border-white/10 bg-transparent py-4 text-white md:flex-row md:py-2 md:py-4">
      <Link href="/" className="text-center text-sm">
        © 2024 italocovas.dev
      </Link>
      <span className="text-center text-sm">
        feito com atenção, amor e carinho.
      </span>

      <div className="flex items-center gap-x-[1px] justify-self-end">
        <Link
          href="https://www.github.com/ItaloCovas"
          target="_blank"
          className="cursor-pointer rounded-full p-[2px] transition-all duration-200 hover:bg-zinc-300/20"
        >
          <TbBrandGithub className="h-6 w-6 text-zinc-300 hover:text-white" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/ItaloCovas"
          target="_blank"
          className="cursor-pointer rounded-full p-[2px] transition-all duration-200 hover:bg-zinc-300/20"
        >
          <TbBrandLinkedin className="h-6 w-6 text-zinc-300 hover:text-white" />
        </Link>
      </div>
    </footer>
  );
}
