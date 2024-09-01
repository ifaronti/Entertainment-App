import { AppLogo, Section } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create an account",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Section className="flex flex-col gap-[83px] justify-center items-center w-full h-screen">
      <AppLogo/>
      {children}
    </Section>
  );
};

export default Layout;
