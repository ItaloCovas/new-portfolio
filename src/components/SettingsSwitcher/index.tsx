'use client';
import * as Popover from '@radix-ui/react-popover';
import { IoClose, IoSettingsOutline } from 'react-icons/io5';
import { ColorPalette } from '../ColorPalette';
import { THEME_COLORS } from '@/constants/constants';
import ThemeSwitcher from '../ThemeSwitcher';

export function SettingsSwitcher() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          className="flex h-[28px] w-[28px] animate-spinSlow cursor-pointer items-center justify-center rounded-full  bg-transparent p-[2px] outline-none duration-300 hover:bg-white/20"
          aria-label="Update dimensions"
        >
          <IoSettingsOutline className="h-6 w-6 text-white" />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="w-[260px] rounded bg-zinc-300 p-5 shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] will-change-[transform,opacity] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=top]:animate-slideDownAndFade"
          sideOffset={-3}
          side="left"
        >
          <div className="flex flex-col gap-2.5">
            <div>
              <h2 className="font-bold text-black">Tema:</h2>
              <ThemeSwitcher />
            </div>
            <div>
              <h2 className="font-bold text-black">Cor do tema:</h2>
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
            <IoClose className="text-black" />
          </Popover.Close>
          <Popover.Arrow className="fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
