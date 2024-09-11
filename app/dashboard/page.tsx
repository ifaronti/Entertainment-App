"use client";

import Trending from "./trending";
import { MediaGrid } from "@/components/mediasGrid";
<<<<<<< HEAD
import { mediaType } from "@/components/SVGAssets";
=======
import { dataContext } from "./layout";
>>>>>>> e1af1bcb863e4b3ddf029083de0a0b533f3793c4
import useGetMedia from "@/hooks/getMedia";

export type all = mediaType[];

export default function Dashboard() {
<<<<<<< HEAD
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
=======
  const { data, isLoading } = useGetMedia();
  const media = data;
  const trending = media?.data?.filter((item) => item.isTrending);

  return (
    <div className="flex flex-col gap-10 flex-grow-0 flex-shrink-0">
      {isLoading && <p>Loading</p>}
      {!isLoading && (
        <>
          {trending && <Trending data={trending} />}
          {media && (
            <MediaGrid data={media?.data} header="Recommended for you" />
          )}
        </>
      )}
    </div>
>>>>>>> e1af1bcb863e4b3ddf029083de0a0b533f3793c4
  );
}