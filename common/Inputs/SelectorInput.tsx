import React, { FC } from "react";
import Image from "next/image";

interface Option {
  value: string;
}

interface SelectorInputProps {
  register: any;
  initialOptions: Option[];
  name: string;
}

const SelectorInput: FC<SelectorInputProps> = ({
  register,
  initialOptions,
  name,
}) => {
  return (
    <div className="w-4/6 h-full flex justify-center items-center">
      <select
        {...register(name)}
        className="w-full p-2 ps-11 outline-none border-2 border-transparent hover:border-2 hover:border-c-primary-600/40 rounded-3xl focus:ring-1 focus:ring-offset-1 focus:ring-c-primary-600 bg-c-surface-50 shadow-sm transition ease-in duration-200">
        {initialOptions.map((item: Option) => (
          <option key={item.value} value={item.value}>
            {item.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectorInput;
