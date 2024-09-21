"use client";
import { NavBar } from "@/components/Navbar";
import { Section } from "@/components";
import { useState, useEffect, createContext} from "react";
import SearchForm from "./searchForm";
import { useRouter } from "next/navigation";
import { mediaType } from "@/components/SVGAssets";
import useGetMedia from "@/hooks/getMedia";
import { theCategories } from "@/hooks/getMedia";

type media = {
  search:string
} 

const allContextInit= {
  search:''
} 

export const allContext = createContext<media>(allContextInit)

export default function Layout({ children }: { children: React.ReactNode }) {
  const [searchParam, setSearchParam] = useState("");
  const [search, setSearch] = useState('')
  const goTo = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token || token === null || token === undefined) {
      return goTo.push('/login')
    }
  }, [goTo]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchParam(value);
    if (!value) {
      setSearch('')
    }
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(searchParam)
  };

  return (
    <allContext.Provider value={{search}}>
      <Section className="min-h-screen flex justify-center flex-col 2xl:flex-row flex-shrink-0 gap-7 mx-auto w-full 2xl:w-[1440px] pt-8 py-8">
        <div className="w-full flex relative h-14 md:h-[72px] 2xl:h-[833px] 2xl:w-24">
          <NavBar />
        </div>
          <div className="w-full 2xl:pt-8 flex-shrink-0 relative flex-grow-0">
            <SearchForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              searchParam={searchParam}
            />
            {children}
          </div>
      </Section>
    </allContext.Provider>
  );
}