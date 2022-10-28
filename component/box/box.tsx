'use client';

import * as S from './box.style';
import type * as T from './box.type';

const Box = ({ children, gap }: T.Box) => <S.Box gap={gap}>{children}</S.Box>;

export default Box;
