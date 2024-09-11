"use client";

import { MediaGrid } from "@/components/mediasGrid";
import useGetMedia from "@/hooks/getMedia";
import { theCategories } from "@/hooks/getMedia";

export default function Page() {
  const { data: movies, isLoading } = useGetMedia({
    category:theCategories.Movie
  })

  return (
    <div className="flex flex-col gap-10 flex-grow-0 flex-shrink-0">
      {
        isLoading ? <p>Loading...</p>
        :
        <MediaGrid data={movies?.data} header="Movies" />
      }
    </div>
  );
}