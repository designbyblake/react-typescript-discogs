/* eslint-disable @typescript-eslint/no-unused-vars */
import { useParams } from 'react-router-dom';
// import { useLoadCollection } from 'hooks/useLoadCollection/useLoadCollection';
import { BackgroundImage } from 'components/BackgroundImage';
import { Listing } from 'components/Listing';
import cn from 'classnames';
import { useQuery, useInfiniteQuery } from 'react-query';

import { useEffect } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import styles from './Collection.module.scss';

export const Collection = () => {
  const { userName } = useParams();
  //   const { collection, loading } = useLoadCollection(userName || '');
  const fetchCollection = async ({
    pageParam = `${process.env.REACT_APP_ENDPOINT}/collection/${userName}/1`
  }) => {
    const apiResponse = await fetch(pageParam);
    const json = await apiResponse.json();
    console.log(json);
    return { response: json.releases, nextPage: json.pagination?.urls?.next };
  };

  //   const fetchURL = `${process.env.REACT_APP_ENDPOINT}/collection/${userName}/1`;
  //   const { data, isError, isLoading } = useQuery('collection', async () => {
  //     const apiResponse = await fetch(fetchURL);
  //     const json = await apiResponse.json();
  //     console.log(json);
  //     return json.releases;
  //   });

  //
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
    isLoading,
    isError
  } = useInfiniteQuery(['projects'], fetchCollection, {
    getNextPageParam: (lastPage) => lastPage.nextPage
  });

  useEffect(() => {
    if (hasNextPage && !isFetchingNextPage)
      setTimeout(() => {
        fetchNextPage();
      }, 10000);
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (isLoading) {
    return (
      <>
        <BackgroundImage />
        <h1>Is loading</h1>;
      </>
    );
  }

  if (isError) {
    return (
      <>
        <BackgroundImage />
        <h1>Is Error</h1>;
      </>
    );
  }

  return (
    <>
      <BackgroundImage />
      <div className={cn(styles.root, 'container')}>
        <ul data-element='collection'>
          {data?.pages.map((group, i) =>
            group.response.map((record: any) => (
              <li
                key={`${record.instance_id}-${record.date_added}`}
                style={{ maxWidth: '320px' }}
              >
                <Listing basicInformation={record.basic_information} />
              </li>
            ))
          )}
        </ul>
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {/* eslint-disable-next-line no-nested-ternary */}
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
            ? 'Load More'
            : 'Nothing more to load'}
        </button>
      </div>
      <ReactQueryDevtools />
    </>
  );
};
