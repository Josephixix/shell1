import type { Metadata } from "next";
import { Geist, Geist_Mono,DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { GoogleAnalytics } from "@next/third-parties/google";


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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
     className={`${dmSans.variable} antialiased`}
    > 
      <body className="min-h-full flex flex-col">{children}</body>

      <GoogleAnalytics gaId="G-GS0WZHFR28" />
    </html>
  );
}
