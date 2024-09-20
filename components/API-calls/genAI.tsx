import axios from "axios";
import { responseType } from "../../app/genAI/imageRequestForm";

type handleResponse = (data: responseType&string) => void;
type bodyType = {
  type: string;
  text: string;
};

export const genImageAIRequest = async (
  body: bodyType,
  token: string|null|undefined,
  handleResponse: handleResponse
) => {
  if (!token || !body.type || !body.text) {
    return;
  }
  try {
    const url = process.env.APP_API;
    const { data } = await axios.post(`${url}/imageAI`, body, {
      headers: { Authorization: `Bearer ${token}` },
    });
    handleResponse(data);
  }
  catch (err:any) {
    handleResponse(err.message)
  }
};
