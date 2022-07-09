import { ReactElement } from 'react';
import styles from './Header.module.scss';

export const Header = ({ children }: HeaderProps) => {
  return (
    <div className={styles.root}>
      <div className='container'>{children}</div>
    </div>
  );
};

type HeaderProps = {
  children: ReactElement[] | ReactElement | string;
};
