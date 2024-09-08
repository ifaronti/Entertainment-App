import Axios from 'axios'

const ApiClient = Axios.create({
  baseURL: process.env.APP_API,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default ApiClient
