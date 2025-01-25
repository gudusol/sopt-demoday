"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LinkButton from "@/components/LinkButton";
import Splash from "@/components/Splash";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [showSplash, setShowSplash] = useState(false);

  const FadeInSection = ({ children }: { children: React.ReactNode }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {children}
      </motion.div>
    );
  };

  useEffect(() => {
    const images = ["/images/splash.webp", "/images/splash_bg.webp"];
    let loadedCount = 0;

    images.forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
      img.onload = () => {
        loadedCount += 1;
        if (loadedCount === images.length) {
          setIsImageLoaded(true);
          setShowSplash(true);
          setTimeout(() => setShowSplash(false), 3300);
        }
      };
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {!isImageLoaded && (
        <div className="absolute left-0 top-0 z-50 h-[100dvh] w-full bg-black"></div>
      )}
      {showSplash ? (
        <Splash />
      ) : (
        <>
          <Header selectedMenu="about" />
          <main className="w-full pt-[13rem]">
            <section className="w-full border-b border-dotted border-w50 px-[2rem] pb-[5rem]">
              <Image
                src={"/images/main_keyvisual.png"}
                alt="main-key-visual"
                width={335}
                height={361}
                style={{ width: "100%", height: "auto" }}
                priority
              />
              <FadeInSection>
                <h2 className="font-title3_b_18 mt-[3rem] whitespace-pre-line text-w100">
                  {`Connecting Dots\n: 예측할 수 없지만 모두 연결된 것들`}
                </h2>
                <p className="font-body3_r_14 mt-[2rem] whitespace-pre-line text-w95">
                  {`국내 최대 규모의 대학생연합 IT벤처창업 동아리 SOPT(솝트)에서 데모데이 <Connecting Dots: 예측할 수 없지만 모두 연결된 것들>을 개최합니다.\n
                SOPT는 2008년 창립 이후 IT 창업, 기획, 디자인, 개발에 관심 있는 대학생들이 모여 함께 열정을 외치며, 3,400명 이상의 회원이 300개 이상의 프로덕트를 만들어왔습니다.\n
                점이 모여 선이 되고, 선이 모여 면을 이루며, 면이 모여 차원을 만들어내듯, 각 직군과의 연결을 통해 자신의 세계를 확장해가는 SOPT의 여정을 데모데이에 담았습니다.\n
                '예측할 수 없지만 모두 연결된 것들'이라는 부제처럼, 무한한 가능성을 향해 나아가는 우리의 모습을 완성합니다.`}
                </p>
                <div className="mt-[4.4rem] w-full px-[1.5rem]">
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
              </FadeInSection>
            </section>
            <FadeInSection>
              <section className="w-full px-[2rem]">
                <h2 className="font-title3_b_18 mt-[5rem] text-w100">
                  행사 개요
                </h2>
                <div className="mt-[1.8rem] flex flex-col gap-[1rem]">
                  <div className="flex gap-[1.9rem]">
                    <h4 className="font-title2_b_14 text-w100">장소</h4>
                    <div className="flex flex-col gap-[0.2rem]">
                      <p className="font-body3_r_14 text-w95">마곡 NSP홀</p>
                      <p className="font-body4_r_12 text-w50">
                        (서울 강서구 마곡중앙1로 20 마곡M시그니처 지하 1층)
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-[1.9rem]">
                    <h4 className="font-title2_b_14 text-w100">일시</h4>
                    <p className="font-body3_r_14 text-w95">
                      2025년 1월 25일 토요일 12:30 - 19:10
                    </p>
                  </div>
                  <div className="flex gap-[1.9rem]">
                    <h4 className="font-title2_b_14 text-w100">대상</h4>
                    <p className="font-body3_r_14 text-w95">
                      IT와 창업에 관심이 있는 사람이라면 누구나
                    </p>
                  </div>
                </div>
              </section>
            </FadeInSection>
            <FadeInSection>
              <section className="w-full px-[2rem]">
                <h2 className="font-title3_b_18 mt-[6.3rem] text-w100">
                  AND SOPT 데모데이
                </h2>
                <p className="font-body3_r_14 mb-[1.9rem] mt-[1.8rem] text-w100">{`이번 데모데이에서는 SOPT의 꽃 5주간의 장기 해커톤인 ‘앱잼(AppJam)’ 뿐만 아니라 SOPT를 수료한 명예 회원들만의 프로젝트 ‘솝텀(SOPT-Term)’, 그리고 SOPT를 위한 프로덕트를 만드는 ‘메이커스 (SOPT makers)’의 결과물까지 함께 지켜보실 수 있습니다.`}</p>
                <Image
                  src="/images/main_photo.png"
                  alt="main_photo"
                  width={335}
                  height={301}
                  style={{ width: "100%", height: "auto" }}
                />
              </section>
            </FadeInSection>
            <FadeInSection>
              <section className="w-full px-[2rem]">
                <h2 className="font-title3_b_18 mt-[6.6rem] text-w100">
                  We are SOPT
                </h2>
                <p className="font-body3_r_14 mt-[1.8rem] whitespace-pre-line text-w100">
                  {`SOPT(솝트)는 국내 최대 규모의 대학생연합 IT벤처창업 동아리입니다. 2008년에 창립되어 17년째 대학생 창업 생태계 발전을 위해 노력하고 있습니다.\n
              IT 창업 및 기획, 디자인, 개발에 관심 있는 대학생들이 모여 함께 열정을 외치며 지금까지 3,400명 이상의 회원이 300개가 넘는 프로덕트를 만들었습니다.\n
              SOPT는 Shout Our Passion Together라는 이름 뜻처럼, 앞으로도 많은 사람들의 열정을 외치며 더욱 크게 도전하고자 합니다.\n`}
                </p>
                <div className="mt-[3.1rem] w-full px-[1.5rem]">
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
              </section>
            </FadeInSection>

            <section className="relative mt-[5.6rem]">
              <Image
                src="/images/main_line.svg"
                alt="main_line"
                width={375}
                height={117}
                style={{ width: "100%", height: "auto" }}
              />
              <div className="absolute bottom-[0.7rem] right-[2rem] flex flex-col items-end gap-[0.8rem]">
                <div className="flex gap-[0.63rem]">
                  <h4 className="font-dm_b_13 text-w100">SOPT website</h4>
                  <a
                    href="https://www.sopt.org"
                    target="_blank"
                    className="font-dm_variable text-w100"
                  >
                    sopt.org
                  </a>
                </div>
                <div className="flex gap-[0.63rem]">
                  <h4 className="font-dm_b_13 text-w100">instagram</h4>
                  <a
                    href="https://www.instagram.com/sopt_official"
                    target="_blank"
                    className="font-dm_variable text-w100"
                  >
                    @sopt_official
                  </a>
                </div>
                <div className="flex gap-[0.63rem]">
                  <h4 className="font-dm_b_13 text-w100">youtube</h4>
                  <a
                    href="https://www.youtube.com/@soptmedia"
                    target="_blank"
                    className="font-dm_variable text-w100"
                  >
                    @soptmedia
                  </a>
                </div>
              </div>
            </section>
            <section className="w-full px-[2rem] pb-[5.1rem] pt-[4.4rem]">
              <h3 className="font-body4_r_12 mb-[1.6rem] text-w90">
                후원사 및 협력사
              </h3>
              <Image
                src="/images/main_logos.png"
                alt="logos-image"
                width={308}
                height={60}
              />
            </section>
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
