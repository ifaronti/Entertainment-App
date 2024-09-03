"use client";

import { useState } from "react";
import NavButtons from "./navButtons";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const [current, setCurrent] = useState("home");
  const gotTo = useRouter();

  const goToPage = (page: string) => {
    setCurrent(page);
    gotTo.push("/" + page);
  };

  return (
    <nav className="flex flex-col rounded-[1.25rem] py-8 bg-[#161d2f] items-center h-[833px] w-24 justify-between">
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