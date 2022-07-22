import { Button } from 'components/Button';
import { TCollectionSortBy, TCollectionSortDirection } from 'types';
import styles from './CollectionSort.module.scss';

export const CollectionSort = ({
  setCollectionSortBy,
  setSortDirection,
  isLoaded,
  sortDirection,
  collectionSortBy
}: TCollectionSort) => {
  return (
    <div className={styles.root}>
      <Button
        onClick={() => setCollectionSortBy('artist')}
        isDisabled={!isLoaded}
        aria-pressed={collectionSortBy === 'artist'}
      >
        Sort By Artist
      </Button>
      <Button
        onClick={() => setCollectionSortBy('date')}
        isDisabled={!isLoaded}
        aria-pressed={collectionSortBy === 'date'}
      >
        Sort By Date Added
      </Button>
      <Button
        onClick={() => setCollectionSortBy('album')}
        isDisabled={!isLoaded}
        aria-pressed={collectionSortBy === 'album'}
      >
        Sort By Album
      </Button>
      <Button
        onClick={() => setSortDirection('ASC')}
        isDisabled={!isLoaded}
        aria-pressed={sortDirection === 'ASC'}
      >
        Up
      </Button>
      <Button
        onClick={() => setSortDirection('DESC')}
        isDisabled={!isLoaded}
        aria-pressed={sortDirection === 'DESC'}
      >
        Down
      </Button>
    </div>
  );
};

export type TCollectionSort = {
  setCollectionSortBy: (
    collectionSortBy: TCollectionSortBy['collectionSortBy']
  ) => void;

  setSortDirection: (
    sortDirection: TCollectionSortDirection['sortDirection']
  ) => void;
  isLoaded: boolean;
  sortDirection: TCollectionSortDirection['sortDirection'];
  collectionSortBy: TCollectionSortBy['collectionSortBy'];
};
