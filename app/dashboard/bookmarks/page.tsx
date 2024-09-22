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
  } = useGetBookmarks(search ? { title: search } : {}, search);

  //I included search as an optional prop in the getBookmark hook setup this helps me set
  //custom keys for fetching data otherwie, the keys will be cached and same data will be
  //returned even when a title search is requested by user.
    
  const movies = bookmarks?.data?.filter(
    (item) => item.category === theCategories.Movie
  );
  const tvSeries = bookmarks?.data?.filter(
    (item) => item.category === theCategories.TV
  )

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
