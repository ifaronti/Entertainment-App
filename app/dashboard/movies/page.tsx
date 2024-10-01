"use client";

import { MediaGrid } from "@/components/mediasGrid";
import useGetMedia from "@/hooks/getMedia";
import { theCategories } from "@/hooks/getMedia";
import { useEffect, useContext } from "react";
import { allContext } from "../layout";
import { mutate } from "swr";

export default function Page() {
  const {search} = useContext(allContext)
  const { data: movies, isLoading } = useGetMedia(search?{
    category: theCategories.Movie,
    title:search
  } : { category: theCategories.Movie })
  
  useEffect(() => {
    mutate(['/uploadDelete', 'refetch'])
  },[search])
    
  let result = `Found ${movies?.data?.length} result(s) for ${search}` 
  const notAI = movies?.data?.filter(item=>!item.isAI)
  const AI = movies?.data?.filter(item=>item.isAI)

  return (
    <div className="flex flex-col mt-7 flex-grow-0 flex-shrink-0">
      {
        isLoading ? <p>Loading...</p>
          :
          <div className="flex flex-col gap-20">
            {notAI?.length !==0 && <MediaGrid data={notAI} header={search ? result : "Movies"} />}
            {AI?.length !==0 && <MediaGrid data={AI} header={search ? result : "AI Generated Movies"} />}
          </div>
      }
    </div>
  );
}