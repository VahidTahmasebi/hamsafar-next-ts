"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

import logoMainDark from "@/public/assets/logo-main-dark.webp";
import logoMainLight from "@/public/assets/logo-main-light.webp";

const LogoHeader = () => {
  const { resolvedTheme } = useTheme();

  return (
    <Link className="block py-2" href="/">
      <Image
        priority={true}
        src={resolvedTheme === "dark" ? logoMainDark : logoMainLight}
        alt="Home"
        width="0"
        height="0"
        sizes="100vw"
        className="w-40 lg:w-44 h-auto"
      />
    </Link>
  );
};

export default LogoHeader;
