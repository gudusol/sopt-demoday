import { Metadata } from "next";

export const metadata: Metadata = {
  title: "서비스 소개 : SOPT 데모데이",
};

export default function ListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
