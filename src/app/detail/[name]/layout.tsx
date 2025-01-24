import { Metadata } from "next";

interface DetailProps {
  params: { name: string };
}

export async function generateMetadata({
  params,
}: DetailProps): Promise<Metadata> {
  const { name } = await params;
  const decodedName = decodeURIComponent(name);
  return {
    title: `${decodedName} : SOPT 데모데이`,
  };
}
export default function DetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
