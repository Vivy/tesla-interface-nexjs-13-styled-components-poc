import type { ReactNode } from 'react';

export type section = {
  id: string
  link: string
  text: string
  who: string
  buttonList: string[]
}

export interface StyledBackground {
  id?: string
  children?: ReactNode
}

export interface Background extends StyledBackground {
  children?: ReactNode
  section: section
  goTo: string
}
