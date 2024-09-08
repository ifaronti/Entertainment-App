"use client";

import { useContext } from "react";
import { MediaGrid } from "@/components/mediasGrid";
import { dataContext } from "../layout";

export default function Page() {
  const { all } = useContext(dataContext);

  const movies = all.filter((item) => item.category === "Movie");

  return (
    <div className="flex flex-col gap-10 flex-grow-0 flex-shrink-0">
      <MediaGrid data={movies} header="Movies"
      />
    </div>
  );
}