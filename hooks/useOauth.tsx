import axios from "axios";

export default function UseOauth(code: string, redirect: () => void) {
    async function gitAuthentication() {
        const url = process.env.APP_API
        const { data } = await axios.get(`${url}/login?code=${code}`)
        if (data.success) {
            localStorage.setItem('token', data.token)
            redirect()
        }
    }
    return gitAuthentication()
}