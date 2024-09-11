"use client";

import Trending from "./trending";
import { MediaGrid } from "@/components/mediasGrid";
import { mediaType } from "@/components/SVGAssets";
import useGetMedia from "@/hooks/getMedia";

export type all = mediaType[];

export default function Dashboard() {
    const {data:all} = useGetMedia()

  const trending = all?.data?.filter((item) => item.isTrending);
    
  return (
      <div className="flex flex-col gap-10 flex-grow-0 flex-shrink-0">
        <Trending data={trending}  />
        <MediaGrid
          data={all?.data}
          header="Recommended for you"
        />
      </div>
  )
}