import Image from 'next/image';

export function Header() {
  return (
    <header className="flex h-10 max-w-[1000px] flex-1 text-white ">
      <div className="relative h-24 w-24 rounded-xl">
        <Image
          src="/img/italo.jpg"
          alt="Ítalo Covas picture"
          fill
          className="rounded-full"
        />
      </div>
    </header>
  );
}
