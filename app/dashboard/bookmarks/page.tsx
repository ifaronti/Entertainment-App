
'use client'

import { useContext } from "react"
import { MediaGrid } from "@/components/mediasGrid"
import { all } from "../page"
import { dataContext } from "../layout"

export default function Page() {
    const { all, bookmarks } = useContext(dataContext)    
    
    const movies:all[] = all.filter((item) => item.category === 'Movie' && bookmarks?.includes(item.title))
    const TV:all[] = all.filter((item) => item.category === 'TV Series' && bookmarks?.includes(item.title))
    
    return (
        <div className="flex flex-col gap-10 flex-grow-0 flex-shrink-0">
            <MediaGrid data={movies} header="Bookmarked Movies"/>
            
            <MediaGrid data={TV} header="Bookmarked TV Series"/>
        </div>
    )
}