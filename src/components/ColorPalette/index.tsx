import { THEME_COLORS } from '@/constants/constants';
import { cn } from '@/utils/cn';

export function ColorPalette() {
  return (
    <div className="flex items-center gap-x-4">
      {THEME_COLORS.map((color) => {
        return (
          <div
            key={color.id}
            className={cn(
              'mt-2 h-5 w-5 cursor-pointer rounded-full',
              color.color
            )}
          ></div>
        );
      })}
    </div>
  );
}
