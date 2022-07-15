import { Navigation } from 'views/Layout/components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { Header } from 'views/Layout/components/Header';

export const Layout = () => (
  <>
    <Header>
      <Navigation />
    </Header>
    <Outlet />
  </>
);
