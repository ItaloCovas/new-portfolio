'use client';
import * as Popover from '@radix-ui/react-popover';
import { IoClose, IoSettingsOutline } from 'react-icons/io5';
import { ColorPalette } from './ColorPalette';
import { THEME_COLORS } from '@/constants/colors';
import ThemeSwitcher from './ThemeSwitcher';
import { useScreenSize } from '@/hooks/useScreenSize';

export function SettingsSwitcher() {
  const { width } = useScreenSize();
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          className="flex h-[28px] w-[28px] animate-spinSlow cursor-pointer items-center justify-center rounded-full bg-transparent p-[2px] outline-none duration-300 hover:bg-white/20"
          aria-label="Update dimensions"
        >
          <IoSettingsOutline className="h-6 w-6 dark:text-white" />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          collisionPadding={15}
          className="w-[200px] rounded bg-zinc-300 p-5 data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=top]:animate-slideDownAndFade dark:bg-[#3f3f3f]"
          side={width < 768 ? 'bottom' : 'left'}
        >
          <div className="flex flex-col gap-2.5">
            <div>
              <h2 className="font-bold text-zinc-500 dark:text-zinc-300">
                Tema:
              </h2>
              <ThemeSwitcher />
            </div>
            <div>
              <h2 className="font-bold text-zinc-500 dark:text-zinc-300">
                Cor do tema:
              </h2>
              <div className="mt-2 flex items-center gap-x-4">
                {THEME_COLORS.map((color) => {
                  return <ColorPalette key={color.id} color={color.color} />;
                })}
              </div>
            </div>
          </div>
          <Popover.Close
            className="absolute right-[5px] top-[5px] inline-flex h-[25px] w-[25px] cursor-pointer items-center justify-center rounded-full outline-none"
            aria-label="Close"
          >
            <IoClose className="h-[20px] w-[20px] text-zinc-500 transition-all duration-200 ease-in-out  hover:text-white dark:text-zinc-300 dark:hover:text-white" />
          </Popover.Close>
          <Popover.Arrow className="fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
