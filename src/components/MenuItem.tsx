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
      href={itemPathname ?? '/'}
      target={
        itemPathname === 'https://calendly.com/italocovas/coffee-chat'
          ? '_blank'
          : '_parent'
      }
      className={cn(
        className,
        pathname === itemPathname
          ? `border-b-[2px] font-bold ${BORDERS[color!]}`
          : ''
      )}
    >
      {name}
    </Link>
  );
}
