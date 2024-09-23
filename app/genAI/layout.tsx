'use client'

import { AppLogo } from "@/components"
import { Section } from "@/components"
import { useRouter } from "next/navigation"

export default function Layout({ children }: { children: React.ReactNode }) {
    const goTo = useRouter()

    const auth = () => {
        const token = localStorage.getItem('token')
        if (!token || token === null || token === undefined) {
            goTo.push('/login')
        }
    }

    auth()

    return (
        <Section className="w-full flex flex-col items-center justify-center gap-10 min-h-screen">
            <AppLogo />
            {children}
        </Section>
    )
}