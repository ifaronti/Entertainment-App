"use client";
import { NavBar } from "@/components/Navbar";
import { Metadata } from "next";
import { Section } from "@/components";
import { useState, createContext, useEffect} from "react";
import axios from "axios";
import SearchForm from "./searchForm";
import { all } from "./page";
import { useRouter } from "next/navigation";
import { getBookmarks, deleteBookmarks, addBookmark } from "@/components/API-calls/bookmarks";

// const metadata: Metadata = {
//     title:'Dashboard'
// }

type contextProps = {
  all: all[],
  bookmarks:string[]
};

const data: contextProps = {
  all: [],
  bookmarks:[]
};
export const dataContext = createContext<contextProps>(data);

export default function Layout({ children }: { children: React.ReactNode }) {
  const [searchParam, setSearchParam] = useState("");
  const [all, setAll] = useState<all[]>([])
  const [token, setToken] = useState('')
  const [bookmarks, setBookmarks] = useState<string[]>([])
  const goTo = useRouter()

  const handleBookmarks = (data:string[]) => {
    setBookmarks(data)
  }
  
  const addRemoveBookmarks = (title:string) => {
    if (bookmarks.includes(title)) {
     return deleteBookmarks(title, token, handleBookmarks)
    }
    if (!bookmarks.includes(title)) {
      addBookmark(title, token, handleBookmarks)
    }
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
    <dataContext.Provider value={{all, bookmarks}}>
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