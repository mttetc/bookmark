import { useCallback, useEffect, useState } from 'react';
import { BASE_URL } from '../const';
import { isBlank } from '../utils/regex';

export const useFetch = <D>({ url }: { url?: string | null }): { response: D | null, isLoading: boolean, next: () => void } => {
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState<D | null>(null);

  const doFetch = useCallback(async () => {
    setIsLoading(true)
    const res = await fetch(`${BASE_URL}${url}`);

    if (res.ok) {
      const json = await res.json() as D;
      setResponse(json);
      setIsLoading(false)
    }
  }, [url])

  useEffect(() => {
    url && url.length > 0 && !isBlank(url) && doFetch();
  }, [url, doFetch]);

  return { response, isLoading, next: doFetch };
};