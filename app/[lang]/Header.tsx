import React, { FC } from "react";
import Image from "next/image";

import loginIcon from "@/public/assets/icons/login-icon.svg";

import { Locale } from "@/i18n.config";

import { dictionary } from "@/constants/dictionaries";

import Button from "@/common/buttons/Button";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import ToggleTheme from "@/components/ToggleTheme";
import LogoHeader from "./components/LogoHeader";
import RouteMenu from "./components/RouteMenu";

interface HeaderProps {
  lang: Locale;
}

const Header: FC<HeaderProps> = ({ lang }) => {
  const routeMenu = [
    { value: dictionary[lang]?.toursWord, href: `/${lang}/tours` },
    { value: dictionary[lang]?.blogWord, href: `/${lang}/blog` },
  ];

  return (
    <header className="sticky top-2 z-10 flex items-center justify-between gap-x-2 px-5 rounded-3xl bg-c-surface-100/70 backdrop-blur-md shadow-xl shadow-c-surface-600/10 transition-all duration-200">
      <LogoHeader />
      <nav>
        <ul className="h-16 flex justify-start items-center sm:gap-x-5 md:gap-x-16 py-2 font-bold">
          <RouteMenu routeMenu={routeMenu} />
          <div className="flex justify-start items-center gap-2 sm:gap-4">
            <Button
              type="button"
              className="w-fit sm:w-full h-10 px-2 text-[#FFE5D4] bg-c-orange-500 hover:bg-c-orange-600 focus-within:ring-offset-c-orange-500">
              <span className="hidden sm:block">
                {dictionary[lang]?.loginSignupWord}
              </span>

              <Image
                src={loginIcon}
                alt=""
                width="0"
                height="0"
                sizes="100vw"
                className="icon--class ms-0 sm:ms-2"
              />
            </Button>

            <LocaleSwitcher />

            <ToggleTheme />
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
