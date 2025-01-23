import type { Metadata } from "next";
import "../styles/globals.css";

import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={dmSans.variable}>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
