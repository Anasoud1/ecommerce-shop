import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShopContextProvider from "./(context)/ShopContext";
import { ToastContainer } from "react-toastify";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-6">
        <ShopContextProvider>
          <ToastContainer/>
          <Navbar />
          {children}
          <Footer />
        </ShopContextProvider>
      </body>
    </html>
  );
}
