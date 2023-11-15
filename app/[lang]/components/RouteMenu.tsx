"use client";

import { FC } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

interface RouteMenuProps {
  routeMenu: { href: string; value: string }[];
}

const RouteMenu: FC<RouteMenuProps> = ({ routeMenu }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      {routeMenu.map((route, index) => {
        const isActive =
          (pathname.includes(route.href) && route.href.length > 1) ||
          pathname === route.href;

        return (
          <li key={index} className="hidden sm:block py-2">
            <Link href={route.href}>
              {route.value}
              {isActive && (
                <div className="w-5 h-1 mt-1 mx-auto rounded-md bg-c-orange-600" />
              )}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default RouteMenu;
