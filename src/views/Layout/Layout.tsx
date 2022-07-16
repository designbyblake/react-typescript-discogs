import { Navigation } from 'views/Layout/components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { Header } from 'views/Layout/components/Header';

export const Layout = () => (
  <div data-testid='layout'>
    <Header>
      <Navigation />
    </Header>
    <Outlet />
  </div>
);
