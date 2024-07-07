import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    // if you use absolute it will igrone both default and template
    absolute: "",
    default:"Psolite List",
    template: "%s | Psolite"
  },
  description: "NextJs for FrontEnd Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="mb-20 px-auto py-12 bg-red-200 ">
          
            <h1><Link href='/'>Psolite List</Link> </h1>
         
        </header>
        {children}
        <footer className="mt-20 p-12 p-auto my-0 bg-blue-200">
          <h3>Footer</h3>
        </footer>
        </body>
    </html>
  );
}
