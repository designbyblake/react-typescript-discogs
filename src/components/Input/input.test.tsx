import { render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('<Input />', () => {
  it('renders required correctly', () => {
    render(<Input label='label' required />);

    const input = screen.getByLabelText('label');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('aria-required', 'true');
  });

  it('renders not required correctly', () => {
    render(<Input label='label' />);

    const input = screen.getByLabelText('label');
    expect(input).toBeInTheDocument();
    expect(input).not.toHaveAttribute('aria-required');
  });
});
