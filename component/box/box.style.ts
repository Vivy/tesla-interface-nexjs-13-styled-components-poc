import styled from 'styled-components';

import * as T from './box.type'

const gapMap = {
  small: 16,
  large: 48,
}

export const Box = styled.div<T.Box>`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: ${({ gap= 'small'}) => gapMap[gap] / 16}rem
`
