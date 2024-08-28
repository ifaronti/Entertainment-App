import Register from "./page";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <section className="h-full flex items-center justify-center w-full">
            <Register/>
        </section>
    )
}