interface ThemeColorsProps {
  color: 'blue' | 'green' | 'red' | 'orange' | 'violet';
  id: number;
}

export const THEME_COLORS: ThemeColorsProps[] = [
  { id: 1, color: 'blue' },
  { id: 3, color: 'orange' },
  { id: 2, color: 'red' },
  { id: 4, color: 'green' },
  { id: 5, color: 'violet' }
];

export const COLOR_PALETTE_VARIANTS = {
  blue: 'bg-blue-500 hover:bg-blue-400',
  red: 'bg-red-500 hover:bg-red-400',
  green: 'bg-green-500 hover:bg-green-400',
  orange: 'bg-orange-500 hover:bg-orange-400',
  violet: 'bg-violet-500 hover:bg-violet-400'
};

export const BACKGROUNDS = {
  blue: 'bg-blue-500',
  red: 'bg-red-500',
  green: 'bg-green-500',
  orange: 'bg-orange-500',
  violet: 'bg-violet-500'
};

export const TEXTS = {
  blue: 'text-blue-500',
  red: 'text-red-500',
  green: 'text-green-500',
  orange: 'text-orange-500',
  violet: 'text-violet-500'
};

export const BORDERS = {
  blue: 'border-blue-500',
  red: 'border-red-500',
  green: 'border-green-500',
  orange: 'border-orange-500',
  violet: 'border-violet-500'
};

export const DATA_STATES = {
  blue: 'data-[state=active]:text-blue-500 data-[state=active]:font-bold data-[state=active]:border-b data-[state=active]:border-blue-500',
  red: 'data-[state=active]:text-red-500 data-[state=active]:font-bold data-[state=active]:border-b data-[state=active]:border-red-500',
  green:
    'data-[state=active]:text-green-500 data-[state=active]:font-bold data-[state=active]:border-b data-[state=active]:border-green-500',
  orange:
    'data-[state=active]:text-orange-500 data-[state=active]:font-bold data-[state=active]:border-b data-[state=active]:border-orange-500',
  violet:
    'data-[state=active]:text-violet-500 data-[state=active]:font-bold data-[state=active]:border-b data-[state=active]:border-violet-500'
};
