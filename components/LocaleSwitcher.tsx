"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { i18n } from "@/i18n.config";
import { useTheme } from "next-themes";

import flagLightIcon from "@/public/assets/icons/flag-light-icon.svg";
import flagDarkIcon from "@/public/assets/icons/flag-dark-icon.svg";

export default function LocaleSwitcher() {
  const pathName = usePathname();

  const { theme } = useTheme();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div>
      {i18n.locales.map((locale) => {
        const isActive = pathName === redirectedPathName(locale);

        return (
          <Link
            key={locale}
            href={redirectedPathName(locale)}
            className={`${isActive && "hidden"} w-9 h-9 relative`}>
            <Image
              src={theme === "dark" ? flagDarkIcon : flagLightIcon}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="w-9 h-9"
            />
            <span className="absolute -bottom-2 sm:-bottom-1 left-3 sm:left-2.5 text-sm text-c-primary-950">
              {locale.toUpperCase()}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
