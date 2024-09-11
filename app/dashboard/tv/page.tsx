"use client";

<<<<<<< HEAD
import useGetMedia from "@/hooks/getMedia"
import { MediaGrid } from "@/components/mediasGrid"
import { theCategories } from "@/hooks/getMedia"

export default function Page() {
    const { data: TV, isLoading } = useGetMedia({
        category:theCategories.TV
    })
    
    return (
        <div className="flex flex-col gap-10 flex-grow-0 flex-shrink-0">
            {
                isLoading ? <p>Loading...</p>
                :
                <MediaGrid data={TV?.data} header="TV Series" />
            }
        </div>
    )
}
=======
import { useContext } from "react";
import { MediaGrid } from "@/components/mediasGrid";
import { all } from "../page";
import { dataContext } from "../layout";
import useGetMedia, { MediaCategories } from "@/hooks/getMedia";

export default function Page() {
  const { data: tvSeries, isLoading } = useGetMedia({
    category: MediaCategories.TV_SERIES,
  });

  return (
    <div className="flex flex-col gap-10 flex-grow-0 flex-shrink-0">
      {isLoading && <p>Loading</p>}
      {tvSeries && <MediaGrid data={tvSeries?.data} header="TV Series" />}
    </div>
  );
}
>>>>>>> e1af1bcb863e4b3ddf029083de0a0b533f3793c4
