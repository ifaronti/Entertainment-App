import { AppLogo, Heading, Section, Text } from "@/components";
import { Card } from "@/components";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create an account",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Section className="flex justify-center items-center w-full h-screen">
      <div>
        <div className="flex items-center justify-center h-40">
          <AppLogo />
        </div>
        <div className="flex flex-col gap-4">
          <Card className="min-w-[400px] flex flex-col gap-4">
            <Heading>Sign up</Heading>
            <div className="flex flex-col gap-3">{children}</div>
          </Card>
          <div>
            <div className="text-center">
              <Text>
                <span>Already have an account?</span>{" "}
                <Link href="/login">Login</Link>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Layout;
