import { AWSIcon } from '@/components/icons/AWSIcon';
import { AzureIcon } from '@/components/icons/AzureIcon';
import { CSSIcon } from '@/components/icons/CSSIcon';
import { DBeaverIcon } from '@/components/icons/DBeaverIcon';
import { DockerIcon } from '@/components/icons/DockerIcon';
import { DotNetIcon } from '@/components/icons/DotNetIcon';
import { FigmaIcon } from '@/components/icons/FigmaIcon';
import { FirebaseIcon } from '@/components/icons/FirebaseIcon';
import { GitIcon } from '@/components/icons/GitIcon';
import { GithubIcon } from '@/components/icons/GithubIcon';
import { HTMLIcon } from '@/components/icons/HTMLIcon';
import { InsomniaIcon } from '@/components/icons/InsomniaIcon';
import { JavascriptIcon } from '@/components/icons/JavascriptIcon';
import { JestIcon } from '@/components/icons/JestIcon';
import { LinuxIcon } from '@/components/icons/LinuxIcon';
import { MongoIcon } from '@/components/icons/MongoIcon';
import { MySqlIcon } from '@/components/icons/MySqlIcon';
import { NextIcon } from '@/components/icons/NextIcon';
import { NodeIcon } from '@/components/icons/NodeIcon';
import { PhotoshopIcon } from '@/components/icons/PhotoshopIcon';
import { PostgresIcon } from '@/components/icons/PostgresIcon';
import { PostmanIcon } from '@/components/icons/PostmanIcon';
import { ReactIcon } from '@/components/icons/ReactIcon';
import { SassIcon } from '@/components/icons/SassIcon';
import { SwaggerIcon } from '@/components/icons/SwaggerIcon';
import { TailwindIcon } from '@/components/icons/TailwindIcon';
import { TypescriptIcon } from '@/components/icons/TypescriptIcon';
import { ViteIcon } from '@/components/icons/ViteIcon';
import { WindowsIcon } from '@/components/icons/WindowsIcon';

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
  { id: 3, icon: 'sass', category: 'front end' },
  { id: 4, icon: 'javascript', category: 'front end/back end' },
  { id: 5, icon: 'typescript', category: 'front end/back end' },
  { id: 6, icon: 'react', category: 'front end' },
  { id: 7, icon: 'vite', category: 'front end' },
  { id: 8, icon: 'next', category: 'front end' },
  { id: 9, icon: 'node', category: 'back end' },
  { id: 10, icon: 'dotnet', category: 'back end' },
  { id: 11, icon: 'git', category: 'versioning' },
  { id: 12, icon: 'github', category: 'versioning' },
  { id: 13, icon: 'aws', category: 'infra' },
  { id: 14, icon: 'azure', category: 'infra' },
  { id: 15, icon: 'jest', category: 'tests' },
  { id: 16, icon: 'linux', category: 'O.S' },
  { id: 17, icon: 'tailwind', category: 'lib' },
  { id: 18, icon: 'docker', category: 'infra' },
  { id: 19, icon: 'mongo', category: 'database' },
  { id: 20, icon: 'mysql', category: 'database' },
  { id: 21, icon: 'firebase', category: 'database' },
  { id: 22, icon: 'postgres', category: 'database' },
  { id: 23, icon: 'windows', category: 'O.S' },
  { id: 24, icon: 'swagger', category: 'docs' },
  { id: 25, icon: 'figma', category: 'miscellaneous' },
  { id: 26, icon: 'dbeaver', category: 'miscellaneous' },
  { id: 27, icon: 'postman', category: 'miscellaneous' },
  { id: 28, icon: 'insomnia', category: 'miscellaneous' },
  { id: 29, icon: 'photoshop', category: 'miscellaneous' }
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
  github: <GithubIcon />,
  aws: <AWSIcon />,
  azure: <AzureIcon />,
  jest: <JestIcon />,
  next: <NextIcon />,
  linux: <LinuxIcon />,
  tailwind: <TailwindIcon />,
  docker: <DockerIcon />,
  mongo: <MongoIcon />,
  mysql: <MySqlIcon />,
  firebase: <FirebaseIcon />,
  postgres: <PostgresIcon />,
  windows: <WindowsIcon />,
  sass: <SassIcon />,
  swagger: <SwaggerIcon />,
  vite: <ViteIcon />,
  figma: <FigmaIcon />,
  dbeaver: <DBeaverIcon />,
  postman: <PostmanIcon />,
  insomnia: <InsomniaIcon />,
  photoshop: <PhotoshopIcon />
};
