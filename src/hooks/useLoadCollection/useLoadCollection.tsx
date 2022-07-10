import { useState, useEffect } from 'react';
import { ReleasesEntity } from 'types';

export type TApiResponse = {
  status: number;
  statusText: string;
  data: any;
  error: any;
  loading: boolean;
  collection: ReleasesEntity[];
};

export const useLoadCollection = (userName: string): TApiResponse => {
  const [collection, setCollection] = useState<ReleasesEntity[]>([]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [status, setStatus] = useState<number>(0);
  const [statusText, setStatusText] = useState<string>('');
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [fetchURL, setFetchURL] = useState<string>(
    `${process.env.REACT_APP_ENDPOINT}/collection/${userName}/${currentPage}`
  );

  useEffect(() => {
    if (currentPage === 1) setCollection([]);
  }, [currentPage]);

  useEffect(() => {
    const getAPIData = async () => {
      try {
        const apiResponse = await fetch(fetchURL);
        const json = await apiResponse.json();
        setStatus(apiResponse.status);
        setStatusText(apiResponse.statusText);
        setData(json);
        if (json.releases) {
          //   console.log(json.releases);
          setCollection((prevState) => {
            return [...prevState, ...json.releases];
          });
        }
        const { page, pages } = json.pagination;
        if (page < pages) {
          setCurrentPage(page + 1);
          setFetchURL(
            `${process.env.REACT_APP_ENDPOINT}/collection/${userName}/${
              page + 1
            }`
          );
        }
      } catch (errorMessage) {
        setError(errorMessage);
      }
      setLoading(false);
    };

    getAPIData();

    return () => {
      setCollection([]);
      setFetchURL(
        `${process.env.REACT_APP_ENDPOINT}/collection/${userName}/${currentPage}`
      );
    };
  }, [currentPage, fetchURL, userName]);

  return { status, statusText, data, error, loading, collection };
};
