"use client";
import { NavBar } from "@/components/Navbar";
import { Metadata } from "next";
import { Section } from "@/components";
import { useState, createContext, useEffect, Dispatch, SetStateAction} from "react";
import axios from "axios";
import SearchForm from "./searchForm";
import { all } from "./page";

// const metadata: Metadata = {
//     title:'Dashboard'
// }

type contextProps = {
  all: all[],
};

const data: contextProps = {
  all: [],
};
export const dataContext = createContext<contextProps>(data);

export default function Layout({ children }: { children: React.ReactNode }) {
  const [searchParam, setSearchParam] = useState("");
  const [all, setAll] = useState<all[]>([])

  useEffect(() => {
    const getAll = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/api/all");
        setAll(data.data);
      } catch (err: any) {
        console.log(err.message);
      }
    };
    getAll();
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
    <dataContext.Provider value={{all}}>
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
    </dataContext.Provider>
  );
}