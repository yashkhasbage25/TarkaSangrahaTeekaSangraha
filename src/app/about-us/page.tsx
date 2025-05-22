'use client';
import Image from "next/image";  
import Link from "next/link";

export default function AboutUs() {  
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
        This website is under development. For any queries, please contact us at:
        Email: <Link href="mailto:yashkhasbage25@gmail.com">yashkhasbage25@gmail.com</Link>
      </p>  
    </div>
  );  
}  