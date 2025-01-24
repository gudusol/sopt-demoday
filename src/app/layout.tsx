import type { Metadata } from "next";
import "../styles/globals.css";

import { DM_Sans } from "next/font/google";
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
      </body>
    </html>
  );
}
