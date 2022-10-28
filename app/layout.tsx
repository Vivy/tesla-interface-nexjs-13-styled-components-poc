import { Suspense } from 'react';
import { ErrorBoundary, Global, Theme } from '../component';
import RootStyleRegistry from './root-style';

interface IAppBase {
  children: JSX.Element;
}

const AppBase = ({ children }: IAppBase) => (
  <html>
    <head>
      <title>Tesla UI With NextJS 13</title>
      <meta
        name='description'
        content='Building a UI for Tesla Motors with NextJS 13'
      />
      <meta name='viewport' content='width=device=width, initial-scale=1.0' />
      <meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
    </head>

    <body>
      <Global font='Roboto' />
      <ErrorBoundary>
        <RootStyleRegistry>
          <Theme>{children}</Theme>
        </RootStyleRegistry>
      </ErrorBoundary>
    </body>
  </html>
);

export default AppBase;
