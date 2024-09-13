import axios from "axios";

type reqBody = FormData;

export const uploadImage = async (body: reqBody, token: string|null|undefined) => {
    if (!token || !body) {
        return;
    }
    
    try {
        const url = process.env.APP_API
        const { data } = await axios.post(`${url}/upload`, body, {
        headers: { authorization: `Bearer ${token}`, 'Content-Type':'multipart/form-data' },
        });
    
        console.log(data);
    }
    catch (err) {
        console.log(err);
    }
};
