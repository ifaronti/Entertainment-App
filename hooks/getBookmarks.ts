
import callClient from "@/lib/axios";
import useSWR from "swr";
import { mediaType } from "@/components/SVGAssets";

export type getBookmarksRequest = {
  title?: string;
};

type GetBookmarksResponse = {
  data: mediaType[];
};

export type GetBookmarksRequest = {};

const useGetBookmarks = (params?: GetBookmarksRequest) => {
  let url = `/bookmarks`;

  if (params) {
    const searchParams = new URLSearchParams(params);

    url = `${url}?${searchParams.toString()}`;
  }

  return useSWR(`/bookmarks`, () =>
    callClient.get<GetBookmarksResponse>(url).then((res) => res.data)
  );
};

export default useGetBookmarks;