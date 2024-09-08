"use client";
import { bookmarkFullIcon, bookmarkEmptyIcon } from "../SVGAssets";
import { useState, useEffect, useContext } from "react";
import { deleteBookmarks, addBookmark } from "../API-calls/bookmarks";
import { dataContext } from "@/app/dashboard/layout";

type bookmarkProps = {
  item: {
    title: string;
    rating: string;
    category: string;
    year: number;
    isTrending: boolean;
    isBookmarked: boolean;
  };
};

export default function Bookmarks({ item }: bookmarkProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
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

  useEffect(() => {
    if (bookmarks?.includes(item.title)) {
      setIsBookmarked(true);
    } else {
      setIsBookmarked(false);
    }
  }, [bookmarks, item.title]);

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
