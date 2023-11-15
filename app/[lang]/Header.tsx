import React, { FC } from "react";
import Image from "next/image";

import loginIcon from "@/public/assets/icons/login-icon.svg";

import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

import Button from "@/common/buttons/Button";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import ToggleTheme from "@/components/ToggleTheme";
import LogoHeader from "./components/LogoHeader";
import RouteMenu from "./components/RouteMenu";

interface HeaderProps {
  lang: Locale;
}

const Header: FC<HeaderProps> = async ({ lang }: HeaderProps) => {
  const { navigationDic } = await getDictionary(lang);

  const routeMenu = [
    { value: `${navigationDic.destination}`, href: `/${lang}/destination` },
    { value: `${navigationDic.blog}`, href: `/${lang}/blog` },
  ];

  return (
    <header className="sticky top-2 z-10 flex items-center justify-between gap-x-2 px-5 rounded-3xl bg-c-surface-100/70 backdrop-blur-md shadow-xl shadow-c-surface-600/10 transition-all duration-200">
      <LogoHeader />
      <nav>
        <ul className="h-16 flex items-center sm:space-x-5 md:space-x-16 py-2 font-bold">
          <RouteMenu routeMenu={routeMenu} />
          <div className="flex items-center gap-2 sm:gap-4">
            <Button
              width="w-fit sm:w-full"
              height="h-10"
              padding="px-2"
              color="text-[#FFE5D4]"
              background="bg-c-orange-500">
              <span className="hidden sm:block">
                {navigationDic.loginSignup}
              </span>

              <Image
                src={loginIcon}
                alt=""
                width="0"
                height="0"
                sizes="100vw"
                className="icon--class ml-0 sm:ml-2"
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
