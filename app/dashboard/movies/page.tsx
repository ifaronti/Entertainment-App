"use client";

import { useContext } from "react";
import { MediaGrid } from "@/components/mediasGrid";
import { dataContext } from "../layout";

export default function Page() {
  const { all } = useContext(dataContext);

  const movies = all.filter((item) => item.category === "Movie");
  const bookmarked = all
    .filter((item) => item.isBookmarked)
    .map((item) => item.title);

  return (
    <div className="flex flex-col gap-10 flex-grow-0 flex-shrink-0">
      <MediaGrid data={movies} bookmarked={bookmarked} header="Movies"
        addBookmark={()=>console.log('make api call')}
      />
    </div>
  );
}
