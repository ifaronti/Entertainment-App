'use client'

import useGetMedia from "@/hooks/getMedia"
import { MediaGrid } from "@/components/mediasGrid"
import { theCategories } from "@/hooks/getMedia"

export default function Page() {
    const { data: TV, isLoading } = useGetMedia({
        category:theCategories.TV
    })
    
    return (
        <div className="flex flex-col gap-10 flex-grow-0 flex-shrink-0">
            {
                isLoading ? <p>Loading...</p>
                :
                <MediaGrid data={TV?.data} header="TV Series" />
            }
        </div>
    )
}