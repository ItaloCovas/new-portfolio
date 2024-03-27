import { cn } from '@/utils/cn';
import { useTheme } from 'next-themes';

interface ColorPaletteProps {
  color: 'blue' | 'green' | 'red' | 'orange' | 'violet';
}

export function ColorPalette({ color }: ColorPaletteProps) {
  const { theme, setTheme } = useTheme();

  const colorVariants = {
    blue: 'bg-blue-500 hover:bg-blue-400',
    red: 'bg-red-500 hover:bg-red-400',
    green: 'bg-green-500 hover:bg-green-400',
    orange: 'bg-orange-500 hover:bg-orange-400',
    violet: 'bg-violet-500 hover:bg-violet-400'
  };

  return (
    <div
      className={cn(
        'h-5 w-5 cursor-pointer rounded-full',
        theme === color ? 'border-2 border-black' : '',
        colorVariants[color]
      )}
      onClick={() => setTheme(color)}
    ></div>
  );
}
