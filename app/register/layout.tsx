import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Register to begin",
  };
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <section className="h-full flex items-center justify-center w-full">
            {children}
        </section>
    )
}