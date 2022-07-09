import { useState, useEffect } from 'react';

export type TApiResponse = {
  status: number;
  statusText: string;
  data: any;
  error: any;
  loading: boolean;
};

export const useGetAPI = (url: string): TApiResponse => {
  const [status, setStatus] = useState<number>(0);
  const [statusText, setStatusText] = useState<string>('');
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getAPIData = async () => {
      setLoading(true);
      try {
        const apiResponse = await fetch(url);
        const json = await apiResponse.json();
        setStatus(apiResponse.status);
        setStatusText(apiResponse.statusText);
        setData(json);
      } catch (errorMessage) {
        setError(errorMessage);
      }
      setLoading(false);
    };
    getAPIData();
  }, [url]);

  return { status, statusText, data, error, loading };
};
