"use client";

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
