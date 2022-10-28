import React, { useState } from 'react';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export const useStyledComponentsRegistry = () => {
  const [styledComponentsStyledSheet] = useState(() => new ServerStyleSheet());

  const styledComponentsFlushEffect = () => {
    const styles = styledComponentsStyledSheet.getStyleElement();
    styledComponentsStyledSheet.seal();
    return <>{styles}</>;
  };

  const StyledComponentsRegistry = ({
    children,
  }: {
    children: JSX.Element;
  }) => (
    <StyleSheetManager sheet={styledComponentsStyledSheet.instance}>
      {children}
    </StyleSheetManager>
  );

  return [StyledComponentsRegistry, styledComponentsFlushEffect] as const;
};
