/* eslint-disable no-nested-ternary */
import { IReleasesEntity, TSortCollection } from 'types';

export const useSortCollection = () => {
  const sortByAlbum = (collection: IReleasesEntity[]) => {
    return collection.sort((a, b) =>
      a.basic_information.title.toLowerCase() >
      b.basic_information.title.toLowerCase()
        ? 1
        : -1
    );
  };

  const sortByDate = (collection: IReleasesEntity[]) => {
    return collection.sort(
      (a, b) =>
        new Date(b.date_added).getTime() - new Date(a.date_added).getTime()
    );
  };

  const sortByNameFilters = (
    a: IReleasesEntity,
    b: IReleasesEntity
  ): number => {
    if (
      a.basic_information?.artists?.[0] &&
      b.basic_information?.artists?.[0]
    ) {
      // ToDo: rewrite to not use nested ternary
      return a?.basic_information.artists[0]?.name?.toLowerCase() >
        b.basic_information.artists[0].name.toLowerCase()
        ? 1
        : a.basic_information.artists[0].name.toLowerCase() ===
          b.basic_information.artists[0].name.toLowerCase()
        ? a.basic_information.title.toLowerCase() >
          b.basic_information.title.toLowerCase()
          ? 1
          : -1
        : -1;
    }
    return 0;
  };

  const sortCollection = ({
    collectionSortBy,
    sortDirection,
    collection,
    displayCollection
  }: TSortCollection) => {
    let sortedCollection = [...collection];
    let sortedCollectionDisplay = [...displayCollection];

    switch (collectionSortBy) {
      case 'date': {
        sortedCollection = sortByDate(sortedCollection);
        sortedCollectionDisplay = sortByDate(sortedCollectionDisplay);
        break;
      }
      case 'album': {
        sortedCollection = sortByAlbum(sortedCollection);
        sortedCollectionDisplay = sortByAlbum(sortedCollectionDisplay);
        break;
      }
      case 'artist': {
        sortedCollection.sort((a, b) => sortByNameFilters(a, b));
        sortedCollectionDisplay.sort((a, b) => sortByNameFilters(a, b));
        break;
      }

      default:
        break;
    }

    if (sortDirection === 'DESC') {
      sortedCollection = sortedCollection.reverse();
      sortedCollectionDisplay.reverse();
    }
    return { sortedCollection, sortedCollectionDisplay };
  };

  return { sortCollection };
};
