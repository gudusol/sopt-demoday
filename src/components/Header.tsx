"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 z-10 flex w-full max-w-[43rem] items-start justify-between bg-black p-[2rem] transition-all">
      <Image
        src={"/images/logo.svg"}
        alt="logo-image"
        width={isScrolled ? 105 : 225}
        height={isScrolled ? 41 : 88}
        className="object-contain transition-all"
      />

      <Image
        src="/icons/hamburger.svg"
        alt="hamburger-menu"
        width={30}
        height={23}
      />
    </header>
  );
}
