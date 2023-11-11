import React, { FC } from "react";
import Image from "next/image";

interface TextFieldProps {
  register: any;
  type: string;
  min: number;
  maxLength: number;
  inputMode?: string;
  icon?: string;
}

const TextField: FC<TextFieldProps> = ({
  register,
  type,
  min,
  maxLength,
  inputMode,
  icon,
}) => {
  return (
    <div className="w-4/6 h-full relative flex items-center">
      <input
        {...register("where")}
        type={type}
        inputMode={inputMode}
        min={min}
        maxLength={maxLength}
        placeholder="Where"
        className="w-full p-2 pr-11 placeholder:text-main-slate-400 outline-none border-2 border-transparent hover:border-2 hover:border-c-primary-600/40 rounded-3xl focus:ring-1 focus:ring-offset-1 focus:ring-c-primary-600 bg-c-surface-600 shadow-sm transition ease-in duration-200"
      />
      <span className="absolute right-3">
        <Image
          src={`/assets/icons/${icon}-icon.svg`}
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
