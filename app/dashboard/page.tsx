'use client'

import { useEffect, useState } from "react"
import Trending from "./trending"
import axios from 'axios'
import { dataProps } from "./trending"

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
        <Trending
            data={trending}
            bookmarked={bookmarked}
        />
    )
}