import { render, screen } from '@testing-library/react';
import { CollectionHeader } from './CollectionHeader';

describe('<CollectionHeader />', () => {
  it('renders loading correctly', () => {
    render(
      <CollectionHeader
        userName='designbyblake'
        collectionSize={200}
        collectionLength={100}
        isLoading={false}
        isError={false}
      />
    );
    const heading = screen.getByText(/100 out of 200 loaded/i);
    expect(heading).toBeInTheDocument();
  });

  it('renders fully loaded correct', () => {
    render(
      <CollectionHeader
        userName='designbyblake'
        collectionSize={200}
        collectionLength={200}
        isLoading={false}
        isError={false}
      />
    );

    const heading = screen.getByText(/Collection Size, 200/i);
    expect(heading).toBeInTheDocument();
  });
});
