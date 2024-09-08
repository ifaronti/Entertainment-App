"use client";
import { bookmarkFullIcon, bookmarkEmptyIcon } from "../SVGAssets";
import { useState, useEffect, useContext } from "react";
import { deleteBookmarks, addBookmark } from "../API-calls/bookmarks";
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
