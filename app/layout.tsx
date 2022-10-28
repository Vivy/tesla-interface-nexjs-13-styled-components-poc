import type { Suspense } from 'react';
import { ErrorBoundry } from '../componenet';
import ErrorPage from './error';
import PageIsLoading from './loading';
import RootStyleRegistry from './root-style';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>{children}</body>
    </html>
  );
}
