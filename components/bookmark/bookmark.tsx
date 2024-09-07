"use client";
import { bookmarkFullIcon, bookmarkEmptyIcon } from "../SVGAssets";
import { useState, useEffect } from "react";
import { deleteBookmarks, addBookmark } from "../API-calls/bookmarks";

type bookmarkProps = {
  item: {
    title: string;
    rating: string;
    category: string;
    year: number;
    isTrending: boolean;
    isBookmarked: boolean;
  };
  bookmarked: string[];

};

export default function Bookmarks({
  bookmarked,
  item,
}: bookmarkProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [token, setToken] = useState<string>('')

  const addRemoveBookmarks = (title:string) => {
    if (bookmarked.includes(title)) {
      deleteBookmarks(title, token)
      setIsBookmarked(false)
      return
    }
    if (!bookmarked.includes(title)) {
      addBookmark(title, token)
      setIsBookmarked(true)
      return
    }
  }

  useEffect(() => {
    if (bookmarked.includes(item.title)) {
      setIsBookmarked(true);
    } else {
      setIsBookmarked(false);
    }
  }, [bookmarked, item.title]);

  useEffect(()=>{setToken(localStorage.getItem('token'))})

  return (
    <p
      className="flex cursor-pointer items-center justify-center"
      onClick={()=>addRemoveBookmarks(item.title)}
    >
      <span className="z-50">
        {isBookmarked ? bookmarkFullIcon : bookmarkEmptyIcon}
      </span>
      <span className="flex-shrink-0 absolute rounded-[100%] w-8 h-8 opacity-[0.5006] bg-[#10141e]"></span>
    </p>
  );
}