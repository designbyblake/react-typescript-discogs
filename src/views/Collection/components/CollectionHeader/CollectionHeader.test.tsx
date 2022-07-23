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

  it('renders loading message', () => {
    render(
      <CollectionHeader
        userName='designbyblake'
        collectionSize={200}
        collectionLength={200}
        isLoading
        isError={false}
      />
    );

    const heading = screen.getByText(/designbyblake's Collection/i);
    expect(heading).toBeInTheDocument();
  });

  it('renders error message', () => {
    render(
      <CollectionHeader
        userName='designbyblake'
        collectionSize={200}
        collectionLength={200}
        isLoading={false}
        isError
      />
    );

    const heading = screen.getByText(/Something has gone wrong/i);
    expect(heading).toBeInTheDocument();
  });
});
