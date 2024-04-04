import { CSSIcon } from '@/components/icons/CSSIcon';
import { DotNetIcon } from '@/components/icons/DotNetIcon';
import { GitIcon } from '@/components/icons/GitIcon';
import { GithubIcon } from '@/components/icons/GithubIcon';
import { HTMLIcon } from '@/components/icons/HTMLIcon';
import { JavascriptIcon } from '@/components/icons/JavascriptIcon';
import { NodeIcon } from '@/components/icons/NodeIcon';
import { ReactIcon } from '@/components/icons/ReactIcon';
import { TypescriptIcon } from '@/components/icons/TypescriptIcon';

interface Icons {
  [key: string]: JSX.Element;
}

export const MENU_ITEM_LIST = [
  { name: 'início', pathname: '/' },
  { name: 'sobre mim', pathname: '/about-me' },
  { name: 'meus projetos', pathname: '/my-projects' },
  { name: 'blog', pathname: '/blog' },
  {
    name: 'coffee chat ☕',
    pathname: 'https://calendly.com/italocovas/coffee-chat'
  }
];

export const STACK_ICONS_LIST = [
  { id: 1, icon: 'html', category: 'front end' },
  { id: 2, icon: 'css', category: 'front end' },
  { id: 3, icon: 'javascript', category: 'front end/back end' },
  { id: 4, icon: 'typescript', category: 'front end/back end' },
  { id: 5, icon: 'react', category: 'front end' },
  { id: 6, icon: 'node', category: 'back end' },
  { id: 6, icon: 'dotnet', category: 'back end' },
  { id: 6, icon: 'git', category: 'versionamento' },
  { id: 7, icon: 'github', category: 'versionamento' }
];

export const ICONS: Icons = {
  html: <HTMLIcon />,
  css: <CSSIcon />,
  javascript: <JavascriptIcon />,
  typescript: <TypescriptIcon />,
  react: <ReactIcon />,
  node: <NodeIcon />,
  dotnet: <DotNetIcon />,
  git: <GitIcon />,
  github: <GithubIcon />
};
