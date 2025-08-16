import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ prefixCls, css, token }) => ({
  borderless: css`
    border: none;
    background: none;
    box-shadow: none;
  `,
  filled: css`
    background: ${token.colorFillTertiary};
  `,
  large: css`
    &.${prefixCls}-tag {
      height: 28px;
      padding-inline: 12px;
      border-radius: 6px;
    }
  `,
  outlined: css`
    border: 1px solid ${token.colorBorderSecondary};
    background: ${token.colorBgContainer};
  `,
  root: css`
    color: ${token.colorTextSecondary};
    &.${prefixCls}-tag {
      user-select: none;

      display: flex;
      gap: 0.4em;
      align-items: center;
      justify-content: center;

      width: fit-content;
      height: 22px;
      margin: 0;
      border-radius: 3px;

      line-height: 1.2;

      span {
        margin: 0;
      }
    }
  `,
  small: css`
    &.${prefixCls}-tag {
      height: 20px;
      padding-inline: 4px;
    }
  `,
}));
