// components/Navbar.tsx  
import Link from 'next/link';  
import Image from 'next/image';
import { Noto_Serif_Devanagari } from "next/font/google";

const notoSerifDevanagari = Noto_Serif_Devanagari({
  variable: "--font-noto-serif-devanagari",
  subsets: ["devanagari"],
});
const Navbar = () => {
  return (
    <nav className={`bg-gray-100 p-4 flex justify-between items-center ${notoSerifDevanagari.className} antialiased`}>
      <div>
      <Image
            src="/smoky_mountain.png"
            alt="Logo"
            width={50}
            height={50}
            className="inline-block mr-2"
          />
        <Link href="/" className="text-xl text-gray-800 hover:text-gray-600">
          तर्कसङ्ग्रहः
        </Link>
      </div>
      <div className="flex items-center">
        <Link href="/introduction-to-tarka" className="text-xl text-gray-800 hover:text-gray-600">
          प्रारम्भिकम्
        </Link>
        <Link href="/grantha" className="text-xl text-gray-800 hover:text-gray-600 ml-6">
          ग्रन्थाः
        </Link>
        <Link href="/anveshanam" className="text-xl text-gray-800 hover:text-gray-600 ml-6">
          अन्वेषणम्
        </Link>
        <Link href="/lakshanavibhagau" className="text-xl text-gray-800 hover:text-gray-600 ml-6">
          लक्षणविभागौ
        </Link>
        <Link href="/vishayasangraha" className="text-xl text-gray-800 hover:text-gray-600 ml-6">
          विषयसङ्ग्रहः
        </Link>
        <Link href="/about-us" className="text-xl text-gray-800 hover:text-gray-600 ml-6 mr-3">
          परिचयः
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;  