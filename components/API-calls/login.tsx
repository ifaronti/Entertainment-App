import axios from "axios";

type requestBody = {
    email: string,
    password:string
}

export type paramsType = {
    success: boolean
    authorization: string
} & string

export type redirectsType = (params:paramsType)=>void

export const loginUser = async (body: requestBody, redirect: redirectsType) => {
    try {
        if (!body.password || !body.email) {
            return
        }
        const url = process.env.APP_API
        const { data } = await axios.post(`${url}/login`, body)
        redirect(data)
        
    }
    catch (err:any) {
        redirect(err.message);
    }
}