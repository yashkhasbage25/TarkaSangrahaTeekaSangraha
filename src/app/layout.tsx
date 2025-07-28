import type { Metadata } from "next";  
import { Martel } from "next/font/google";  
import Navbar from "@/app/components/Navbar";  
import "./globals.css";  
  
const martelFont = Martel({  
  weight: "400",  
  subsets: ["devanagari", "latin"],
});  

export const metadata: Metadata = {
  title: 'Tarka Sangraha',
  description: `Unlock the profound world of Nyāya philosophy 
with Tarkasaṅgraha Insights, your definitive online resource for 
Annambhaṭṭa's Tarkasaṅgraha. Explore the core text and an 
unparalleled collection of its vital commentaries like Dīpikā, 
Nīlakaṇṭhī, and Dinakarī. Ideal for students, scholars, and 
enthusiasts, our platform offers critical editions, comparative 
viewing, and extensive resources to master Indian logic and 
epistemology.`,
}

  
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {  
  return (  
    <html lang="hi">  
      <body className={`${martelFont.className} flex flex-col antialiased min-h-screen`}>  
        <Navbar />  
        <div className="flex-grow flex items-center justify-center px-4">  
          {children}  
        </div>  
      </body>  
    </html>  
  );  
}  