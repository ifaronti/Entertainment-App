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