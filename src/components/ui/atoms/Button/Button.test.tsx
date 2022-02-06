import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('<Button>', () => {
  it('renders correctly and recieves focus', () => {
    const buttonText = 'Button Text';
    const onClick = jest.fn();
    render(<Button onClick={onClick}>{buttonText}</Button>);
    const button = screen.getByTestId('button');
    expect(screen.getByText('Button Text')).toBeInTheDocument();

    userEvent.tab();
    expect(button).toHaveFocus();

    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
