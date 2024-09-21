import Image from "next/image";
import { Bookmarks } from "@/components/bookmark";
import DetailsText from "@/components/detailsText/detailsText";
import { mediaType } from "@/components/SVGAssets";
import { Play } from "@/components/playButton";

type trending = {
  data:mediaType[]|undefined
}
export default function Trending({ data}: trending){
  const heading = <h1>Trending</h1>;

  const trendingCarousel = data?.map((item, index) => {
    return (
      <div
        className="relative flex group items-center justify-center flex-shrink-0 rounded-lg h-[140px] w-[220px] md:h-[230px] md:w-[470px]"
        key={index + 1}
      >
        <Image
          src={item.thumbnail.trending.large.substring(1)}
          width={470}
          height={230}
          alt={"trending" + (index + 1)}
          className="absolute h-[140px] w-[220px] md:h-[230px] md:w-[470px] rounded-lg flex-shrink-0"
        />

        <div className="absolute top-4 right-6 flex items-center justify-center">
          <Bookmarks item={item} />
        </div>

        <div className="absolute left-4 bottom-4 md:left-6 md:bottom-6">
          <DetailsText
            item={item}
            pSize={"md:text-[.9375rem] text-xs"}
            titleSize={"md:text-2xl text-[.9375rem]"}
          />
        </div>
        <div className="w-[117px] absolute hidden group-hover:block">
          <Play />
        </div>
      </div>
    );
  });

  return (
    <div className="flex w-full pl-4 md:pl-8 2xl:pl-[unset] flex-grow-0 flex-shrink-0 gap-6 flex-col">
      {heading}
      <div className="flex flex-grow-0 flex-shrink-0 w-[98%] gap-4 md:gap-10 overflow-x-auto no-scrollbar">
        {trendingCarousel}
      </div>
    </div>
  );
}
