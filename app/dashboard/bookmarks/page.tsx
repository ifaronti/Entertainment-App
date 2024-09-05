
'use client'

import { useContext } from "react"
import { MediaGrid } from "@/components/mediasGrid"
import { all } from "../page"
import { dataContext } from "../layout"

export default function Page() {
    const {all} = useContext(dataContext)
    
    const movies:all[] = all.filter((item) => item.category === 'Movie' && item.isBookmarked)
    const TV:all[] = all.filter((item) => item.category === 'TV Series' && item.isBookmarked)
    const bookmarked = all.filter(item => item.isBookmarked).map(item=>item.title)
    
    return (
        <div className="flex flex-col gap-10 flex-grow-0 flex-shrink-0">
            <MediaGrid data={movies} bookmarked={bookmarked}
                header="Bookmarked Movies"
            />
            <MediaGrid data={TV} bookmarked={bookmarked}
                header="Bookmarked TV Series"
            />
        </div>
    )
}