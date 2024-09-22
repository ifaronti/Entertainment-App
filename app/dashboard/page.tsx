"use client";

import Trending from "./trending";
import { MediaGrid } from "@/components/mediasGrid";
import { useContext, useEffect} from "react";
import { allContext } from "./layout";
import useGetMedia from "@/hooks/getMedia";


export default function Dashboard() {
  const { search } = useContext(allContext)

  const { data: all } = useGetMedia(search ? { title: search } : {})
  console.log(all?.data);
  

  const trending = all?.data?.filter((item) => item.isTrending);

  let result = `Found ${all?.data?.length} result(s) for ${search}` 
  return (
    <div className="flex flex-col gap-10 mt-8 flex-grow-0 flex-shrink-0">
      {!search && <Trending data={trending} />}
      <MediaGrid
        data={all?.data}
        header={search ? result : "Recommended for you"}
      />
    </div>
  );
}
