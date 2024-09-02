import { NavBar } from "@/components/Navbar";
import { Metadata } from "next";
import { Section } from "@/components";


export default function Layout({ children }: { children: React.ReactNode }) {
    
    return (
        <Section className="min-h-screen w-full py-8 flex px-8 gap-7">
            <NavBar />
            {children}
        </Section>
    )

}