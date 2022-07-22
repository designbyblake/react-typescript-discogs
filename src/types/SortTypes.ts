import { IReleasesEntity } from './DiscogsTypes';

export type TCollectionSortBy = {
  collectionSortBy: 'date' | 'artist' | 'album';
};

export type TCollectionSortDirection = {
  sortDirection: 'ASC' | 'DESC';
};

export type TSortCollection = TCollectionSortBy &
  TCollectionSortDirection & {
    collection: IReleasesEntity[];
    displayCollection: IReleasesEntity[];
  };
