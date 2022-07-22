/* eslint-disable no-nested-ternary */
import { IReleasesEntity, TSortCollection } from 'types';
import sortBy from 'lodash/sortBy';

export const useSortCollection = () => {
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
        sortedCollection = sortBy(sortedCollection, (o: IReleasesEntity) => {
          return o?.date_added;
        }).reverse();

        sortedCollectionDisplay = sortBy(
          sortedCollectionDisplay,
          (o: IReleasesEntity) => {
            return o?.date_added;
          }
        ).reverse();
        break;
      }
      case 'album': {
        sortedCollection = sortBy(sortedCollection, (o: IReleasesEntity) => {
          return o?.basic_information?.title;
        });

        sortedCollectionDisplay = sortBy(
          sortedCollectionDisplay,
          (o: IReleasesEntity) => {
            return o?.basic_information?.title;
          }
        );
        break;
      }
      case 'artist': {
        sortedCollection = sortBy(sortedCollection, (o: IReleasesEntity) => {
          return o?.basic_information?.artists?.[0].name;
        });

        sortedCollectionDisplay = sortBy(
          sortedCollectionDisplay,
          (o: IReleasesEntity) => {
            return o?.basic_information?.artists?.[0].name;
          }
        );
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
