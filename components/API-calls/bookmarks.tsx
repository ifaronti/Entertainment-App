import axios from "axios";

type handleBookmarksType = () => void;
const url = process.env.APP_API;

export const addBookmark = async (
  title: string,
  token: string | null | undefined,
  handleBookmarks: handleBookmarksType
) => {
  try {
    const { data } = await axios.put(
      `${url}/bookmarks`,
      { title: title },
      { headers: { authorization: "Bearer " + token } }
    );
    if (data?.data) {
      handleBookmarks();
    }
  } catch (err: any) {
    console.log(err.message);
  }
};

export const deleteBookmarks = async (
  title: string,
  token: string | null | undefined,
  handleBookmarks: handleBookmarksType
) => {
  try {
    const { data } = await axios.patch(
      `${url}/bookmarks`,
      { title: title },
      { headers: { authorization: "Bearer " + token } }
    );
    if (data.data) {
      handleBookmarks();
    }
  } catch (err: any) {
    console.log(err.message);
  }
};
