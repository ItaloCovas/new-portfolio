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
