"use client";

import Trending from "./trending";
import { MediaGrid } from "@/components/mediasGrid";
import { useContext, useEffect } from "react";
import { allContext } from "./layout";
import useGetMedia from "@/hooks/getMedia";
import { mutate } from "swr";

export default function Dashboard() {
  const { search } = useContext(allContext);
  const { data: all } = useGetMedia(search ? { title: search } : "");

  const trending = all?.data?.filter((item) => item.isTrending);
  const genAI = all?.data?.filter((item) => item.isAI);
  const notGenAI = all?.data?.filter((item) => !item.isAI);

  useEffect(() => {
    mutate(["/uploadDelete", "refetch"]);
  }, [search]);

  let result = `Found ${all?.data?.length} result(s) for ${search}`;
  return (
    <div className="flex flex-col gap-10 mt-8 flex-grow-0 flex-shrink-0">
      {!search && <Trending data={trending} />}
      {genAI?.length !== 0 && (
        <MediaGrid data={genAI} header={search ? result : "AI Generated"} />
      )}
      <MediaGrid
        data={notGenAI}
        header={search ? result : "Recommended for you"}
      />
    </div>
  );
}
