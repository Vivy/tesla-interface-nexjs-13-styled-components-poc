'use client';

import type { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  color: {
    'gray-tuna': '#393c41',
    shark: '#181b21',
    mercury: '#e3e3e3',
    light: '#fff',
    dark: '#000',
  },
  border: {
    radius: '20',
  },
};

interface ITheme {
  children?: ReactNode;
}

const Theme = ({ children }: ITheme) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
