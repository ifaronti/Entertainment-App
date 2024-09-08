import ApiClient from "@/lib/axios";
import useSWR from "swr";
import { Media } from "./getMedia";

type GetBookmarksResponse = {
  data: Media[];
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
