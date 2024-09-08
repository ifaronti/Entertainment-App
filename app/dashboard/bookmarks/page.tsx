"use client";

import { MediaGrid } from "@/components/mediasGrid";
import useGetBookmarks from "@/hooks/getBookmarks";
import useGetMedia from "@/hooks/getMedia";

export default function Page() {
  const { data: all, isLoading: isMediaLoading } = useGetMedia();
  const { data: bookmarks, isLoading } = useGetBookmarks();

  const showLoader = isMediaLoading || isLoading;

  const movies = all?.data?.filter(
    (item) => item.category === "Movie" && bookmarks?.data?.bookmarks?.includes(item.title)
  );
  const tvSeries = all?.data?.filter(
    (item) =>
      item.category === "TV Series" && bookmarks?.data?.bookmarks?.includes(item.title)
  );

  return (
    <div className="flex flex-col gap-10 flex-grow-0 flex-shrink-0">
      {showLoader && <p>Loading</p>}
      {!showLoader && (
        <>
          {movies && <MediaGrid data={movies} header="Bookmarked Movies" />}
          {tvSeries && (
            <MediaGrid data={tvSeries} header="Bookmarked TV Series" />
          )}
        </>
      )}
    </div>
  );
}
