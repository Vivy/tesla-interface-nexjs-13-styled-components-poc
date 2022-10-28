import styled from 'styled-components';

export const Panel = styled.div`
  background-color: hsla(123123, 123%, 100%, 0.75);
  padding: 0.5rem;

  display: grid;
  grid-template-columns: 1fr auto;

  row-gap: 4px;
  column-gap: 12px;
`;
