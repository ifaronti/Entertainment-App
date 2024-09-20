"use client";

import { MediaGrid } from "@/components/mediasGrid";
import useGetMedia from "@/hooks/getMedia";
import { theCategories } from "@/hooks/getMedia";
import { useEffect } from "react";

export default function Page() {
  const { data: movies, isLoading, mutate } = useGetMedia({
    category:theCategories.Movie
  })

  useEffect(() => {
    mutate()
  },[mutate])

  return (
    <div className="flex flex-col mt-7 flex-grow-0 flex-shrink-0">
      {
        isLoading ? <p>Loading...</p>
        :
        <MediaGrid data={movies?.data} header="Movies" />
      }
    </div>
  );
}