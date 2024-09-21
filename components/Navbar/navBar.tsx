"use client";

import { useState, useEffect } from "react";
import NavButtons from "./navButtons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AppLogo from "../AppLogo";

export default function NavBar() {
  const [current, setCurrent] = useState<string|null>("dashboard")
  const gotTo = useRouter();

  useEffect(() => {
    let localCurrent = localStorage.getItem('page')
    const pageSet = ()=>{
      if (localCurrent !== null || localCurrent !== undefined) {
        return setCurrent(localCurrent)
      }
      setCurrent('dashboard')
    }
    pageSet()
  },[])

  const goToPage = (page: string) => {
    setCurrent(page);
    localStorage.setItem('page', page)
    gotTo.push("/" + page);
  };

  return (
    <div className="w-full z-50 flex relative h-14 md:h-[72px] md:w-[719px] 2xl:h-[833px] 2xl:w-24">
      <nav className="flex 2xl:flex-col md:top-[23px] fixed 2xl:left-[unset] 2xl:translate-x-[unset] md:left-[50%] md:translate-x-[-50%] 2xl:top-[unset] top-0 justify-between flex-row flex-shrink-0 px-3 sm:px-6 2xl:px-[unset] md:rounded-[1.25rem] py-8 bg-[#161d2f] items-center w-full h-14 md:h-[72px] md:w-[719px] 2xl:h-[833px] 2xl:w-24">
        <AppLogo />
        <NavButtons current={current} goToPage={goToPage} />
        <Image
          src={`/assets/image-avatar.png`}
          height={40}
          width={40}
          alt="profile picture"
          className="rounded-[100%] w-6 h-6 sm:w-8 sm:h-8 xl:w-10 xl:h-10 border-[1px]"
        />
      </nav>
    </div>
  );
}
