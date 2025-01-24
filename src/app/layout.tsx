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
  title: {
    template: "%s : SOPT 데모데이",
    default: "SOPT 데모데이",
  },
  description: "35기 AND SOPT 데모데이",
  openGraph: {
    title: "Connecting Dots.",
    description: "Connecting Dots. : 35기 SOPT 데모데이",
    images: [
      {
        url: "https://github.com/user-attachments/assets/7c7453ed-f5b6-4e40-b97d-536070f5346a",
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
