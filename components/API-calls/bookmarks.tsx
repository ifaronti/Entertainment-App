import axios from "axios"

type handleBookmarksType = (data: string[]) => void

export const getBookmarks = async (token:string, handleBookmarks:handleBookmarksType) => {
    const url = process.env.APP_API
    const { data } = await axios.get(`${url}/bookmarks`, {headers:{authorization:'Bearer '+token}})
    handleBookmarks(data.data?.bookmarks)
}

export const addBookmark = async (title:string, token:string, handleBookmarks:handleBookmarksType) => {
    const url = process.env.APP_API
    const { data} = await axios.put(`${url}/bookmarks`, {title:title}, {headers:{authorization:'Bearer '+token}})
    handleBookmarks(data.data?.bookmarks)
}

export const deleteBookmarks = async (title:string, token:string, handleBookmarks:handleBookmarksType) => {
    const url = process.env.APP_API
    const { data} = await axios.patch(`${url}/bookmarks`, {title:title}, {headers:{authorization:'Bearer '+token}})
    handleBookmarks(data.data?.bookmarks)
}