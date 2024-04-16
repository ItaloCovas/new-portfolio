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
  { name: 'home', pathname: '' },
  { name: 'aboutMe', pathname: '/about-me' },
  { name: 'myProjects', pathname: '/my-projects' },
  { name: 'blog', pathname: '/blog' },
  {
    name: 'coffeeChat',
    pathname: 'https://calendly.com/italocovas/coffee-chat'
  }
];

export const STACK_ICONS_LIST = [
  { id: 1, icon: 'html', category: 'front end', name: 'HTML' },
  { id: 2, icon: 'css', category: 'front end', name: 'CSS' },
  { id: 3, icon: 'sass', category: 'front end', name: 'SASS' },
  {
    id: 4,
    icon: 'javascript',
    category: 'front end/back end',
    name: 'Javascript'
  },
  {
    id: 5,
    icon: 'typescript',
    category: 'front end/back end',
    name: 'Typescript'
  },
  { id: 6, icon: 'react', category: 'front end', name: 'React' },
  { id: 7, icon: 'vite', category: 'front end', name: 'Vite' },
  { id: 8, icon: 'next', category: 'front end', name: 'NextJS' },
  { id: 9, icon: 'node', category: 'back end', name: 'Node' },
  { id: 10, icon: 'dotnet', category: 'back end', name: '.NET' },
  { id: 11, icon: 'git', category: 'versioning', name: 'Git' },
  { id: 12, icon: 'github', category: 'versioning', name: 'Github' },
  { id: 13, icon: 'aws', category: 'infra', name: 'AWS' },
  { id: 14, icon: 'azure', category: 'infra', name: 'Azure Devops' },
  { id: 15, icon: 'jest', category: 'tests', name: 'Jest' },
  { id: 16, icon: 'tailwind', category: 'lib', name: 'Tailwind' },
  { id: 17, icon: 'docker', category: 'infra', name: 'Docker' },
  { id: 18, icon: 'mongo', category: 'database', name: 'MongoDB' },
  { id: 19, icon: 'mysql', category: 'database', name: 'MySql' },
  { id: 20, icon: 'firebase', category: 'database', name: 'Firebase' },
  { id: 21, icon: 'postgres', category: 'database', name: 'PostgreSQL' },
  { id: 22, icon: 'swagger', category: 'docs', name: 'Swagger' },
  { id: 23, icon: 'figma', category: 'miscellaneous', name: 'Figma' },
  { id: 24, icon: 'postman', category: 'miscellaneous', name: 'Postman' },
  { id: 25, icon: 'insomnia', category: 'miscellaneous', name: 'Insomnia' },
  { id: 26, icon: 'photoshop', category: 'miscellaneous', name: 'Photoshop' },
  { id: 27, icon: 'dbeaver', category: 'miscellaneous', name: 'DBeaver' },
  { id: 28, icon: 'windows', category: 'O.S', name: 'Windows' },
  { id: 29, icon: 'linux', category: 'O.S', name: 'Linux' }
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
