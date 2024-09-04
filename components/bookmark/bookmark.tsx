'use client'
import {bookmarkFullIcon, bookmarkEmptyIcon} from '../SVGAssets'
import {useState, useEffect} from 'react'

type bookmarkProps = {
    item:{
        title: string,
        rating: string,
        category: string,
        year: number,
        isTrending: boolean,
        isBookmarked: boolean,
    
    },
    bookmarked: string[],
    addBookmark:()=>void
}

export default function Bookmarks({bookmarked, item, addBookmark}:bookmarkProps):React.ReactNode {
    const [isBookmarked, setIsBookmarked] = useState(false)

    const addRemoveBookmark = ()=>{
        setIsBookmarked(!isBookmarked)
        addBookmark()
    }

    useEffect(()=>{
        if(bookmarked.includes(item.title)){
            setIsBookmarked(true)
        }
        else{
            setIsBookmarked(false)
        }
    }, [bookmarked, item.title])

    return( 
        <p className="flex cursor-pointer items-center justify-center" onClick={addRemoveBookmark}>
            <span className='z-50'>{isBookmarked? bookmarkFullIcon : bookmarkEmptyIcon}</span>
            <span className="flex-shrink-0 absolute rounded-[100%] w-8 h-8 opacity-[0.5006] bg-[#10141e]"></span>
        </p>
    )
}