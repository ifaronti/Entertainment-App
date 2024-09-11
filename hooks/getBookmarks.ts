<<<<<<< HEAD
import callClient from "@/lib/axios";
import useSWR from "swr";
import { getMediaResponse } from "./getMedia";

export type getBookmarksRequest = {
  title?: string;
};

const useGetBookmarks = () => {
  let url = "/bookmarks";

  return useSWR("/bookmarks", () =>
    callClient.get<getMediaResponse>(url).then((res) => res.data)
  );
};

export default useGetBookmarks;
=======
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
>>>>>>> e1af1bcb863e4b3ddf029083de0a0b533f3793c4
