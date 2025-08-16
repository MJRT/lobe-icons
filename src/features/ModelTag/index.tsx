import { memo } from 'react';

import ModelIcon from '../ModelIcon';
import { default as Tag, TagProps } from './Tag';

export interface ModelTagProps extends Omit<TagProps, 'icon' | 'children'> {
  model: string;
  type?: 'color' | 'mono';
}
const ModelTag = memo<ModelTagProps>(({ type = 'mono', model, ...rest }) => (
  <Tag icon={<ModelIcon model={model} type={type} />} {...rest}>
    {model}
  </Tag>
));

ModelTag.displayName = 'ModelTag';

export default ModelTag;
