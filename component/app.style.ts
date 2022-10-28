'use client'

import styled from 'styled-components'

interface IBox {
  gap: 'tiny' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'none'
}

const gapMap = {
  none: '0',
  tiny: '0.25rem',
  small: '0.5rem',
  medium: '0.75rem',
  large: '1rem',
  xl: '2rem',
  xxl: '3rem',
}

export const Box = styled.div<IBox>`
  display: flex;
  flex-direction: column;

  gap: ${({ gap = 'none' }) => gapMap[gap]}
`
