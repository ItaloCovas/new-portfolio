'use client';
import { BORDERS } from '@/constants/colors';
import { useColors } from '@/hooks/useColors';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MenuItemProps {
  name: string;
  itemPathname?: string;
}

export function MenuItem({ name, itemPathname }: MenuItemProps) {
  const pathname = usePathname();
  const { color } = useColors();

  return (
    <Link
      onClick={(event: React.MouseEvent) => {
        if (name === 'Blog') {
          event.preventDefault();
        }
      }}
      href={itemPathname ?? '/'}
      target={name === 'Coffee Chat ☕' ? '_blank' : '_parent'}
      className={cn(
        pathname === itemPathname ? `border-b-[1px] ${BORDERS[color!]}` : '',
        name === 'Blog' ? 'cursor-not-allowed' : 'cursor-pointer',
        'rounded-t-md  px-4 py-2 text-base transition-colors duration-200 ease-in-out last-of-type:pr-0 hover:bg-white/10'
      )}
    >
      {name}
    </Link>
  );
}
