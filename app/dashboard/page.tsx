"use client";

import { useContext } from "react";
import Trending from "./trending";
import { dataProps } from "@/components/SVGAssets";
import { MediaGrid } from "@/components/mediasGrid";
import { dataContext } from "./layout";

export type all = dataProps;

export default function Dashboard() {
    const {all, bookmarks} = useContext(dataContext)

  const trending = all?.filter((item) => item.isTrending);
    
  return (
      <div className="flex flex-col gap-10 flex-grow-0 flex-shrink-0">
        <Trending data={trending} bookmarked={bookmarks} />
        <MediaGrid
          data={all}
          bookmarked={bookmarks}
          header="Recommended for you"
          addBookmark={()=>console.log('Will make API')}
        />
      </div>
  );
}
