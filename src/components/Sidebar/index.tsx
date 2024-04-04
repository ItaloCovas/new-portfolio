'use client';
import { usePathname } from 'next/navigation';

import { cn } from '@/utils/cn';
import Link from 'next/link';
import { TEXTS } from '@/constants/colors';
import { useColors } from '@/hooks/useColors';
import { MENU_ITEM_LIST } from '@/constants/constants';
import { MenuItem } from '../MenuItem';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: MenuProps) {
  const pathname = usePathname();
  const { color } = useColors();

  const menuClass = isOpen ? 'translate-x-0' : 'translate-x-full';

  return (
    <div
      className={cn(
        'fixed left-0 top-0 z-[98] flex h-[100%] w-full flex-col bg-[#252525]/[0.98] delay-150 duration-200 ease-out lg:hidden',
        menuClass
      )}
    >
      <div className="flex items-center justify-end px-4">
        <button className="text-4xl" onClick={onClose}>
          &times;
        </button>
      </div>
      <div className="h-full p-4 pr-5 pt-2">
        <div className="flex flex-col gap-y-4 text-lg font-semibold">
          <Link href="/">
            <span className="cursor-pointer select-none rounded-xl text-xl font-bold text-white">
              ítalocovas
            </span>
            <strong className={cn('text-3xl', TEXTS[color!])}>.</strong>
          </Link>
          <div className="flex flex-col gap-y-6">
            {MENU_ITEM_LIST.map((item) => {
              return (
                <MenuItem
                  name={item.name}
                  key={item.name}
                  itemPathname={item.pathname}
                  className="w-[120px] text-base transition-colors duration-200 ease-in-out hover:bg-white/10"
                  onClick={onClose}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
