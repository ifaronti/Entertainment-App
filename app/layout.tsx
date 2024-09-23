import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Container } from "@/components";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Entertainment App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} scroll-smooth`}>
        <Container className="scroll-smooth">{children}</Container>
      </body>
    </html>
  );
}
