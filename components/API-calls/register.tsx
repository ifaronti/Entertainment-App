'use client'
import axios from "axios"
import { paramsType } from "./login"
import { RedirectType } from "next/navigation"

type bodyType = {
    email: string,
    password:string
}

export const RegisterCall = async (body:bodyType, redirect:(params:paramsType)=>RedirectType) => {
    try {
        if (!body.email || !body.password) {
            return
        }
        const url = process.env.APP_API
        const { data } = await axios.post(`${url}/register`, body)
        redirect(data)
    }
    catch (err:any) {
        redirect(err)
    }
}