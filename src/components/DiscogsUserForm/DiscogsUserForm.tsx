import { forwardRef } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';

import styles from './DiscogsUserForm.module.scss';

export const DiscogsUserForm = forwardRef<HTMLInputElement, InputProps>(
  ({ label, register, ...props }, ref) => (
    <div className={styles.root}>
      <label>
        {label}
        <input type='text' ref={ref} {...props} />
      </label>

      <label>
        Test
        <input type='text' {...register('test')} />
      </label>
    </div>
  )
);

DiscogsUserForm.displayName = 'DiscogsUserForm';

interface IFormValues {
  test: string;
  userName: string;
}

type InputProps = {
  label: string;
  register: UseFormRegister<IFormValues>;
  required?: boolean;
};
