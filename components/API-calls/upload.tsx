import axios from "axios";

type reqBody = FormData;
const url = process.env.APP_API;
export const uploadImage = async (
  body: reqBody,
  token: string | null | undefined
) => {
  if (!token || !body) {
    return;
  }

  try {
      await axios.post(`${url}/upload`, body, {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    
  } catch (err:any) {
    console.log(err);
  }
};

export const deleteUpload = async (title: string, token: string | null) => {
  if (!title || !token || !token === undefined || token === null) {
    return;
  }
  try {
    await axios.delete(`${url}/upload?title=${title}`, {
      headers: { authorization: `Bearer ${token}` },
    });
  } catch (err: any) {
    console.log(err.message);
  }
};
