"use client";

import React, { FC } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

import moonIcon from "@/public/assets/icons/moon-icon.svg";
import sunIcon from "@/public/assets/icons/sun-icon.svg";

const ToggleTheme: FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="w-8 h-8">
      <Image
        src={theme === "light" ? moonIcon : sunIcon}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className="w-7 h-7"
      />
    </button>
  );
};

export default ToggleTheme;
