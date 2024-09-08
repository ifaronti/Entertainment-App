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
