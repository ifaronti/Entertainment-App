'use client'

import { useEffect, useState } from "react"
import Trending from "./trending"
import axios from 'axios'
import { dataProps } from "./trending"
import { MediaGrid } from "@/components/mediasGrid"

type all = dataProps
export default function Dashboard() {
    const [all, setAll] = useState<all[]>([])
    
    const trending:all[] = all.filter((item) => item.isTrending)
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
        <div className="flex flex-col gap-10">
            <Trending
                data={trending}
                bookmarked={bookmarked}
            />
            <MediaGrid data={all} bookmarked={bookmarked}
                header="Recommended for you"
            />
        </div>
    )
}