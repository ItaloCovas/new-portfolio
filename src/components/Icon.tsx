import { BACKGROUNDS, BORDERS } from '@/constants/colors';
import { ICONS } from '@/constants/constants';
import { useColors } from '@/hooks/useColors';
import { cn } from '@/utils/cn';

interface IconProps {
  category: string;
  icon: string;
  name: string;
}

export function Icon({ icon, name }: IconProps) {
  const { color } = useColors();

  return (
    <div
      className={cn(
        'relative h-[100px] w-[100px] cursor-pointer rounded-md border-[2px] bg-zinc-100 hover:bg-zinc-200 dark:bg-[#3f3f3f]/50',
        BORDERS[color!]
      )}
    >
      <div className="group h-full w-full">
        <div className="relative h-full w-full transform transition-transform duration-500">
          <div className="absolute inset-0 flex items-center justify-center">
            {ICONS[icon]}
          </div>

          <div
            className={cn(
              'absolute inset-0 flex flex-col items-center justify-center text-center text-white opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100',
              BACKGROUNDS[color!]
            )}
          >
            <span className="mt-2 rounded-lg px-[1px] text-base font-bold">
              {name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
