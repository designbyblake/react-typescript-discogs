import { useParams } from 'react-router-dom';
import { BackgroundImage } from 'components/BackgroundImage';
import { Listing } from 'components/Listing';
import cn from 'classnames';
import { useInfiniteQuery } from 'react-query';

import { useEffect } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';

import styles from './Collection.module.scss';

export const Collection = () => {
  const { userName } = useParams();

  const fetchCollection = async ({ pageParam = 1 }) => {
    const apiResponse = await fetch(
      `${process.env.REACT_APP_ENDPOINT}/collection/${userName}/${pageParam}`
    );
    const json = await apiResponse.json();
    const currentPage = json.pagination?.page;
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
          {data?.pages.map((group) =>
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
      </div>
      <ReactQueryDevtools />
    </>
  );
};
