"use client";

import { MediaGrid } from "@/components/mediasGrid";
import useGetBookmarks from "@/hooks/getBookmarks";
import { theCategories } from "@/hooks/getMedia";
import { allContext } from "../layout";
import { useContext, useEffect } from "react";

export default function Page() {
  const { search } = useContext(allContext);
  const {
    data: bookmarks,
    isLoading,
    mutate,
  } = useGetBookmarks({ title: search !=='' ? search : "skip" });

  const movies = bookmarks?.data?.filter(
    (item) => item.category === theCategories.Movie
  );
  const tvSeries = bookmarks?.data?.filter(
    (item) => item.category === theCategories.TV
  );

  useEffect(() => {
    mutate();
  }, [search, mutate]);

  let result = `Found ${bookmarks?.data?.length} result(s) for ${search}`;

  return (
    <div className="flex flex-col mt-7 gap-10 flex-grow-0 flex-shrink-0">
      {isLoading && <p>Loading</p>}
      {!isLoading && (
        <>
          {movies?.length && (
            <MediaGrid
              data={movies}
              header={search ? result : "Bookmarked Movies"}
            />
          )}
          {tvSeries?.length && (
            <MediaGrid
              data={tvSeries}
              header={search ? result : "Bookmarked TV Series"}
            />
          )}
        </>
      )}
    </div>
  );
}
