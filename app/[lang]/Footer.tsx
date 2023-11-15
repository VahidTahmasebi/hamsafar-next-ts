import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { ICommonDic, INavigationDic } from "@/types/IDictionaries";

import { Locale } from "@/i18n.config";

import { socialNetworksIcons } from "@/constants/assets";

import RouteNavbar from "./components/RouteNavbar";
import LogoFooter from "./components/LogoFooter";

interface FooterProps {
  lang: Locale;
  navigationDic: INavigationDic;
  commonDic: ICommonDic;
}

const Footer: FC<FooterProps> = async ({ lang, navigationDic, commonDic }) => {
  const { destinationWord, blogWord, aboutWord, contactWord } = navigationDic;
  const { descriptionWord, addressWord, copyrightWord } = commonDic;

  const routeMenu: { value: string; href: string }[] = [
    { value: destinationWord, href: `/${lang}/destination` },
    { value: blogWord, href: `/${lang}/blog` },
    { value: aboutWord, href: `/${lang}/about` },
    { value: contactWord, href: `/${lang}/contact` },
  ];

  return (
    <footer className="flex justify-center items-center">
      {/* mobile navbar */}
      <RouteNavbar />

      {/* footer */}
      <div className="w-full mt-20 mb-32 sm:mb-0 rounded-t-3xl rounded-b-3xl sm:rounded-b-none bg-c-surface-200/50">
        <div className="flex flex-col-reverse sm:flex-row justify-between py-6 sm:px-9 px-5 text-c-surface-600">
          <div className="sm:w-7/12 space-y-4 text-start">
            <h6 className="hidden sm:block">{descriptionWord}</h6>
            <div className="ps-2 space-y-1 border-s-2 border-c-orange-400">
              <p className="ltr w-fit">408 - (000-000–000)</p>
              <p>{addressWord}</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <LogoFooter />
            <div className="flex gap-6 py-6">
              {socialNetworksIcons.map((link) => {
                return (
                  <Link key={link.label} href={link.route}>
                    <Image
                      src={link.icon}
                      alt=""
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="icon--class"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center px-5 sm:px-9 border-t-2 border-c-surface-500 text-c-surface-500">
          <nav className="hidden md:block">
            <ul className="ltr flex first:ps-0 divide-x-2 divide-c-surface-300 font-bold">
              {routeMenu.map((route, index) => (
                <li key={index}>
                  <Link
                    className={`${index === 0 && "ms-0"} m-2`}
                    href={route.href}>
                    {route.value}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex justify-center items-center">
            <p className="block py-2 text-sm">{copyrightWord}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
