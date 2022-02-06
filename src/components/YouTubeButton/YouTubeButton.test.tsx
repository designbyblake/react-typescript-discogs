import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { YouTubeButton } from './YouTubeButton';

describe('<YouTubeButton>', () => {
  it('renders correctly and recieves focus', () => {
    const buttonText = 'Button Text';
    const onClick = jest.fn();
    const onBlur = jest.fn();
    const onFocus = jest.fn();
    render(
      <YouTubeButton onFocus={onFocus} onClick={onClick} onBlur={onBlur}>
        {buttonText}
      </YouTubeButton>
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
