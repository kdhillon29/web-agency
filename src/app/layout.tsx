import type { Metadata } from "next";
import { Inter, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Agency",
  description:
    "Digital web agency,create stunning web application using nextjs,javascript,html5,css3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
