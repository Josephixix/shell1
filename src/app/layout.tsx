import type { Metadata } from "next";
import { Geist, Geist_Mono,DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";


const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blue Hibiscus",
  description: "Herbal secret to a good night rest",
};
<meta
  name="blue hibiscus"
  content="Natural sleep remedies, herbal drinks, and wellness guides designed to help seniors sleep better naturally."
/>
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
     className={`${dmSans.variable} antialiased`}
    > <Navbar />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
