"use client";

import { MediaGrid } from "@/components/mediasGrid";
import useGetMedia, { MediaCategories } from "@/hooks/getMedia";

export default function Page() {
  const { data: movies, isLoading } = useGetMedia({
    category: MediaCategories.MOVIE,
  });

  return (
    <div className="flex flex-col gap-10 flex-grow-0 flex-shrink-0">
      {isLoading && <p>Loading</p>}
      {movies && <MediaGrid data={movies.data} header="Movies" />}
    </div>
  );
}
