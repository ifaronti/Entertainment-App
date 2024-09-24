'use client'

import { AppLogo } from "@/components"
import { Section } from "@/components"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Layout({ children }: { children: React.ReactNode }) {
    const goTo = useRouter()


    useEffect(() => {
        const auth = () => {
            const token = localStorage.getItem('token')
            if (!token || token === null || token === undefined) {
                goTo.push('/login')
            }
        }
      auth()
    },[goTo])

    return (
        <Section className="w-full flex flex-col items-center justify-center gap-10 min-h-screen">
            <AppLogo />
            {children}
        </Section>
    )
}