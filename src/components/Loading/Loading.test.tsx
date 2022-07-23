import { render, screen } from '@testing-library/react';
import { Loading } from './Loading';

describe('<Loading>', () => {
  it('renders correctly', () => {
    render(<Loading />);
    const loading = screen.getByText(/Loading.../i);
    expect(loading).toBeInTheDocument();
  });
});
