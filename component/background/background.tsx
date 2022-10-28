'use client';

import { Box } from '@c/box';
import { Button } from '@c/button';
import { Chevron } from '@c/chevron';
import { Panel } from '@c/panel';
import * as S from './background.style'
import type * as T from './background.type'

const Background = ({ section, goTo }: T.Background) => {
  const { buttonList, id, link, text, who } = section;

  return (
    <S.Background id={id}>
      <Panel title={who} link={link} text={text} id={id}/>

      <Box gap='large'>
        <Box>{buttonList?.map({button, key}) => (
          <Button nuance={key % 2 ? 'light' : 'dark'} key={button}>{button}</Button>
        )}
        </Box>

        <Chevron id={id} goTo={goTo}/>
      </Box>
    </S.Background>
  )
}


export default Background
