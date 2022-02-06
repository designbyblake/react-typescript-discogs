import { render, screen } from '@testing-library/react';
import { AlbumCover } from './AlbumCover';

describe('<AlbumCover>', () => {
  it('renders correctly', () => {
    render(<AlbumCover alt='This is alt text' src='test.jpg' />);
    const bg = screen.getByTestId('album-cover');
    expect(bg).toBeInTheDocument();
  });
});
