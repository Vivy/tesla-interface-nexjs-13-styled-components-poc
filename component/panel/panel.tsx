'use client';

import { Text } from '@c/text';
import * as S from './panel.style';
import type * as T from './panel.type';

const Panel = ({ title, link, text, id }: T.Panel) => (
  <S.Panel>
    <Text isTitle as='h1' fullWidth>
      {title}
    </Text>

    {text && (
      <Text as='p' fullWidth={!link}>
        {text}
      </Text>
    )}

    {link && (
      <Text href={`#${id}`} as='a'>
        {link}
      </Text>
    )}
  </S.Panel>
);

export default Panel;
