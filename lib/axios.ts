import axios from "axios";

const callClient = axios.create({
    baseURL: process.env.APP_API,
    headers: {
        'Content-Type': 'application/json'
    }
})

callClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('token') || ''
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default callClient