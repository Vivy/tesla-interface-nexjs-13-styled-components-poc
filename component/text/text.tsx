'use client';

import * as S from './text.style';
import type * as T from './text.type';
import { defaultProps } from './text.type';

const Text = ({ children, fullWidth, as, isTitle, ...rest }: T.Text) => (
  <S.Text as={as} fullWidth={fullWidth} isTitle={isTitle} {...rest}>
    {children}
  </S.Text>
);

Text.defaultProps = defaultProps;

export default Text;
