import { useEffect, useState } from 'react';
import { BASE_URL } from '../const';
import { isBlank } from '../utils/regex';

export const useFetch = <D>({ url }: { url: string }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState<D | null>(null);

  useEffect(() => {
    const doFetch = async () => {
      setIsLoading(true)
      const res = await fetch(`${BASE_URL}${url}`);
      const json = await res.json();
      setResponse(json);
      setIsLoading(false)
    }
    url && url.length > 0 && !isBlank(url) && doFetch();
  }, [url]);

  return { response, isLoading };
};