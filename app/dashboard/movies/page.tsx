"use client";

import { MediaGrid } from "@/components/mediasGrid";
import useGetMedia from "@/hooks/getMedia";
import { theCategories } from "@/hooks/getMedia";
import { useEffect, useContext } from "react";
import { allContext } from "../layout";

export default function Page() {
  const {search} = useContext(allContext)
  const { data: movies, isLoading, mutate } = useGetMedia({
    category: theCategories.Movie,
    title:search? search:'skip'
  })

  useEffect(() => {
    mutate()
  }, [mutate, search])
  
  let result = `Found ${movies?.data?.length} result(s) for ${search}` 

  return (
    <div className="flex flex-col mt-7 flex-grow-0 flex-shrink-0">
      {
        isLoading ? <p>Loading...</p>
        :
        <MediaGrid data={movies?.data} header= {search? result:"Movies"} />
      }
    </div>
  );
}