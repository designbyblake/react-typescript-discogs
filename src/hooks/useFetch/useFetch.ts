import { useEffect, useRef, useReducer } from 'react';

export const useFetch = (url: string) => {
  const cache = useRef<any>({});

  const initialState = {
    status: 'idle',
    error: false,
    data: []
  };

  const [state, dispatch] = useReducer(
    // eslint-disable-next-line @typescript-eslint/no-shadow
    (state: any, action: { type: string; payload?: any }) => {
      switch (action.type) {
        case 'FETCHING':
          return { ...initialState, status: 'fetching' };
        case 'FETCHED':
          return { ...initialState, status: 'fetched', data: action.payload };
        case 'FETCH_ERROR':
          return { ...initialState, status: 'error', error: action.payload };
        default:
          return state;
      }
    },
    initialState
  );

  useEffect(() => {
    let cancelRequest = false;
    if (!url || !url.trim()) return;

    const fetchData = async () => {
      dispatch({ type: 'FETCHING' });
      if (cache.current[url]) {
        const data = cache.current[url];
        dispatch({ type: 'FETCHED', payload: data });
      } else {
        try {
          const response = await fetch(url);
          const data = await response.json();
          cache.current[url] = data;
          if (cancelRequest) return;
          dispatch({ type: 'FETCHED', payload: data });
        } catch (error) {
          if (cancelRequest) return;
          dispatch({ type: 'FETCH_ERROR', payload: error });
        }
      }
    };

    fetchData();

    // eslint-disable-next-line consistent-return
    return function cleanup() {
      cancelRequest = true;
    };
  }, [url]);

  return state;
};
