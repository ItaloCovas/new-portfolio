'use client';
import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { useColors } from '@/hooks/useColors';
import { cn } from '@/utils/cn';
import { DATA_STATES } from '@/constants/colors';

export function ProjectsTab() {
  const { color } = useColors();

  return (
    <Tabs.Root className="flex w-full flex-col" defaultValue="tab1">
      <Tabs.List
        className="flex shrink-0 items-center gap-x-10"
        aria-label="Manage your account"
      >
        <Tabs.Trigger
          className={cn(
            'flex h-[45px] cursor-pointer select-none items-center px-0 text-[15px] leading-none outline-none first:rounded-tl-md last:rounded-tr-md',
            DATA_STATES[color!]
          )}
          value="tab1"
        >
          Todos
        </Tabs.Trigger>
        <Tabs.Trigger
          className={cn(
            'flex h-[45px] cursor-pointer select-none items-center px-0 text-[15px] leading-none outline-none first:rounded-tl-md last:rounded-tr-md',
            DATA_STATES[color!]
          )}
          value="tab2"
        >
          Front End
        </Tabs.Trigger>

        <Tabs.Trigger
          className={cn(
            'flex h-[45px] cursor-pointer select-none items-center px-0 text-[15px] leading-none outline-none first:rounded-tl-md last:rounded-tr-md',
            DATA_STATES[color!]
          )}
          value="tab3"
        >
          Back End
        </Tabs.Trigger>

        <Tabs.Trigger
          className={cn(
            'flex h-[45px] cursor-pointer select-none items-center px-0 text-[15px] leading-none outline-none first:rounded-tl-md last:rounded-tr-md',
            DATA_STATES[color!]
          )}
          value="tab4"
        >
          Fullstack
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content
        className="grow rounded-b-md p-5 pl-0 text-white outline-none"
        value="tab1"
      >
        TAB1
      </Tabs.Content>
      <Tabs.Content
        className="grow rounded-b-md p-5 pl-0 text-white outline-none"
        value="tab2"
      >
        TAB2
      </Tabs.Content>
      <Tabs.Content
        className="grow rounded-b-md p-5 pl-0 text-white outline-none"
        value="tab3"
      >
        tab3
      </Tabs.Content>
      <Tabs.Content
        className="grow rounded-b-md p-5 pl-0 text-white outline-none"
        value="tab4"
      >
        tab4
      </Tabs.Content>
    </Tabs.Root>
  );
}
