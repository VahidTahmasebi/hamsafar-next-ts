import React, { FC } from "react";
import Image from "next/image";

interface TextFieldProps {
  register: any;
  type: string;
  name: string;
  min: number;
  maxLength: number;
  inputMode?: string;
  icon: string;
  placeholder?: string;
}

const TextField: FC<TextFieldProps> = ({
  register,
  type,
  name,
  placeholder,
  min,
  maxLength,
  inputMode,
  icon,
}) => {
  return (
    <div className="w-4/6 h-full relative flex items-center">
      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        inputMode={inputMode}
        min={min}
        maxLength={maxLength}
        className="w-full p-2 pr-11 outline-none border-2 border-transparent hover:border-2 hover:border-c-primary-600/40 rounded-3xl focus:ring-1 focus:ring-offset-1 focus:ring-c-primary-600 bg-c-surface-50 shadow-sm transition ease-in duration-200"
      />
      <span className="absolute right-3">
        <Image
          src={icon}
          alt=""
          width="0"
          height="0"
          sizes="100vw"
          className="icon--class"
        />
      </span>
    </div>
  );
};

export default TextField;
