import React, { ButtonHTMLAttributes } from "react";
import { useRouter } from "next/navigation";

interface LinkButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  url: string;
}

const LinkButton = ({ children, url, ...props }: LinkButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(url);
  };

  return (
    <button
      onClick={handleClick}
      className="flex h-[5.8rem] w-full items-center justify-center rounded-[8px] bg-blue"
      {...props}
    >
      {children}
    </button>
  );
};

export default LinkButton;
