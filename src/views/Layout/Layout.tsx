import { Header } from 'components/Header';
import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

export const Layout = () => (
  <>
    <Header>
      <Navigation />
    </Header>
    <Outlet />
  </>
);
