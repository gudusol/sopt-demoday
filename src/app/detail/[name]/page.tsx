"use client";
import Image from "next/image";
import Header from "@/components/Header";
import { useParams, useRouter } from "next/navigation";
import { products } from "../../../../public/data/products";
import { useEffect } from "react";
import LinkButton from "@/components/LinkButton";
import { pahtToProductKey } from "@/constants/productName";

const Detail = () => {
  const router = useRouter();
  const { name } = useParams();
  const decodedName = decodeURIComponent(name as string);
  const productKey =
    pahtToProductKey[decodedName as keyof typeof pahtToProductKey];

  const product = products[productKey as keyof typeof products];

  useEffect(() => {
    if (!(productKey in products)) {
      router.replace("/");
    }
  }, [productKey, router]);

  if (!(productKey in products)) {
    return null;
  }

  const {
    image1,
    logoImage,
    productName,
    type,
    category,
    description,
    makers,
    image2,
  } = product;

  return (
    <>
      <Header selectedMenu="product" isSmallLogo={true} />
      <main className="w-full px-[2rem] pt-[7.6rem]">
        <Image
          className="mt-[1.3rem]"
          src={image1}
          alt={image1}
          width={390}
          height={221}
          style={{ width: "100%", height: "auto" }}
        />
        <section className="mt-[2rem] flex items-center gap-[1.7rem] border-b border-dotted border-w20 pb-[1.5rem]">
          <Image
            src={logoImage}
            alt={logoImage}
            width={66}
            height={66}
            style={{ width: "66px", height: "66px" }}
          />
          <div>
            <h1 className="font-head1_b_28 text-w100">{productName}</h1>
            <div className="flex gap-[0.8rem]">
              <p className="font-body3_r_14 text-w50">
                {type === "mobile" ? "앱" : "웹"} 서비스
              </p>
              <Image
                src="/icons/dot.svg"
                alt="dot"
                width={3}
                height={3}
                style={{ width: "3px", height: "3px" }}
              />
              <p className="font-body5_m_14 text-w90">{category}</p>
            </div>
          </div>
        </section>
        <p className="font-body3_r_14 mt-[1.9rem] text-w90">{description}</p>
        <section className="mb-[4.5rem] mt-[3.3rem] flex flex-col gap-[0.6rem]">
          {Object.keys(makers).map((key) => {
            const developerKey = key as keyof typeof makers;
            return (
              makers[developerKey].length > 0 && (
                <div key={developerKey} className="flex gap-[1.4rem]">
                  <h4 className="font-caption1_b_13 text-w100">
                    {developerKey === "plan" && `🖊️ 기획자`}
                    {developerKey === "design" && `🎨 디자이너`}
                    {developerKey === "android" && `🤖 안드로이드 개발자`}
                    {developerKey === "ios" && `🍏 iOS 개발자`}
                    {developerKey === "web" && `🌐 웹 개발자`}
                    {developerKey === "server" && `💻 서버 개발자`}
                  </h4>
                  <ul className="font-caption2_r_13 flex items-center gap-[0.6rem] text-w80">
                    {makers[developerKey].map((makers, index) => (
                      <li key={index} className="">
                        {makers}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            );
          })}
        </section>
        <Image
          src={image2}
          alt={image2}
          width={390}
          height={221}
          style={{ width: "100%", height: "auto" }}
        />
        <div className="mb-[4.4rem] mt-[3.5rem] w-full px-[2.5rem]">
          <LinkButton url="/list">
            <Image
              src="/icons/cta_arrow.svg"
              alt="cta_arrow"
              width={17}
              height={17}
              style={{ width: "17px", height: "17px" }}
            />
            <span className="font-title3_b_18 mx-[1.6rem]">
              데모데이 서비스 보러가기
            </span>
            <Image
              src="/icons/cta_arrow.svg"
              alt="cta_arrow"
              width={17}
              height={17}
              style={{ width: "17px", height: "17px" }}
            />
          </LinkButton>
        </div>
      </main>
    </>
  );
};

export default Detail;
