import { fireEvent, render, screen } from '@testing-library/react';
import { CollectionDirection, CollectionSortBy } from 'constants/collection';
import userEvent from '@testing-library/user-event';
import { CollectionSort } from './CollectionSort';

describe('<CollectionSort />', () => {
  const setCollectionSortBy = jest.fn();
  const setSortDirection = jest.fn();

  it('renders correctly', () => {
    render(
      <CollectionSort
        isLoaded
        setCollectionSortBy={setCollectionSortBy}
        setSortDirection={setSortDirection}
        sortDirection={CollectionDirection.DESC}
        collectionSortBy={CollectionSortBy.ARTIST}
      />
    );
    const pressedButtons = screen.getAllByRole('button', { pressed: true });
    // Two buttons should default to pressed, one for sort by and on for sort order
    expect(pressedButtons.length).toEqual(2);

    const artistButton = screen.getByRole('button', { name: 'Sort by Artist' });
    const dateButton = screen.getByRole('button', {
      name: 'Sort by Date Added'
    });
    const titleButton = screen.getByRole('button', {
      name: 'Sort by Album Title'
    });
    const descButton = screen.getByRole('button', {
      name: 'Sort collection in descending order'
    });

    const ascButton = screen.getByRole('button', {
      name: 'Sort collection in ascending order'
    });

    // expect all buttons to be present
    expect(artistButton).toBeInTheDocument();
    expect(dateButton).toBeInTheDocument();
    expect(titleButton).toBeInTheDocument();
    expect(descButton).toBeInTheDocument();
    expect(ascButton).toBeInTheDocument();

    // Artist button works correctly
    userEvent.tab();
    // expect buttons to recieve keyboard focus
    expect(artistButton).toHaveFocus();
    fireEvent.click(artistButton);
    // expect correct function to have been called;
    expect(setCollectionSortBy).toHaveBeenCalled();

    // Date button works correctly
    userEvent.tab();
    expect(dateButton).toHaveFocus();
    // Not really needed as we know there is an accessible name based on how we got the button
    expect(dateButton).toHaveAccessibleName();
    fireEvent.click(dateButton);
    expect(setCollectionSortBy).toHaveBeenCalledTimes(2);

    // Title button works correctly
    userEvent.tab();
    expect(titleButton).toHaveFocus();
    fireEvent.click(titleButton);
    expect(setCollectionSortBy).toHaveBeenCalledTimes(3);

    // Descending button works correctly
    userEvent.tab();
    expect(descButton).toHaveFocus();
    fireEvent.click(descButton);
    expect(setCollectionSortBy).toHaveBeenCalledTimes(3);
    expect(setSortDirection).toHaveBeenCalledTimes(1);

    // Ascending button works correctly
    userEvent.tab();
    expect(ascButton).toHaveFocus();
    fireEvent.click(ascButton);
    expect(setCollectionSortBy).toHaveBeenCalledTimes(3);
    expect(setSortDirection).toHaveBeenCalledTimes(2);
  });
});
