import Image from "next/image";

const Splash = () => {
  return (
    <div
      className="fixed left-0 top-0 z-50 flex h-[100dvh] w-full items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/splash_bg.webp')" }}
    >
      <Image
        src="/images/splash.webp"
        alt="Splash"
        width={100}
        height={100}
        className="w-full max-w-[60rem]"
        priority
      />
    </div>
  );
};

export default Splash;
