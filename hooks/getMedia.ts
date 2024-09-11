<<<<<<< HEAD
import { mediaType } from "@/components/SVGAssets";
import useSWR from 'swr'
import callClient from "@/lib/axios";

export enum theCategories {
    TV = "TV Series",
    Movie = "Movie",
    Trending = "trending"
}

export type getMediaResponse = {
    data:mediaType[]
}

type getMediaRequest = {
    category?: theCategories
    trending?:theCategories.Trending
}

const useGetMedia = (params?: getMediaRequest) => {
    let url = '/all'

    if (params) {
        const searchParams = new URLSearchParams(params)
        url = `${url}?${searchParams.toString()}`
    }

    return useSWR('/all', () => 
        callClient.get<getMediaResponse>(url).then((res)=>res.data))
}

export default useGetMedia
=======
import ApiClient from "@/lib/axios";
import useSWR from "swr";

export type Media = {
  thumbnail: {
    trending: { large: string; small: string };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  title: string;
  rating: string;
  category: MediaCategories;
  year: number;
  isTrending: boolean;
  isBookmarked: boolean;
};

export enum MediaCategories {
  MOVIE = 'Movie',
  TV_SERIES = 'TV Series'
}

type GetMediaResponse = {
  data: Media[];
};

export type GetMediaRequest = {
  category: MediaCategories
}

const useGetMedia = (params?: GetMediaRequest) => {
  let url = `/all`

  if(params) {
    const searchParams = new URLSearchParams(params)

    url = `${url}?${searchParams.toString()}`;
  }
  
  return useSWR(`/all`, () => 
    ApiClient.get<GetMediaResponse>(url).then((res) => res.data)
  );
}
  

export default useGetMedia;
>>>>>>> e1af1bcb863e4b3ddf029083de0a0b533f3793c4
