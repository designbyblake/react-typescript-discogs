import { forwardRef, AriaAttributes, ButtonHTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './YouTubeButton.module.scss';

export const YouTubeButton = forwardRef<HTMLButtonElement, YouTubeButtonProps>(
  (
    {
      children,
      type = 'button',
      className,
      isCurrent,
      ...props
    }: YouTubeButtonProps,
    ref
  ) => {
    return (
      <button
        data-testid='button'
        ref={ref}
        type={type}
        data-is-current={isCurrent}
        className={cn(styles.button, className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

YouTubeButton.displayName = 'YouTubeButton';

export type YouTubeButtonProps = {
  children: string | Array<React.ReactElement> | React.ReactElement;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  isCurrent?: boolean;
} & AriaAttributes &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'type'>;
