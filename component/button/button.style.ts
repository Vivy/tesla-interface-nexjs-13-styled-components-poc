import styled from 'styled-components';
import * as T from './button.type'

export const Button = styled.button<T.Button>`
  border: 0;
  width: 256px;
  height: 40px;
  padding: 0 1 rem;
  cursor: pointer;
  transition: 250ms;

  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  overflow: hidden;
  text-overflow: ellipsis;

  white-space: nowrap;

  border-radius: 2rem;

  background-color: ${({ theme, nuance}) =>
    nuance === 'light' ? theme.color.mercury : theme.color.sharks};
  color: ${({ theme, nuance }) => 
    nuance === 'light' ? theme.color.shark : theme.color.mercury};
  
  &:hover {
    color: ${({ theme, nuance}) => 
      nuance === 'light' ? theme.color.mercury : theme.color.shark};
    background-color: ${({theme, nuance}) =>  
      nuance === 'light' ? theme.color.shark : theme.color.mercury};
  }
`
