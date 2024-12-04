'use client';

import { memo } from 'react';

import IconCombine, { type IconCombineProps } from '@/features/IconCombine';

import { SPACE_MULTIPLE, TEXT_MULTIPLE, TITLE } from '../style';
import Avatar from './Avatar';
import Text from './Text';

export type CombineProps = Omit<IconCombineProps, 'Icon' | 'Text'>;
const Combine = memo<CombineProps>(({ iconProps, ...rest }) => {
  return (
    <IconCombine
      Icon={Avatar}
      Text={Text}
      aria-label={TITLE}
      iconProps={{ shape: 'square', ...iconProps }}
      spaceMultiple={SPACE_MULTIPLE}
      textMultiple={TEXT_MULTIPLE}
      {...rest}
    />
  );
});

export default Combine;
