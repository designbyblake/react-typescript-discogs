import { ReactComponent as Vinyl } from 'assets/images/record2.svg';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

export const Navigation = () => {
  return (
    <nav className={styles.root}>
      <NavLink to='/' aria-label='Home'>
        <span className={styles.vinyl} aria-hidden='true'>
          <Vinyl />
        </span>
      </NavLink>
      <NavLink to='/'>Change User</NavLink>

      <NavLink to='/collection'>Collection</NavLink>
    </nav>
  );
};
