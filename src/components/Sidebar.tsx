'use client';
import { usePathname } from 'next/navigation';

import { cn } from '@/utils/cn';
import Link from 'next/link';
import { TEXTS } from '@/constants/colors';
import { useColors } from '@/hooks/useColors';
import { MenuItem } from './MenuItem';
import { MENU_ITEM_LIST } from '@/constants/constants';
import { useLocale, useTranslations } from 'next-intl';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: MenuProps) {
  const t = useTranslations();
  const locale = useLocale();
  const { color } = useColors();

  const menuClass = isOpen ? 'translate-x-0' : 'translate-x-full';

  return (
    <div
      className={cn(
        'fixed left-0 top-0 z-[98] flex h-[100%] w-full flex-col bg-white/[0.98] delay-150 duration-200 ease-out dark:bg-[#252525]/[0.98] lg:hidden',
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
            <span className="cursor-pointer select-none rounded-xl text-xl font-bold text-zinc-700 dark:text-white">
              ítalocovas
            </span>
            <strong className={cn('text-3xl', TEXTS[color!])}>.</strong>
          </Link>
          <div className="flex flex-col gap-y-6">
            {MENU_ITEM_LIST.map((item) => {
              return (
                <MenuItem
                  name={t(`header.${item.name}`)}
                  key={item.name}
                  itemPathname={`/${locale}${item.pathname}`}
                  className="w-[120px] text-base font-medium transition-colors duration-200 ease-in-out hover:bg-zinc-200/60 dark:hover:bg-white/10"
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
