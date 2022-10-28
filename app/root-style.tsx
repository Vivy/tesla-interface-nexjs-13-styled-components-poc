'use client';

import { useServerInsertedHTML } from 'next/navigation';
import { useStyledComponentsRegistry } from '../lib';

const RootStyleRegistry = ({ children }: { children: JSX.Element }) => {
  const [StyledComponentsRegistry, styledComponentsFlushEffect] =
    useStyledComponentsRegistry();

  useServerInsertedHTML(() => {
    return <>{styledComponentsFlushEffect()}</>;
  });

  return (
    <StyledComponentsRegistry data-testid='test'>
      {children}
    </StyledComponentsRegistry>
  );
};

export default RootStyleRegistry;
