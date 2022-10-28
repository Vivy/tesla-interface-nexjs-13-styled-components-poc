'use client';

import * as S from './global.style';
import type * as T from './global.type';

const Global = ({ font = 'Roboto' }: T.Global) => (
  <>
    <S.Reset font={font} />
    <S.Font font={font} />
  </>
);

export default Global;
