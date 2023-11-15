"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import logoSecondDark from "@/public/assets/logo-second-dark.webp";
import logoSecondLight from "@/public/assets/logo-second-light.webp";

const LogoFooter = () => {
  const { theme } = useTheme();

  return (
    <Link className="" href="/">
      <Image
        src={theme === "dark" ? logoSecondDark : logoSecondLight}
        alt="Footer Logo"
        width="0"
        height="0"
        sizes="100vw"
        className="w-44 h-auto"
      />
    </Link>
  );
};

export default LogoFooter;
