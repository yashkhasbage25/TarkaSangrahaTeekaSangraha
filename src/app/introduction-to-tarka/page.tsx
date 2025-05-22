'use client';
import Image from "next/image";  
import { Eczar } from "next/font/google";

const eczarLight = Eczar({ weight: "400", subsets: ["devanagari"] });  

export default function IntroductionToTarkaShastra() {  
  return (  
    <div className="flex flex-col items-center justify-center min-h-screen p-4">  
      <h1 className={`${eczarLight.className} text-3xl font-bold mb-4`}>तर्कशास्त्रस्य परिचयः</h1>  
      <Image  
        src="/smoky_mountain_2.png"  
        alt="Logo"  
        width={300}  
        height={300}  
        className="mb-4"  
      />  
      <p className="text-lg max-w-2xl text-center">  
        Here, we will add some notes from SC Chatterjee book. 
      </p>  
    </div>

  );  
}  