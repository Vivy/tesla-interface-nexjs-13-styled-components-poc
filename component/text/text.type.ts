import type { ReactNode } from 'react';

export interface StyledText {
  isTitle?: boolean;
  fullWidth?: boolean;
  href?: string;
  as?: 'p' | 'div' | 'h1' | 'h2' | 'a' | 'span';
}

export interface Text extends StyledText {
  children: ReactNode;
}

export const defaultProps = {
  isTitle: false,
  fullWidth: false,
  as: 'p',
  children: null,
};
