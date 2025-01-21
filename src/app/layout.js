import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-6">
        <Navbar/>

        {children}
      </body>
    </html>
  );
}
