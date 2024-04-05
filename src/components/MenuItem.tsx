'use client';
import { BORDERS } from '@/constants/colors';
import { useColors } from '@/hooks/useColors';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnchorHTMLAttributes } from 'react';

interface MenuItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  name: string;
  className: string;
  itemPathname?: string;
}

export function MenuItem({ name, className, itemPathname }: MenuItemProps) {
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
      target={name === 'coffee chat ☕' ? '_blank' : '_parent'}
      className={cn(
        className,
        pathname === itemPathname
          ? `border-b-[2px] font-bold ${BORDERS[color!]}`
          : '',
        name === 'Blog' ? 'cursor-not-allowed' : 'cursor-pointer'
      )}
    >
      {name}
    </Link>
  );
}
