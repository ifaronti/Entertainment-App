"use client";

import Trending from "./trending";
import { MediaGrid } from "@/components/mediasGrid";
import useGetMedia from "@/hooks/getMedia";

export default function Dashboard() {
    const {data:all} = useGetMedia()

  const trending = all?.data?.filter((item) => item.isTrending);
  console.log(all);
  
    
  return (
      <div className="flex flex-col gap-10 mt-8 flex-grow-0 flex-shrink-0">
        <Trending data={trending}  />
        <MediaGrid
          data={all?.data}
          header="Recommended for you"
        />
      </div>
  )
}