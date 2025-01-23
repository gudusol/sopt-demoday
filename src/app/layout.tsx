import type { Metadata } from "next";
import "../styles/globals.css";
import { pretendard, suit } from "@/styles/fonts";

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
    <html lang="en">
      <body className={`${pretendard.variable} ${suit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
