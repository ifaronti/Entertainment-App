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