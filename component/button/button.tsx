'use client';
import * as S from './button.style';
import type * as T from './button.type';

const Button = ({ children, nuance }: T.Button) => (
  <S.Button nuance={nuance}>{children}</S.Button>
);

export default Button;
