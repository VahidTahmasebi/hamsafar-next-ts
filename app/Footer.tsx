import Link from "next/link";
import Image from "next/image";

import { socialNetworksIcons } from "@/constants/assets";

function Footer() {
  const routeMenu = [
    { value: "Destinations", href: "/" },
    { value: "Blog", href: "/" },
    { value: "About", href: "/" },
    { value: "Contact", href: "/" },
  ];

  return (
    <footer className="w-full mt-20 rounded-t-3xl text-c-surface-600 bg-c-surface-mixed-dark-200">
      <div className="flex flex-col-reverse sm:flex-row justify-between space-x-5 py-6 px-9">
        <div className="w-3/4 space-y-4 text-left">
          <h6 className="hidden sm:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            exercitationem eaque aspernatur consectetur at molestias nemo
            reprehenderit vitae minima. Commodi ab sunt veritatis molestias id
            distinctio corporis unde fugiat tenetur.
          </h6>
          <div className="pl-2 space-y-1 border-l-2 border-c-orange-400">
            <p>408 - (000-000–000)</p>
            <p>00 Colin P Kelly Jr St San Francisco California 94118</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Link className="" href="/">
            <Image
              src="/assets/logo-second-light.webp"
              alt="Footer Logo"
              width="0"
              height="0"
              sizes="100vw"
              className="w-44 h-auto"
            />
          </Link>
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

      <div className="flex justify-between items-center px-12 border-t-2 border-c-surface-dark-500 text-c-surface-dark-600">
        <nav className="hidden md:block">
          <ul className="flex first:pl-0 divide-x-2 divide-c-surface-dark-600 font-bold">
            {routeMenu.map((route, index) => (
              <li key={index}>
                <Link
                  className={`${index === 0 && "pl-0"} p-2`}
                  href={route.href}>
                  {route.value}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex justify-center items-center">
          <p className="block py-2 text-sm">
            Copyright © 2023 Hamsafar All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
