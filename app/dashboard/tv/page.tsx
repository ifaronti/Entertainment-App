"use client";
import useGetMedia from "@/hooks/getMedia"
import { MediaGrid } from "@/components/mediasGrid"
import { theCategories } from "@/hooks/getMedia"
import { useContext, useEffect } from "react";
import { allContext } from "../layout";
import { mutate } from "swr";

export default function Page() {
    const { search } = useContext(allContext)
    
    const { data: TV, isLoading} = useGetMedia(search?{
        category: theCategories.TV,
        title:search
    } : { category: theCategories.TV })
    
    useEffect(() => {
        mutate(['/uploadDelete', 'refetch'])
    },[search])
    
    let result = `Found ${TV?.data?.length} result(s) for ${search}` 
    
    return (
        <div className="flex flex-col mt-7 gap-10 flex-grow-0 flex-shrink-0">
            {
                isLoading ? <p>Loading...</p>
                :
                <MediaGrid data={TV?.data} header={search? result:"TV Series"} />
            }
        </div>
    )
}