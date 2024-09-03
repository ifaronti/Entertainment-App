"use client";
import Image from "next/image";
import {
  bookmarkEmptyIcon,
  TVSeriesIcon,
  movieCategoryIcon,
  bookmarkFullIcon,
  playIcon,
  trendingDot
} from "./assets";

export type dataProps = {
  data: [
    {
      thumbnail: {
        trending: { large: string, small: string },
        regular: {
          small: string,
          medium: string,
          large: string,
        }
      };
      title: string,
      rating: string,
      category: string,
      year: number,
      isTrending: boolean,
      isBookmarked:boolean,
    }
  ],
  bookmarked: string[];
  isTrending: boolean,
  isBookmarked: boolean,
  title:string,
  
};

export default function Trending({ data, bookmarked }: dataProps) {
  const heading: JSX.Element = <h1>Trending</h1>;

  const trendingCarousel:JSX.Element[] = data?.map((item, index) => {
    return (
      <div className="relative flex-shrink-0 rounded-lg h-[230px] w-[470px]" key={index + 1}>
        <Image
          src={item.thumbnail.trending.large.substring(1)}
          width={470}
          height={230}
          alt={"trending" + index + 1}
          className="absolute rounded-lg flex-shrink-0"
        />
        
        <div className="absolute top-4 right-6 flex items-center justify-center">
          {bookmarked.includes(item.title)
            ? 
            <span className="z-50">{bookmarkFullIcon}</span>
            : 
            <span className="z-50">{bookmarkEmptyIcon}</span>
          }
          <span className="flex-shrink-0 absolute rounded-[100%] w-8 h-8 opacity-[0.5006] bg-[#10141e]"></span>
        </div>
        
        <div className="absolute left-6 bottom-6">
          <div className="text-white text-[.9375rem] opacity-75 relative items-center flex gap-2">
            <p>{item.year}</p>
            
            <span>{trendingDot}</span>
            
            <p className="flex gap-[6px] items-center">
              {item.category === "Movie" ? movieCategoryIcon : TVSeriesIcon}{" "}
              <span>{item.category}</span>
            </p>
            
            <span>{trendingDot}</span>
            
            <p>{item.rating}</p>
          </div>
          
          <h2 className="text-white text-2xl font-semibold relative">{ item.title}</h2>
        </div>
      </div>
    );
  });
    
  return(
    <div className="flex w-full flex-col">
      {heading}
      <div className="flex flex-shrink-0 w-[93%] gap-10 overflow-x-auto no-scrollbar">
        {trendingCarousel}
      </div>
    </div>
  )
}