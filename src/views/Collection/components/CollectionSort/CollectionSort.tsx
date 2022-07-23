import { Button, Icon } from 'components';
import { TCollectionSortBy, TCollectionSortDirection } from 'types';
import { CollectionDirection, CollectionSortBy } from 'constants/collection';
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
          onClick={() => setCollectionSortBy(CollectionSortBy.ARTIST)}
          isDisabled={!isLoaded}
          aria-pressed={collectionSortBy === CollectionSortBy.ARTIST}
          aria-label='Sort by Artist'
        >
          Artist
        </Button>
        <Button
          onClick={() => setCollectionSortBy(CollectionSortBy.DATE)}
          isDisabled={!isLoaded}
          aria-pressed={collectionSortBy === CollectionSortBy.DATE}
          aria-label='Sort by Date Added'
        >
          Date Added
        </Button>
        <Button
          onClick={() => setCollectionSortBy(CollectionSortBy.ALBUM)}
          isDisabled={!isLoaded}
          aria-pressed={collectionSortBy === CollectionSortBy.ALBUM}
          aria-label='Sort by Album Title'
        >
          Album Title
        </Button>
      </fieldset>
      <fieldset aria-label='Sort Order'>
        <Button
          onClick={() => setSortDirection(CollectionDirection.DESC)}
          isDisabled={!isLoaded}
          aria-pressed={sortDirection === CollectionDirection.DESC}
        >
          <Icon alt='Sort collection in descending order' type='arrow-down' />
        </Button>
        <Button
          onClick={() => setSortDirection(CollectionDirection.ASC)}
          isDisabled={!isLoaded}
          aria-pressed={sortDirection === CollectionDirection.ASC}
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
