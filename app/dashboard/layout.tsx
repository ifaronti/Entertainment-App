"use client";
import { NavBar } from "@/components/Navbar";
import { Metadata } from "next";
import { Section } from "@/components";
import { useState, createContext, useEffect} from "react";
import axios from "axios";
import SearchForm from "./searchForm";
import { all } from "./page";
import { useRouter } from "next/navigation";
import { getBookmarks } from "@/components/API-calls/bookmarks";

// const metadata: Metadata = {
//     title:'Dashboard'
// }

type contextType = {
  all: all[],
  bookmarks: string[],
  handleBookmarks: (data: string[]) => void,
  token:string
};

const data: contextType = {
  all: [],
  bookmarks: [],
  handleBookmarks: (data: string[]) => { },
  token:''
};

export const dataContext = createContext<contextType>(data);

export default function Layout({ children }: { children: React.ReactNode }) {
  const [searchParam, setSearchParam] = useState("");
  const [all, setAll] = useState<all[]>([])
  const [bookmarks, setBookmarks] = useState<string[]>([])
  const [token, setToken] = useState('')
  const goTo = useRouter()

  const handleBookmarks = (data:string[]) => {
    setBookmarks(data)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    const getAll = async () => {
      try {
        const url = process.env.APP_API
        if (!token || token === null || token === undefined) {
          return goTo.push('/login')
        }
        const { data } = await axios.get(`${url}/all`, {headers:{authorization:'Bearer '+token}});
        setAll(data.data);
        getBookmarks(token, handleBookmarks)
        setToken(token)

      } catch (err: any) {
      
      }
    };
    getAll();
    
  }, [goTo]);

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
    <dataContext.Provider value={{all, handleBookmarks, token, bookmarks}}>
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