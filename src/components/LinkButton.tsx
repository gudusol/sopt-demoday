import React, { ButtonHTMLAttributes } from "react";

interface LinkButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  url: string;
}

const LinkButton = ({ children, ...props }: LinkButtonProps) => {
  return (
    <button
      className="flex h-[5.8rem] w-full items-center justify-center rounded-[8px] bg-blue"
      {...props}
    >
      {children}
    </button>
  );
};

export default LinkButton;
