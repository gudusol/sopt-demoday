"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface HeaderProps {
  selectedMenu: "about" | "product";
  isSmallLogo?: boolean;
}

export default function Header({
  selectedMenu,
  isSmallLogo = false,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

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

  const handleLogoClick = (event: React.MouseEvent<HTMLImageElement>) => {
    if (pathname === "/") {
      window.scrollTo(0, 0);
      window.location.reload();
    } else {
      event.preventDefault();
      router.push("/");
    }
  };

  return (
    <header className="fixed top-0 z-30 w-full max-w-[43rem] bg-black transition-all">
      <div className="relative z-20 flex items-start justify-between bg-black px-[2rem] pb-[1.6rem] pt-[1.9rem]">
        <Image
          src={"/images/logo.svg"}
          alt="logo-image"
          width={isSmallLogo ? 105 : isScrolled ? 105 : 225}
          height={isSmallLogo ? 41 : isScrolled ? 41 : 88}
          className="cursor-pointer object-contain transition-all"
          priority
          onClick={handleLogoClick}
        />
        <button onClick={toggleMenu}>
          <Image
            src={isOpen ? "/icons/ic_close.svg" : "/icons/hamburger.svg"}
            alt="menu-icon"
            width={30}
            height={23}
            style={{ width: "30px", height: "23px" }}
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
            className={`font-title3_b_18 border-b border-dotted border-w20 bg-black py-[1.6rem] pl-[2rem] ${
              selectedMenu === "about" ? "text-blue" : "text-w95"
            }`}
          >
            <Link className="flex gap-[1.3rem]" href={"/"}>
              <span>행사 개요</span>
              <span>About</span>
            </Link>
          </li>

          <li
            className={`font-title3_b_18 border-b border-dotted border-w20 bg-black py-[1.6rem] pl-[2rem] ${
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
              className="flex items-center gap-[1.3rem]"
              href="https://www.sopt.org"
              target="_blank"
            >
              <span>SOPT 소개</span>
              <Image
                src="/icons/cta_arrow_white.svg"
                alt="cta_arrow"
                width={15}
                height={15}
                style={{ width: "15px", height: "15px" }}
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
