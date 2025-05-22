import type { Metadata } from "next";  
import { Martel } from "next/font/google";  
import Navbar from "@/app/components/Navbar";  
import "./globals.css";  
  
const martelFont = Martel({  
  weight: "400",  
  subsets: ["devanagari", "latin"],
});  
  
export const metadata: Metadata = {  
  title: "Tarka Sangraha",  
  description: "Tarka Sangraha - A collection of logical arguments",  
};  
  
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {  
  return (  
    <html lang="hi">  
      <body className={`${martelFont.className} flex flex-col antialiased min-h-screen`}>  
        <Navbar />  
        <div className="flex-grow flex items-center justify-center px-4 md:px-8">  
          {children}  
        </div>  
      </body>  
    </html>  
  );  
}  