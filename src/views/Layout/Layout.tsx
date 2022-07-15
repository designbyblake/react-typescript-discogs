import { Header } from 'views/Layout/components/Header';
import { Navigation } from 'views/Layout/components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

export const Layout = () => (
  <>
    <Header>
      <Navigation />
    </Header>
    <Outlet />
  </>
);
