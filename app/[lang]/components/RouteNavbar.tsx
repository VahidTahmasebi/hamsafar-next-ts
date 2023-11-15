"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import newspaperIcon from "@/public/assets/icons/newspaper-icon.svg";
import exploreIcon from "@/public/assets/icons/explore-icon.svg";
import destinationsIcon from "@/public/assets/icons/destinations-icon.svg";

const RouteNavbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const routeNavbar = [
    { value: newspaperIcon, href: "" },
    { value: exploreIcon, href: "" },
    { value: destinationsIcon, href: "" },
  ];

  return (
    <>
      <nav className="w-full fixed sm:hidden bottom-5 z-10 px-6">
        <ul className="shadow-navbar--class relative flex justify-around items-center gap-3 p-3 rounded-3xl bg-c-surface-100/70 backdrop-blur-md">
          {routeNavbar.map((route, index) => {
            const isActive =
              (pathname.includes(route.href) && route.href.length > 1) ||
              pathname === route.href;

            return (
              <li key={index} className={`${index === 1 && "indicator"}`}>
                <Link href={route.href}>
                  <Image
                    src={route.value}
                    alt=""
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="icon__navbar--class"
                  />
                  {isActive && (
                    <div className="w-5 h-1 mt-1 mx-auto rounded-md bg-c-orange-500" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default RouteNavbar;
