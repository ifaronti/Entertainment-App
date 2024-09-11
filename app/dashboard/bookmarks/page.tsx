
"use client";

import { MediaGrid } from "@/components/mediasGrid";
import useGetBookmarks from "@/hooks/getBookmarks";
import { theCategories } from "@/hooks/getMedia";

export default function Page() {
  const { data: bookmarks, isLoading } = useGetBookmarks();

  const movies = bookmarks?.data?.filter(
    (item) => item.category === theCategories.Movie
  );
  const tvSeries = bookmarks?.data?.filter(
    (item) => item.category === theCategories.TV
  );

  return (
    <div className="flex flex-col gap-10 flex-grow-0 flex-shrink-0">
      {isLoading && <p>Loading</p>}
      {!isLoading && (
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