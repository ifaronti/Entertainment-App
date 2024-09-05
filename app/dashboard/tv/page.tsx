'use client'

import { useState, useEffect } from "react"
import { MediaGrid } from "@/components/mediasGrid"
import { all } from "../page"
import axios from "axios"

export default function Page() {
    const [all, setAll] = useState<all[]>([])
    
    const TV:all[] = all.filter((item) => item.category === "TV Series")
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
            <MediaGrid data={TV} bookmarked={bookmarked}
                header="TV Series"
            />
        </div>
    )
}