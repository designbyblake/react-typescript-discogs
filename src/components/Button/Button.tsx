import { forwardRef, AriaAttributes, ButtonHTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      type = 'button',
      btnStyle = 'button',
      className,
      ...props
    }: ButtonProps,
    ref
  ) => {
    return (
      <button
        data-testid='button'
        data-style={btnStyle}
        ref={ref}
        type={type}
        className={cn(styles.button, className)}
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
  btnStyle?: 'button' | 'youtube';
} & AriaAttributes &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'type'>;
