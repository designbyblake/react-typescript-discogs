import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BackgroundImage } from 'components/BackgroundImage';
import { useInfiniteQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import {
  IReleasesEntity,
  TCollectionSortBy,
  TCollectionSortDirection
} from 'types';
import cn from 'classnames';
import {
  CollectionHeader,
  CollectionSort,
  Listing
} from 'views/Collection/components/';

import { useSortCollection } from './hooks';

import styles from './Collection.module.scss';

export const Collection = () => {
  const { sortCollection } = useSortCollection();
  const [collection, setCollection] = useState<IReleasesEntity[]>([]);
  const [displayCollection, setDisplayCollection] = useState<IReleasesEntity[]>(
    []
  );

  const [collectionSortBy, setCollectionSortBy] =
    useState<TCollectionSortBy['collectionSortBy']>('artist');
  const [sortDirection, setSortDirection] =
    useState<TCollectionSortDirection['sortDirection']>('ASC');
  const [collectionSize, setCollectionSize] = useState<number>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const { userName } = useParams();

  const fetchCollection = async ({ pageParam = 1 }) => {
    const apiResponse = await fetch(
      `${process.env.REACT_APP_ENDPOINT}/collection/${userName}/${pageParam}`
    );
    const json = await apiResponse.json();
    const currentPage = json.pagination?.page;
    if (currentPage === 1) setCollectionSize(json.pagination?.items);
    const nextPage =
      currentPage !== json.pagination?.pages
        ? parseInt(currentPage, 10) + 1
        : false;

    return { response: json.releases, nextPage };
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError
  } = useInfiniteQuery(['projects'], fetchCollection, {
    getNextPageParam: (lastPage) => lastPage.nextPage
  });

  useEffect(() => {
    if (hasNextPage && !isFetchingNextPage)
      setTimeout(() => {
        fetchNextPage();
      }, 1000);
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  useEffect(() => {
    const records: IReleasesEntity[] = [];
    data?.pages?.map((group) => {
      group.response?.map((record: IReleasesEntity) => records.push(record));
      return false;
    });
    setCollection(records);
    setDisplayCollection(records);
  }, [data]);

  useEffect(() => {
    const { sortedCollection, sortedCollectionDisplay } = sortCollection({
      collectionSortBy,
      sortDirection,
      collection,
      displayCollection
    });

    setCollection(sortedCollection);
    setDisplayCollection(sortedCollectionDisplay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionSortBy, sortDirection]);

  useEffect(() => {
    if (collectionSize === collection.length) setIsLoaded(true);
  }, [collection, collectionSize]);

  return (
    <>
      <BackgroundImage />
      <div className={cn(styles.root, 'container')}>
        <CollectionHeader
          userName={userName}
          collectionSize={collectionSize}
          collectionLength={collection.length}
          isError={isError}
          isLoading={isLoading}
        />
        <CollectionSort
          isLoaded={isLoaded}
          setCollectionSortBy={setCollectionSortBy}
          setSortDirection={setSortDirection}
          sortDirection={sortDirection}
          collectionSortBy={collectionSortBy}
        />

        <ul data-element='collection'>
          {displayCollection?.map((record: IReleasesEntity) => (
            <li
              key={`${record.instance_id}-${record.date_added}`}
              style={{ maxWidth: '320px' }}
            >
              <Listing basicInformation={record.basic_information} />
            </li>
          ))}
        </ul>
      </div>
      <ReactQueryDevtools />
    </>
  );
};
