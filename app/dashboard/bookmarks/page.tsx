"use client";

import { MediaGrid } from "@/components/mediasGrid";
import useGetBookmarks from "@/hooks/getBookmarks";
import { theCategories } from "@/hooks/getMedia";
import { allContext } from "../layout";
import { useContext, useEffect } from "react";
import { mutate } from "swr";

export default function Page() {
  const { search } = useContext(allContext);
  const { data: bookmarks, isLoading } = useGetBookmarks(
    search ? { title: search } : "",
    search
  );

  const movies = bookmarks?.data?.filter(
    (item) => item.category === theCategories.Movie
  );
  const tvSeries = bookmarks?.data?.filter(
    (item) => item.category === theCategories.TV
  );

  const AISeries = tvSeries?.filter((item) => item.isAI);
  const notAISeries = tvSeries?.filter((item) => !item.isAI);
  const notAIMovies = movies?.filter((item) => !item.isAI);
  const AIMovies = movies?.filter((item) => item.isAI);

  useEffect(() => {
    mutate(["/bookmarks"]);
  }, [search]);

  let result = `Found ${bookmarks?.data?.length} result(s) for ${search}`;

  return (
    <div className="flex flex-col mt-7 gap-20 flex-grow-0 flex-shrink-0">
      {notAIMovies?.length !==0 && (
        <MediaGrid
          data={notAIMovies}
          header={search ? result : "Bookmarked Movies"}
        />
      )}
      {AIMovies?.length !==0 && (
        <MediaGrid
          data={AIMovies}
          header={search ? result : "Bookmarked AI Generated Movies"}
        />
      )}

      {notAISeries?.length !==0 && (
        <MediaGrid
          data={notAISeries}
          header={search ? result : "Bookmarked TV Series"}
        />
      )}
      {AISeries?.length !==0 && (
        <MediaGrid
          data={AISeries}
          header={search ? result : "Bookmarked AI generated  TV Series"}
        />
      )}
    </div>
  );
}
