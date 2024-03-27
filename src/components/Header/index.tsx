'use client';

import { MENU_ITEM_LIST } from '@/constants/constants';
import Link from 'next/link';
import { MenuItem } from '../MenuItem';
import { IoMdMenu } from 'react-icons/io';
import { SettingsSwitcher } from '../SettingsSwitcher';
import { LanguageSwitcher } from '../LanguageSwitcher';

export function Header() {
  return (
    <header className="relative flex h-10 max-w-[800px] items-end justify-between border-b-[1px] border-white/10 bg-transparent text-zinc-300">
      <div className="absolute bottom-[-40px] right-[2px] hidden items-center gap-x-2 md:flex">
        <LanguageSwitcher />
        <SettingsSwitcher />
      </div>

      <Link href="/">
        <span className="cursor-pointer select-none rounded-xl text-xl font-bold text-white">
          ítalocovas
        </span>
        <strong className="text-3xl">.</strong>
      </Link>
      <nav className="hidden md:flex">
        {MENU_ITEM_LIST.map((item) => {
          return (
            <MenuItem
              name={item.name}
              key={item.name}
              itemPathname={item.pathname}
            />
          );
        })}
      </nav>
      <div className="pb-2 md:hidden ">
        <IoMdMenu className="h-6 w-6 cursor-pointer" />
      </div>
    </header>
  );
}
