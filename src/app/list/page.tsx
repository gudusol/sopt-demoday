"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductList from "@/components/ProductList";
import { listData } from "../../../public/data/listData";
import { useState } from "react";

const List = () => {
  const [menu, setMenu] = useState<"appjam" | "sopt-term" | "makers">("appjam");

  return (
    <>
      <Header selectedMenu="product" isSmallLogo={true} />
      <main className="w-full px-[2rem] pt-[7.6rem]">
        <nav className="w-full">
          <ul className="flex gap-[0.9rem]">
            <li
              className={`font-title4_sb_15 flex h-[3.3rem] flex-[2] items-center justify-center border ${
                menu === "appjam"
                  ? "bg-w100 font-bold text-black"
                  : "bg-black text-w100"
              }`}
              onClick={() => setMenu("appjam")}
            >
              앱잼
            </li>
            <li
              className={`font-title4_sb_15 flex h-[3.3rem] flex-[1] items-center justify-center border ${
                menu === "sopt-term"
                  ? "bg-w100 font-bold text-black"
                  : "bg-black text-w100"
              }`}
              onClick={() => setMenu("sopt-term")}
            >
              솝텀
            </li>
            <li
              className={`font-title4_sb_15 flex h-[3.3rem] flex-[1] items-center justify-center border ${
                menu === "makers"
                  ? "bg-w100 font-bold text-black"
                  : "bg-black text-w100"
              }`}
              onClick={() => setMenu("makers")}
            >
              메이커스
            </li>
          </ul>
        </nav>

        <section className="mb-[6rem] mt-[2.3rem]">
          {menu === "appjam" && <ProductList products={listData.appjam} />}
          {menu === "sopt-term" && (
            <ProductList products={listData["sopt-term"]} />
          )}
          {menu === "makers" && <ProductList products={listData.makers} />}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default List;
