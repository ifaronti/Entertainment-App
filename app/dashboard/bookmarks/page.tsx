'use client'

import { MediaGrid } from "@/components/mediasGrid"
import { mediaType } from "@/components/SVGAssets"
import useGetBookmarks from "@/hooks/getBookmarks"

export default function Page() {  
    const { data: bookmarks, isLoading } = useGetBookmarks()
    
    const movies:mediaType[] = bookmarks?.data?.filter((item) => item.category === 'Movie') || []
    const TV:mediaType[] = bookmarks?.data?.filter((item) => item.category === 'TV Series') || []
    
    return (
        <div className="flex flex-col gap-10 flex-grow-0 flex-shrink-0">
            {
                isLoading ? <p>Loading...</p>
                :
                <>
                    {movies[0] && <MediaGrid data={movies} header="Bookmarked Movies"/>}
                
                    {TV[0] && <MediaGrid data={TV} header="Bookmarked TV Series" />}
                </>
            }
        </div>
    )
}