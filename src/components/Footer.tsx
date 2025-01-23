import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-bg pb-[5.1rem] pl-[3rem] pt-[2.9rem]">
      <Image
        src="/images/sopt-logo.svg"
        alt="sopt-logo"
        width={57}
        height={20}
      />
      <p className="font-title2_b_14 mt-[3.4rem] text-w90">
        2025 35th AND SOPT DEMODAY
      </p>
      <p className="font-body4_r_12 mt-[1.6rem] whitespace-pre-line text-w90">{`SOPT (솝트, 대학생연합 IT벤처창업 동아리)\nCopyright©2025.SOPT.All rights reserved.`}</p>
    </footer>
  );
};

export default Footer;
