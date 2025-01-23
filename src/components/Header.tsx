"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  selectedMenu: "about" | "product";
}

export default function Header({ selectedMenu }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 w-full max-w-[43rem] bg-black transition-all">
      <div className="relative z-20 flex items-start justify-between bg-black p-[2rem]">
        <Image
          src={"/images/logo.svg"}
          alt="logo-image"
          width={isScrolled ? 105 : 225}
          height={isScrolled ? 41 : 88}
          className="object-contain transition-all"
        />
        <button onClick={toggleMenu}>
          <Image
            src={isOpen ? "/icons/ic_close.svg" : "/icons/hamburger.svg"}
            alt="menu-icon"
            width={30}
            height={23}
          />
        </button>
      </div>
      <nav
        className={`absolute left-0 z-10 flex w-full flex-col bg-black transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-[31rem]"
        }`}
      >
        <ul className="border-b border-w100">
          <li
            className={`border-w20 font-title3_b_18 border-b border-dotted bg-black py-[1.6rem] pl-[2rem] ${
              selectedMenu === "about" ? "text-blue" : "text-w95"
            }`}
          >
            <Link className="flex gap-[1.3rem]" href={"/"}>
              <span>행사 개요</span>
              <span>About</span>
            </Link>
          </li>

          <li
            className={`border-w20 font-title3_b_18 border-b border-dotted bg-black py-[1.6rem] pl-[2rem] ${
              selectedMenu === "product" ? "text-blue" : "text-w95"
            }`}
          >
            <Link className="flex gap-[1.3rem]" href={"/list"}>
              <span>데모데이 서비스 소개</span>
              <span>Product</span>
            </Link>
          </li>

          <li className="font-title3_b_18 bg-black py-[1.6rem] pl-[2rem] text-w95">
            <a
              className="flex gap-[1.3rem]"
              href="https://www.sopt.org"
              target="_blank"
            >
              <span>SOPT 소개</span>
              <Image
                src="/icons/cta_arrow_white.svg"
                alt="cta_arrow"
                width={15}
                height={15}
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
