<<<<<<< HEAD
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
=======
import Axios from 'axios'

const ApiClient = Axios.create({
  baseURL: process.env.APP_API,
  headers: {
    'Content-Type': 'application/json',
  },
})

ApiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token') || '';

  config.headers.Authorization = `Bearer ${token}`

  return config;
})

export default ApiClient
>>>>>>> e1af1bcb863e4b3ddf029083de0a0b533f3793c4
