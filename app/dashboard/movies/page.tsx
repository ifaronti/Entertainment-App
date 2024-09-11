"use client";

import { MediaGrid } from "@/components/mediasGrid";
<<<<<<< HEAD
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
=======
import useGetMedia, { MediaCategories } from "@/hooks/getMedia";

export default function Page() {
  const { data: movies, isLoading } = useGetMedia({
    category: MediaCategories.MOVIE,
  });

  return (
    <div className="flex flex-col gap-10 flex-grow-0 flex-shrink-0">
      {isLoading && <p>Loading</p>}
      {movies && <MediaGrid data={movies.data} header="Movies" />}
>>>>>>> e1af1bcb863e4b3ddf029083de0a0b533f3793c4
    </div>
  );
}
