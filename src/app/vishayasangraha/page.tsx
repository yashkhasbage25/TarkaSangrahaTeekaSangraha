'use client';
import Image from "next/image";  

export default function IntroductionToTarkaShastra() {  
  return (  
    <div className="flex flex-col items-center justify-center min-h-screen p-4">  
      <Image  
        src="/smoky_mountain_2.png"  
        alt="Logo"  
        width={300}  
        height={300}  
        className="mb-4"  
      />  
      <p className="text-lg max-w-2xl text-center">  
        Here, we will have a word cloud of the topics in several books.
      </p>  
    </div>
  );  
}  