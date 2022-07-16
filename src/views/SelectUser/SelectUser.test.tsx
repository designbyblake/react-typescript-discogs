import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { SelectUser } from './SelectUser';

describe('<SelectUser />', () => {
  it('renders required correctly', () => {
    render(<SelectUser />, { wrapper: BrowserRouter });

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();

    const button = screen.getByText(/View Collection/i);
    expect(button).toBeInTheDocument();
  });
});
