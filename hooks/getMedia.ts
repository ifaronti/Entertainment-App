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
  category: string;
  year: number;
  isTrending: boolean;
  isBookmarked: boolean;
};

type GetMediaResponse = {
  data: Media[];
};

const useGetMedia = () =>
  useSWR(`/all`, () =>
    ApiClient.get<GetMediaResponse>(`/all`).then((res) => res.data)
  );

export default useGetMedia;
