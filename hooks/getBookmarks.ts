
import callClient from "@/lib/axios";
import useSWR from "swr";
import { mediaType } from "@/components/SVGAssets";

export type getBookmarksRequest = {
  title?: string;
};

type GetBookmarksResponse = {
  data: mediaType[];
};

export type GetBookmarksRequest = {title?:string} | string

export default function useGetBookmarks (params?: GetBookmarksRequest, search?:string) {
  let url = `/bookmarks`;

  if (params) {
    const searchParams = new URLSearchParams(params);

    url = `${url}?${searchParams.toString()}`;
  }

  return useSWR(['/bookmarks'], () =>
    callClient.get<GetBookmarksResponse>(url).then((res) => res.data)
  );
};