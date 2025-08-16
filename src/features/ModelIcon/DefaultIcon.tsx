import { useTheme } from 'antd-style';
import { Brain } from 'lucide-react';
import { CSSProperties, memo } from 'react';

interface DefaultIconProps {
  className?: string;
  color?: string;
  size?: number;
  style?: CSSProperties;
}

const DefaultAvatar = memo<DefaultIconProps>(({ color, size = 12, ...rest }) => {
  const theme = useTheme();
  return <Brain color={color || theme.colorTextDescription} size={size} {...rest} />;
});

export default DefaultAvatar;
