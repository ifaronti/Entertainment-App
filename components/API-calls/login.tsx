import axios from "axios";

type requestBody = {
    email: string,
    password:string
}

type redirectType = ()=>{}

export const loginUser = async (body:requestBody, redirect:redirectType) => {
    try {
        if (!body.password || !body.email) {
            return
        }
        const url = process.env.APP_API
        const { data } = await axios.post(`${url}/login`, body)
        if (data.success) {
            localStorage.setItem('token', data.authorization)
            redirect
        }
        else {
            console.log(data);
        }
        
    }
    catch (err:any) {
        console.log((err.message));
    }
}