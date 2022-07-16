import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './Layout';

describe('<Input />', () => {
  it('renders required correctly', () => {
    render(<Layout />, { wrapper: BrowserRouter });

    const layout = screen.getByTestId('layout');
    expect(layout).toBeInTheDocument();
  });
});
