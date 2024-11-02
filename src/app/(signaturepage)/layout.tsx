import Image from "next/image";
import Top from "@/public/Top app bar.svg";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Image src={Top} alt="" />

      {children}
    </div>
  );
}
