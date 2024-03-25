'use client';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MenuItemProps {
  name: string;
  itemPathname?: string;
}

export function MenuItem({ name, itemPathname }: MenuItemProps) {
  const pathname = usePathname();

  return (
    <Link
      onClick={(event: React.MouseEvent) => {
        if (name === 'Blog') {
          event.preventDefault();
        }
      }}
      href={itemPathname ?? '/'}
      className={cn(
        pathname === itemPathname ? 'border-b-[1px] border-blue-500' : '',
        name === 'Blog' ? 'cursor-not-allowed' : 'cursor-pointer',
        'rounded-t-md  px-4 py-2 text-base transition-colors duration-200 ease-in-out hover:bg-white/10'
      )}
    >
      {name}
    </Link>
  );
}
