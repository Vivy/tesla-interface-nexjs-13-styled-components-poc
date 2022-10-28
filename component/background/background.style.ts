import styled from 'styled-components';

import * as T from './background.type';

export const Background = styled.div<T.StyledBackground>`
  height: 100vh;
  width: 100vw;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-image: url(/image/background/${({ id }) => id}-mobile.jpg);
  background-size: cover;
  background-position: center;

  @media screen and (min-width: 768px) {
    background-image: url(/image/background/${({ id }) => id}.jpg);
  }
`;
