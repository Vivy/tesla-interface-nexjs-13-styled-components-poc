import styled from 'styled-components';
import { rootCertificates } from 'tls';

import type * as T from './chevron.type';

export const Chevron = styled.a<T.Chevron>`
  width: 48px;
  height: 48px;
  transition: 250ms;
  border-radius: 50%;
  display: inline-block;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    fill: ${({ theme }) => theme.color.mercury};
    background-color: ${({ theme }) => theme.color.shark};
  }
  ${({ id }) =>
    id === 'accessories'
      ? `cursor: n-resize transform: rotate(180deg)`
      : ` cursor: s-resize`}
`;
