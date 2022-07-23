import { Button, Icon } from 'components';
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
      <fieldset aria-label='Sort Collection By:'>
        <Button
          onClick={() => setCollectionSortBy('artist')}
          isDisabled={!isLoaded}
          aria-pressed={collectionSortBy === 'artist'}
          aria-label='Sort by Artist'
        >
          Artist
        </Button>
        <Button
          onClick={() => setCollectionSortBy('date')}
          isDisabled={!isLoaded}
          aria-pressed={collectionSortBy === 'date'}
          aria-label='Sort by Date Added'
        >
          Date Added
        </Button>
        <Button
          onClick={() => setCollectionSortBy('album')}
          isDisabled={!isLoaded}
          aria-pressed={collectionSortBy === 'album'}
          aria-label='Sort by Album Title'
        >
          Album Title
        </Button>
      </fieldset>
      <fieldset aria-label='Sort Order'>
        <Button
          onClick={() => setSortDirection('DESC')}
          isDisabled={!isLoaded}
          aria-pressed={sortDirection === 'DESC'}
        >
          <Icon alt='Sort collection in descending order' type='arrow-down' />
        </Button>
        <Button
          onClick={() => setSortDirection('ASC')}
          isDisabled={!isLoaded}
          aria-pressed={sortDirection === 'ASC'}
        >
          <Icon alt='Sort collection in acending order' type='arrow-up' />
        </Button>
      </fieldset>
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
