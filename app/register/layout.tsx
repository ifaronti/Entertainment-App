import { Metadata } from "next"
import AppLogo from "@/components/AppLogo";
import Container from "@/components/Container"
import { registerStyles } from "./style";

export const metadata: Metadata = {
    title: "Register to begin"
};
  
export default function Layout({ children }: { children: React.ReactNode }) {
    return <Container className={registerStyles.layoutContainer}>
                <AppLogo/>
                {children}
           </Container>
}