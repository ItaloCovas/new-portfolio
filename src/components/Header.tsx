'use client';

import { MENU_ITEM_LIST } from '@/constants/constants';
import Link from 'next/link';
import { MenuItem } from './MenuItem';
import { IoMdMenu } from 'react-icons/io';
import { SettingsSwitcher } from './SettingsSwitcher';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useColors } from '@/hooks/useColors';
import { cn } from '@/utils/cn';
import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { TEXTS } from '@/constants/colors';
import { useLocale, useTranslations } from 'next-intl';

export function Header() {
  const locale = useLocale();
  const t = useTranslations();
  const { color } = useColors();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <header className="relative flex h-10 max-w-[800px] items-end justify-between border-b-[1px] border-zinc-500/20 bg-transparent text-zinc-500 dark:border-white/10 dark:text-zinc-300">
      <Sidebar isOpen={isOpen} onClose={handleClose} />
      <div className="absolute bottom-[-40px] right-[2px] hidden items-center gap-x-2 md:flex">
        <LanguageSwitcher />
        <SettingsSwitcher />
      </div>

      <Link href="/">
        <span className="cursor-pointer select-none rounded-xl text-xl font-bold text-zinc-500 dark:text-white">
          ítalocovas
        </span>
        <strong className={cn('text-3xl', TEXTS[color!])}>.</strong>
      </Link>
      <nav className="hidden md:flex">
        {MENU_ITEM_LIST.map((item) => {
          return (
            <MenuItem
              name={t(`header.${item.name}`)}
              key={item.name}
              itemPathname={
                item.name === 'coffeeChat'
                  ? 'https://calendly.com/italocovas/coffee-chat'
                  : `/${locale}${item.pathname}`
              }
              className="rounded-t-md px-4 py-2 text-base font-medium transition-colors duration-200 ease-in-out last-of-type:pr-0 hover:bg-zinc-200/60 dark:hover:bg-white/10"
            />
          );
        })}
      </nav>
      <div className="flex items-center gap-x-4 pb-2 md:hidden">
        <LanguageSwitcher />
        <SettingsSwitcher />
        <IoMdMenu
          className="h-7 w-7 cursor-pointer rounded-full p-[2px] transition-all duration-200 hover:bg-zinc-300/20"
          onClick={handleOpen}
        />
      </div>
    </header>
  );
}
