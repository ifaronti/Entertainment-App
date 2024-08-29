import { Metadata } from "next"
import AppLogo from "@/components/AppLogo";
import Container from "@/components/Container"
export const metadata: Metadata = {
    title: "Register to begin",
  };
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
            
            <Container className="min-h-[100vh] relative flex flex-col gap-[83px] items-center justify-center w-full">
                <AppLogo/>
                {children}
            </Container>

    )
}