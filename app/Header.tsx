import Link from "next/link";
import Image from "next/image";

import Button from "@/common/buttons/Button";

function Header() {
  const routeMenu = [
    { value: "Destinations", href: "/" },
    { value: "Blog", href: "/" },
  ];

  return (
    <header className="sticky top-0 bg-white transition-all duration-200">
      <nav className="flex items-center justify-between">
        <Link className="block py-2" href="/">
          <Image
            priority={true}
            src="/assets/logo.webp"
            alt="Home"
            width="0"
            height="0"
            sizes="100vw"
            className="w-44 h-auto"
          />
        </Link>
        <ul className="h-16 flex items-center space-x-20 py-2 font-bold">
          {routeMenu.map((route, index) => (
            <li key={index}>
              <Link className="block py-2 text-[#816D87]" href={route.href}>
                {route.value}
              </Link>
            </li>
          ))}
          <li>
            <Button
              width="w-36"
              height="h-10"
              padding="px-5"
              color="text-[#fffbeb]"
              background="bg-[#ffa57b]">
              Login | signup
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
