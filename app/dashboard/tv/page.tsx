'use client'

import {useContext} from "react"
import { MediaGrid } from "@/components/mediasGrid"
import { all } from "../page"
import { dataContext } from "../layout"

export default function Page() {
    const {all} = useContext(dataContext)
    
    const TV:all[] = all.filter((item) => item.category === "TV Series")
    const bookmarked = all.filter(item => item.isBookmarked).map(item=>item.title)
    
    return (
        <div className="flex flex-col gap-10 flex-grow-0 flex-shrink-0">
            <MediaGrid data={TV} bookmarked={bookmarked}
                header="TV Series"
                addBookmark={()=>console.log('make api call')}
            />
        </div>
    )
}