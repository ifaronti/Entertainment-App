'use client'
import axios from "axios"

type bodyType = {
    email: string,
    password:string
}

export const RegisterCall = async (body:bodyType) => {
    try {
        if (!body.email || !body.password) {
            return
        }
        const url = process.env.APP_API
        const { data } = await axios.post(`${url}/register`, body)
        if (data.success) {
            console.log(data.message);
        }
    }
    catch (err:any) {
        console.log(err.message);
    }
}