"use client";

import { useContext } from "react";
import Trending from "./trending";
import { dataProps } from "./trending";
import { MediaGrid } from "@/components/mediasGrid";
import { dataContext } from "./layout";

export type all = dataProps;

export default function Dashboard() {
    const {all} = useContext(dataContext)

  const trending = all.filter((item) => item.isTrending);
  const bookmarked = all
    .filter((item) => item.isBookmarked)
    .map((item) => item.title);
    
  return (
      <div className="flex flex-col gap-10 flex-grow-0 flex-shrink-0">
        <Trending data={trending} bookmarked={bookmarked} />
        <MediaGrid
          data={all}
          bookmarked={bookmarked}
          header="Recommended for you"
        />
      </div>
  );
}
