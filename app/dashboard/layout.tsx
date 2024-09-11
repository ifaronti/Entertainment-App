"use client";
import { NavBar } from "@/components/Navbar";
import { Metadata } from "next";
import { Section } from "@/components";
import { useState, useEffect} from "react";
import SearchForm from "./searchForm";
import { useRouter } from "next/navigation";

// const metadata: Metadata = {
//     title:'Dashboard'
// }

export default function Layout({ children }: { children: React.ReactNode }) {
  const [searchParam, setSearchParam] = useState("");
  const goTo = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token || token === null || token === undefined) {
      return goTo.push('/login')
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchParam(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchParam) {
      return;
    }
    console.log(searchParam);
  };

  return (
      <Section className="min-h-screen flex-shrink-0 mx-auto justify-center w-full xl:w-[1440px] py-8 flex px-8 gap-7">
        <NavBar />
        <div className="w-full flex-shrink-0 relative flex-grow-0">
          <SearchForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            searchParam={searchParam}
          />
          {children}
        </div>
      </Section>
  );
}