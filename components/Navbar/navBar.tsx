"use client";

import { useState, useEffect } from "react";
import NavButtons from "./navButtons";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const [current, setCurrent] = useState("")
  const gotTo = useRouter();

  useEffect(() => {
    let localCurrent = localStorage.getItem('page')
    if (localCurrent !== null || undefined) {
      return setCurrent(localCurrent)
    }
    else {
      setCurrent('dashboard')
    }

  },[])

  const goToPage = (page: string) => {
    setCurrent(page);
    localStorage.setItem('page', page)
    gotTo.push("/" + page);
  };

  return (
    <nav className="flex flex-col flex-shrink-0 rounded-[1.25rem] py-8 bg-[#161d2f] items-center h-[833px] w-24 justify-between">
      <NavButtons current={current} goToPage={goToPage} />

      <Image
        src={`/assets/image-avatar.png`}
        height={40}
        width={40}
        alt="profile picture"
        className="rounded-[100%] border-[1px]"
      />
    </nav>
  );
}