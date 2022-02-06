import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BackgroundImage } from './BackgroundImage';

describe('<BackgroundImage>', () => {
  it('renders correctly', () => {
    render(<BackgroundImage />);
    const bg = screen.getByTestId('background-image');
    expect(bg).toBeInTheDocument();
  });
});
