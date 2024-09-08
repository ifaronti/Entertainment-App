import ApiClient from "@/lib/axios";
import useSWR from "swr";

type GetBookmarksResponse = {
  data: {
    bookmarks: string[];
  };
};

export type GetBookmarksRequest = {};

const useGetBookmarks = (params?: GetBookmarksRequest) => {
  let url = `/bookmarks`;

  if (params) {
    const searchParams = new URLSearchParams(params);

    url = `${url}?${searchParams.toString()}`;
  }

  return useSWR(`/bookmarks`, () =>
    ApiClient.get<GetBookmarksResponse>(url).then((res) => res.data)
  );
};

export default useGetBookmarks;
