import { useParams } from 'react-router-dom';
import { BackgroundImage } from 'components/BackgroundImage';
import { Listing } from 'views/Collection/components/Listing';
import cn from 'classnames';
import { useInfiniteQuery } from 'react-query';

import { useEffect, useState } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ReleasesEntity } from 'types';

import { CollectionHeader } from './components/CollectionHeader';
import styles from './Collection.module.scss';

export const Collection = () => {
  const [collection, setCollection] = useState<ReleasesEntity[]>([]);
  // const [isFullyLoaded, setIsFullyLoaded] = useState<boolean>(false);
  const [collectionSize, setCollectionSize] = useState<number>();
  const { userName } = useParams();

  const fetchCollection = async ({ pageParam = 1 }) => {
    const apiResponse = await fetch(
      `${process.env.REACT_APP_ENDPOINT}/collection/${userName}/${pageParam}`
    );
    const json = await apiResponse.json();
    // console.log(json);
    const currentPage = json.pagination?.page;
    if (currentPage === 1) setCollectionSize(json.pagination?.items);
    const nextPage =
      currentPage !== json.pagination?.pages
        ? parseInt(currentPage, 10) + 1
        : false;
    // setIsFullyLoaded(nextPage === false);

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
    const records: ReleasesEntity[] = [];
    data?.pages?.map((group) => {
      group.response?.map((record: ReleasesEntity) => records.push(record));
      return false;
    });
    setCollection(records);
  }, [data]);
  if (isLoading) {
    return (
      <div className={cn(styles.root, 'container')}>
        <BackgroundImage />
        <h1>Is loading</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div className={cn(styles.root, 'container')}>
        <BackgroundImage />
        <h1>Is Error</h1>
      </div>
    );
  }

  return (
    <>
      <BackgroundImage />
      <div className={cn(styles.root, 'container')}>
        <CollectionHeader
          userName={userName}
          collectionSize={collectionSize}
          collectionLength={collection.length}
        />
        <ul data-element='collection'>
          {collection?.map((record: ReleasesEntity) => (
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
