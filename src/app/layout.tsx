import type { Metadata } from "next";
import "../styles/globals.css";

import { DM_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import ScrollRestoration from "@/components/ScrollRestoration";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "SOPT 데모데이",
  description: "35기 AND SOPT 데모데이",
  openGraph: {
    title: "Connecting Dots.",
    description: "Connecting Dots. : 35기 SOPT 데모데이",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "SOPT Demoday OG Image",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${dmSans.variable} antialiased`}>
        <ScrollRestoration />
        {children}
        <Footer />
      </body>
    </html>
  );
}
