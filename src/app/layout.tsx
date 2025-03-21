import type { Metadata } from "next";
import { Noto_Serif_Devanagari } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const notoSerifDevanagari = Noto_Serif_Devanagari({
  variable: "--font-noto-serif-devanagari",
  subsets: ["devanagari"],
  // display: "swap",
});

export const metadata: Metadata = {
  title: "Tarka Sangraha",
  description: "Tarka Sangraha - A collection of logical arguments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSerifDevanagari.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
