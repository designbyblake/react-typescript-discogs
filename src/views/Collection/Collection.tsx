import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BackgroundImage } from 'components/BackgroundImage';
import { Listing } from 'views/Collection/components/Listing';
import { useInfiniteQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ReleasesEntity } from 'types';
import cn from 'classnames';
import { Button } from 'components/Button';
import { useSortCollection } from './hooks';
import { CollectionHeader } from './components/CollectionHeader';

import styles from './Collection.module.scss';

export const Collection = () => {
  const { sortCollection } = useSortCollection();
  const [collection, setCollection] = useState<ReleasesEntity[]>([]);
  const [displayCollection, setDisplayCollection] = useState<ReleasesEntity[]>(
    []
  );
  const [collectionSize, setCollectionSize] = useState<number>();
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

  const doSortCollection = (type: 'date' | 'artist' | 'album') => {
    const { sortedCollection, sortedCollectionDisplay } = sortCollection(
      type,
      collection,
      displayCollection
    );

    setCollection(sortedCollection);
    setDisplayCollection(sortedCollectionDisplay);
  };

  useEffect(() => {
    if (hasNextPage && !isFetchingNextPage)
      setTimeout(() => {
        fetchNextPage();
      }, 1000);
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  useEffect(() => {
    const records: ReleasesEntity[] = [];
    data?.pages?.map((group) => {
      group.response?.map((record: ReleasesEntity) => records.push(record));
      return false;
    });
    setCollection(records);
    setDisplayCollection(records);
  }, [data]);

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
        <Button onClick={() => doSortCollection('date')}>
          Sort By Date Added
        </Button>
        <Button onClick={() => doSortCollection('artist')}>
          Sort By Artist
        </Button>
        <Button onClick={() => doSortCollection('album')}>Sort By Album</Button>
        <ul data-element='collection'>
          {displayCollection?.map((record: ReleasesEntity) => (
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
