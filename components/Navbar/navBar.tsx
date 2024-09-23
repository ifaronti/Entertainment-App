"use client";

import NavButtons from "./navButtons";
import Image from "next/image";
import AppLogo from "../AppLogo";
import { useRouter } from "next/navigation";

type navProps = {
  current: any
  goToPage: (page:string)=>void
}

export default function NavBar({ current, goToPage }: navProps) {
  const goTo = useRouter()

  const deAuth = () => {
    localStorage.clear()
    goTo.push('/')
  }
  
  return (
    <div className="w-full z-50 flex relative h-14 md:h-[72px] md:w-[719px] 2xl:h-[833px] 2xl:w-24">
      <nav className="flex 2xl:flex-col md:top-[23px] fixed 2xl:left-[unset] 2xl:translate-x-[unset] md:left-[50%] md:translate-x-[-50%] 2xl:top-[unset] top-0 justify-between flex-row flex-shrink-0 px-3 sm:px-6 2xl:px-[unset] md:rounded-[1.25rem] py-8 bg-[#161d2f] items-center w-full h-14 md:h-[72px] md:w-[719px] 2xl:h-[833px] 2xl:w-24">
        <AppLogo />
        <NavButtons current={current} goToPage={goToPage} />
        <div className="relative group">
          <Image
            src={`/assets/image-avatar.png`}
            height={40}
            width={40}
            alt="profile picture"
            className="rounded-[100%] w-6 h-6 sm:w-8 sm:h-8 xl:w-10 xl:h-10 border-[1px]"
          />
          <button onClick={deAuth} className="w-8 top-0 absolute hidden group-hover:block text-white h-1 bg-[#fc4747]">Exit</button>
        </div>
      </nav>
    </div>
  );
}
