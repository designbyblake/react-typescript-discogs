import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('<Button>', () => {
  it('renders correctly and recieves focus', () => {
    const buttonText = 'Button Text';
    const onClick = jest.fn();
    const onBlur = jest.fn();
    const onFocus = jest.fn();
    render(
      <Button onFocus={onFocus} onClick={onClick} onBlur={onBlur}>
        {buttonText}
      </Button>
    );
    const button = screen.getByTestId('button');
    expect(screen.getByText('Button Text')).toBeInTheDocument();

    userEvent.tab();
    expect(button).toHaveFocus();
    expect(onFocus).toHaveBeenCalled();

    userEvent.tab();
    expect(onBlur).toHaveBeenCalled();

    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
