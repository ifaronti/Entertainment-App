import { AppLogo } from "@/components"
import { Section } from "@/components"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Section className="w-full flex flex-col items-center justify-center gap-10 min-h-screen">
            <AppLogo />
            {children}
        </Section>
    )
}