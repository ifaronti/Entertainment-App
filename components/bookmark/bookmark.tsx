"use client";

import { bookmarkFullIcon, bookmarkEmptyIcon } from "../SVGAssets";
import { useState, useEffect} from "react";
import { deleteBookmarks, addBookmark } from "../API-calls/bookmarks";
<<<<<<< HEAD
import { mediaType } from "../SVGAssets";
import useGetBookmarks from "@/hooks/getBookmarks";

export type bookmarkProps = {
  item: mediaType
};

export default function Bookmarks({item}: bookmarkProps) {
  const [isBookmarked, setIsBookmarked] = useState(item.isBookmarked);
  const [token, setToken] = useState<string | undefined | null>('')
  const { data: bookmarks, mutate } = useGetBookmarks()
   
  const addRemoveBookmarks = (title:string) => {
    if (bookmarks?.data?.some(media => media.title === title)){
      setIsBookmarked(false)
      deleteBookmarks(title, token, mutate)
    }
    else {
      setIsBookmarked(true)
      addBookmark(title, token, mutate)
    }
  }

  useEffect(() => {
    if (bookmarks?.data?.some(media => media.title === item.title)) {
       setIsBookmarked(true)
    }
    else {
       setIsBookmarked(false)
    }
    setToken(localStorage.getItem('token'))
  }, [bookmarks, item])
=======
import { dataContext } from "@/app/dashboard/layout";
import { Media } from "@/hooks";

type bookmarkProps = {
  item: Media;
};

export default function Bookmarks({ item }: bookmarkProps) {
  const [isBookmarked, setIsBookmarked] = useState(item.isBookmarked);
  const { bookmarks, token, handleBookmarks } = useContext(dataContext);

  const addRemoveBookmarks = (title: string) => {
    if (bookmarks?.includes(title)) {
      deleteBookmarks(title, token, handleBookmarks);
      setIsBookmarked(false);
      return;
    }
    if (!bookmarks?.includes(title)) {
      addBookmark(title, token, handleBookmarks);
      setIsBookmarked(true);
      return;
    }
  };
>>>>>>> e1af1bcb863e4b3ddf029083de0a0b533f3793c4

  return (
    <p
      className="flex cursor-pointer items-center justify-center"
      onClick={() => addRemoveBookmarks(item.title)}
    >
      <span className="z-50">
        {isBookmarked ? bookmarkFullIcon : bookmarkEmptyIcon}
      </span>
      <span className="flex-shrink-0 absolute rounded-[100%] w-8 h-8 opacity-[0.5006] bg-[#10141e]"></span>
    </p>
  );
}
