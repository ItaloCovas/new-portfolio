import { COLOR_PALETTE_VARIANTS } from '@/constants/colors';
import { useColors } from '@/hooks/useColors';
import { cn } from '@/utils/cn';

interface ColorPaletteProps {
  color: 'blue' | 'green' | 'red' | 'orange' | 'violet';
}

export function ColorPalette({ color }: ColorPaletteProps) {
  const { color: themeColor, setColor } = useColors();

  return (
    <div
      className={cn(
        COLOR_PALETTE_VARIANTS[color],
        'h-5 w-5 cursor-pointer rounded-full',
        themeColor === color ? 'border-2 border-black' : ''
      )}
      onClick={() => setColor(color)}
    ></div>
  );
}
