import { CollectionDirection, CollectionSortBy } from 'constants/collection';
import { IReleasesEntity } from './DiscogsTypes';

export type TCollectionSortBy = {
  collectionSortBy:
    | CollectionSortBy.DATE
    | CollectionSortBy.ARTIST
    | CollectionSortBy.ALBUM;
};

export type TCollectionSortDirection = {
  sortDirection: CollectionDirection.ASC | CollectionDirection.DESC;
};

export type TSortCollection = TCollectionSortBy &
  TCollectionSortDirection & {
    collection: IReleasesEntity[];
    displayCollection: IReleasesEntity[];
  };
