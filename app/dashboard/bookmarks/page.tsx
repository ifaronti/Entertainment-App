
'use client'

import { useState, useEffect } from "react"
import { MediaGrid } from "@/components/mediasGrid"
import { all } from "../page"
import axios from "axios"

export default function Page() {
    const [all, setAll] = useState<all[]>([])
    
    const movies:all[] = all.filter((item) => item.category === 'Movie' && item.isBookmarked)
    const TV:all[] = all.filter((item) => item.category === 'TV Series' && item.isBookmarked)
    const bookmarked = all.filter(item => item.isBookmarked).map(item=>item.title)
    
    useEffect(() => {
        const getAll = async () => {
            try {
                const {data} = await axios.get('http://localhost:4000/api/all')
                setAll(data.data)
            }
            catch (err:any) {
                console.log(err.message);
            }
        }
        getAll()
    }, [])
    
    
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