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
