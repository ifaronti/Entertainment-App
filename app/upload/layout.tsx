'use client'
import { AppLogo } from "@/components"
import { Section } from "@/components"
import { useEffect, useState, createContext } from "react"
import { useRouter } from "next/navigation"

type AI = {
    isAI: boolean,
    image: any,
    token:string|null
}
const contextInit = {
    isAI: false,
    image: '',
    token:''
}

export const AIcontext = createContext<AI>(contextInit)

export default function Layout({ children }: { children: React.ReactNode }) {
    const [AIdetails, setAIdetails] = useState<AI>({ isAI: false, image: '', token: '' })
    const goTo = useRouter()

    const auth = () => {
        const token = localStorage.getItem('token')
        if (!token || token === null || token === undefined) {
            goTo.push('/login')
        }
    }

    auth()
    
    useEffect(() => {
        const image = localStorage.getItem('image')
        const isAI = localStorage.getItem('isAI')
        const token = localStorage.getItem('token')

        if (isAI === 'true') {
            return setAIdetails({isAI:true, image:image, token:token})
        }
        setAIdetails({isAI:false, image:'', token:token})
    },[])

    return (
        <AIcontext.Provider value={AIdetails}>
            <Section className="w-full flex flex-col items-center justify-center gap-10 min-h-screen">
                <AppLogo />
                {children}
            </Section>
        </AIcontext.Provider>
    )
}