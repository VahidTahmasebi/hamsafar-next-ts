import React, { FC, ReactNode, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type: "button" | "submit" | "reset";
  className: string;
}

const Button: FC<Props> = ({ children, type, className }) => {
  return (
    <button
      type={type}
      // onClick={onClick}
      className={`${className} flex justify-center items-center rounded-3xl text-sm sm:text-base font-medium outline-none ring-offset-1 focus-within:opacity-70 focus-within:ring-1 shadow-md transition ease-in duration-200`}>
      {children}
    </button>
  );
};

export default Button;
