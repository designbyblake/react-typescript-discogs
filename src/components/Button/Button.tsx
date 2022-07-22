import { forwardRef, AriaAttributes, ButtonHTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      type = 'button',
      variant = 'button',
      className,
      isDisabled,
      ...props
    }: ButtonProps,
    ref
  ) => {
    return (
      <button
        data-testid='button'
        data-style={variant}
        ref={ref}
        type={type}
        className={cn(styles.button, className)}
        aria-disabled={isDisabled}
        disabled={isDisabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export type ButtonProps = {
  children: string | Array<React.ReactElement> | React.ReactElement;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'button' | 'youtube' | 'title';
  isDisabled?: boolean;
} & AriaAttributes &
  Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    'className' | 'type' | 'disabled'
  >;
