"use client";

import { useContext } from "react";
import Trending from "./trending";
import { dataProps } from "@/components/SVGAssets";
import { MediaGrid } from "@/components/mediasGrid";
import { dataContext } from "./layout";
import useGetMedia from "@/hooks/getMedia";

export type all = dataProps;

export default function Dashboard() {
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
  );
}
