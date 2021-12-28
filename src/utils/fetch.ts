import { BASE_URL } from "../const";

export const doFetch = async <D>({
  url,
}: {
  url: string;
}) => {
  const res = await fetch(`${BASE_URL}${url}`);
  let json;

  if (res.ok) {
    json = (await res.json()) as D;
  }

  return json;
};
