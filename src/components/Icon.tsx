import { BORDERS } from '@/constants/colors';
import { ICONS } from '@/constants/constants';
import { useColors } from '@/hooks/useColors';
import { cn } from '@/utils/cn';

interface IconProps {
  category: string;
  icon: string;
}

export function Icon({ category, icon }: IconProps) {
  const { color } = useColors();

  return (
    <div
      className={cn(
        'flex h-[100px] w-[100px] cursor-pointer flex-col items-center justify-center rounded-md  border-[2px] bg-zinc-100 px-3 py-2 dark:bg-[#3f3f3f]/50',
        BORDERS[color!]
      )}
    >
      {ICONS[icon]}
      {/* <span className="mt-2 rounded-lg bg-red-500 p-[1px] text-base font-bold">
        {category}
      </span> */}
    </div>
  );
}
