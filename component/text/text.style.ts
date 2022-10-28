import styled from 'styled-components';
import type { StyledText } from './text.type';

const sizeMap = {
  small: 14,
  large: 48,
};

export const Text = styled.div<StyledText>`
  display: flex;
  white-space: nowrap;
  justify-self: center;

  ${({ fullWidth = false }) => (fullWidth ? `grid-colum: 1/-1;` : '')};
  color: ${({ theme }) => theme.color['gray-tuna']};

  ${({ isTitle = false }) =>
    isTitle
      ? `font-size: ${sizeMap.large / 16}rem;
  justify-content: center;
  text-transform: capitalize;
  padding: 0.5rem;`
      : `font-size: ${sizeMap.small / 16}rem;`}

  ${({ as, theme }) =>
    as === 'a'
      ? `text-decoration: none;
    border-bottom: 1px solid ${theme.color[`gray-tuna`]};
    `
      : ``}
`;
