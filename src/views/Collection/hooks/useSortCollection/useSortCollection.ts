/* eslint-disable no-nested-ternary */
import { ReleasesEntity } from 'types';
import sortBy from 'lodash/sortBy';

export const useSortCollection = () => {
  const sortCollection = (
    type: 'date' | 'artist' | 'album',
    collection: ReleasesEntity[],
    collectionDisplay: ReleasesEntity[]
  ) => {
    let sortedCollection = [...collection];
    let sortedCollectionDisplay = [...collectionDisplay];

    switch (type) {
      case 'date': {
        sortedCollection = sortBy(sortedCollection, (o: ReleasesEntity) => {
          return o?.date_added;
        }).reverse();

        sortedCollectionDisplay = sortBy(
          sortedCollectionDisplay,
          (o: ReleasesEntity) => {
            return o?.date_added;
          }
        ).reverse();
        break;
      }
      case 'album': {
        sortedCollection = sortBy(sortedCollection, (o: ReleasesEntity) => {
          return o?.basic_information?.title;
        });

        sortedCollectionDisplay = sortBy(
          sortedCollectionDisplay,
          (o: ReleasesEntity) => {
            return o?.basic_information?.title;
          }
        );
        break;
      }
      case 'artist': {
        sortedCollection = sortBy(sortedCollection, (o: ReleasesEntity) => {
          return o?.basic_information?.artists?.[0].name;
        });

        sortedCollectionDisplay = sortBy(
          sortedCollectionDisplay,
          (o: ReleasesEntity) => {
            return o?.basic_information?.artists?.[0].name;
          }
        );
        break;
      }

      default:
        break;
    }

    return { sortedCollection, sortedCollectionDisplay };
  };

  return { sortCollection };
};
