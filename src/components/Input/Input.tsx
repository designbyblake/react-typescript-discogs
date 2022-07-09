import { forwardRef } from 'react';
import styles from './Input.module.scss';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, required, ...props }, ref) => (
    <div className={styles.root}>
      <label>
        <span className={styles.label}>{label}</span>
        <input
          type='text'
          ref={ref}
          aria-required={required}
          className={styles.input}
          {...props}
        />
      </label>
    </div>
  )
);

Input.displayName = 'Input';

type InputProps = {
  label: string;
  required?: boolean;
};
