import { Noto_Serif_Devanagari } from "next/font/google";

const notoSerifDevanagari = Noto_Serif_Devanagari({
  variable: "--font-noto-serif-devanagari",
  subsets: ["devanagari"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${notoSerifDevanagari.className} antialiased`}
    >
      {children}
    </div>
  );
}
