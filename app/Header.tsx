"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

import Button from "@/common/buttons/Button";
import ToggleTheme from "@/components/ToggleTheme";

function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const { theme } = useTheme();

  const routeMenu = [
    { value: "Destinations", href: "/" },
    { value: "Blog", href: "/" },
  ];

  return (
    <header className="sticky top-2 z-10 flex items-center justify-between px-5 rounded-3xl bg-c-surface-100/70 backdrop-blur-md shadow-xl shadow-c-surface-600/10 transition-all duration-200">
      <Link className="block py-2" href="/">
        <Image
          priority={true}
          src={`/assets/logo-main-${theme === "dark" ? "dark" : "light"}.webp`}
          alt="Home"
          width="0"
          height="0"
          sizes="100vw"
          className="w-40 lg:w-44 h-auto"
        />
      </Link>
      <nav>
        <ul className="h-16 flex items-center sm:space-x-8 md:space-x-20 py-2 font-bold">
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
          <div className="flex items-center gap-4">
            <Button
              width="w-full"
              height="h-10"
              padding="px-5"
              color="text-[#FFE5D4]"
              background="bg-c-orange-500">
              <span className="hidden sm:block">Login | Signup</span>

              <Image
                src="/assets/icons/login-icon.svg"
                alt=""
                width="0"
                height="0"
                sizes="100vw"
                className="icon--class sm:ml-3"
              />
            </Button>
            <ToggleTheme />
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
