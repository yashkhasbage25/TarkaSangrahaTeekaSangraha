'use client';
import { useState } from 'react';  
import Link from 'next/link';  
import Image from 'next/image';  
import { Martel } from 'next/font/google';  
  
const martelFont = Martel({  
  weight: '400',  
  subsets: ['latin'],  
});  
  
const Navbar = () => {  
  const [isMenuOpen, setIsMenuOpen] = useState(false);  
  
  const toggleMenu = () => {  
    setIsMenuOpen(!isMenuOpen);  
  };  
  
  return (  
    <nav className={`bg-black p-4 flex flex-col sm:flex-row justify-between items-center border-b-1 ${martelFont.className} antialiased`}>  
      <div className="flex items-center justify-between w-full sm:w-auto">  
        <div className="flex items-center">  
           
          <Link href="/" className="text-xl ml-6 text-white hover:text-gray-600 ease-in-out duration-500">  
            <Image  
              src="/smoky_mountain_2.png"  
              alt="Logo"  
              width={50}  
              height={50}  
              className="inline-block mr-2"  
            /> 
            तर्कसङ्ग्रहः  
          </Link>  
        </div>  
        <button className="sm:hidden text-white focus:outline-none" onClick={toggleMenu}>  
          <svg  
            className="w-6 h-6"  
            fill="none"  
            stroke="currentColor"  
            viewBox="0 0 24 24"  
            xmlns="http://www.w3.org/2000/svg"  
          >  
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>  
          </svg>  
        </button>  
      </div>  
      <div className={`flex-col sm:flex-row sm:flex ${isMenuOpen ? 'flex' : 'hidden'} sm:flex items-center sm:w-auto w-full`}>  
        <Link href="/introduction-to-tarka" className="text-xl text-white hover:text-gray-600 ease-in-out duration-500 ml-6 mt-2 sm:mt-0">  
          प्रारम्भिकम्  
        </Link>  
        <Link href="/grantha" className="text-xl text-white hover:text-gray-600 ml-6 ease-in-out duration-500 mt-2 sm:mt-0">  
          ग्रन्थाः  
        </Link>  
        <Link href="/anveshanam" className="text-xl text-white hover:text-gray-600 ml-6 ease-in-out duration-500 mt-2 sm:mt-0">  
          अन्वेषणम्  
        </Link>  
        <Link href="/uddeshalakshanau" className="text-xl text-white hover:text-gray-600 ml-6 ease-in-out duration-500 mt-2 sm:mt-0">  
          उद्देशलक्षणौ  
        </Link>  
        <Link href="/vishayasangraha" className="text-xl text-white hover:text-gray-600 ml-6 ease-in-out duration-500 mt-2 sm:mt-0">  
          विषयसङ्ग्रहः  
        </Link>  
        <Link href="/about-us" className="text-xl text-white hover:text-gray-600 ml-6 mr-3 ease-in-out duration-500 mt-2 sm:mt-0">  
          परिचयः  
        </Link>  
      </div>  
    </nav>  
  );  
};  
  
export default Navbar;  