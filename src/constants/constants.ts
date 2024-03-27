interface ThemeColorsProps {
  color: 'blue' | 'green' | 'red' | 'orange' | 'violet';
  id: number;
}

export const MENU_ITEM_LIST = [
  { name: 'Início', pathname: '/' },
  { name: 'Sobre mim', pathname: '/about-me' },
  { name: 'Meus projetos', pathname: '/my-projects' },
  { name: 'Blog', pathname: '/blog' },
  {
    name: 'Coffee Chat ☕',
    pathname: 'https://calendly.com/italocovas/coffee-chat'
  }
];

export const THEME_COLORS: ThemeColorsProps[] = [
  { id: 1, color: 'blue' },
  { id: 3, color: 'orange' },
  { id: 2, color: 'red' },
  { id: 4, color: 'green' },
  { id: 5, color: 'violet' }
];
