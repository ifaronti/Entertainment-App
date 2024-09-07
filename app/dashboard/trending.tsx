
import Image from "next/image";
import { Bookmarks } from "@/components/bookmark";
import DetailsText from "@/components/detailsText/detailsText";
import { dataProps } from "@/components/SVGAssets";

export default function Trending({ data, bookmarked }: dataProps){
  const heading = <h1>Trending</h1>;

  const trendingCarousel = data?.map((item, index) => {
    return (
      <div
        className="relative flex-shrink-0 rounded-lg h-[230px] w-[470px]"
        key={index + 1}
      >
        <Image
          src={item.thumbnail.trending.large.substring(1)}
          width={470}
          height={230}
          alt={"trending" + (index + 1)}
          className="absolute rounded-lg flex-shrink-0"
        />

        <div className="absolute top-4 right-6 flex items-center justify-center">
          <Bookmarks
            item={item}
            bookmarked={bookmarked}
          />
        </div>
        
        <div className="absolute left-6 bottom-6">
          <DetailsText
            item={item}
            pSize={"text-[.9375rem]"}
            titleSize={"text-2xl"}
          />
        </div>
      </div>
    );
  });

  return (
    <div className="flex w-full flex-grow-0 flex-shrink-0 gap-6 flex-col">
      {heading}
      <div className="flex flex-grow-0 flex-shrink-0 w-[98%] gap-10 overflow-x-auto no-scrollbar">
        {trendingCarousel}
      </div>
    </div>
  );
}