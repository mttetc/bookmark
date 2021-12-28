import { useEffect, useState } from "react";
import { doFetch } from "../utils/fetch";
import { isBlank } from "../utils/regex";

export const useFetch = <D>({
  url,
}: {
  url?: string | null;
}): { response?: D; isLoading: boolean } => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<D | undefined>();

  useEffect(() => {
    if (url && url.length > 0 && !isBlank(url)) {
      setIsLoading(true);

      const callFetch = async () => await doFetch<D>({ url });

      callFetch()
        .then((data) => setResponse(data))
        .then(() => setIsLoading(false));
    }
  }, [url]);

  return { response, isLoading };
};
