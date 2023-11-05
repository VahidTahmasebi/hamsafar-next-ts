import Link from "next/link";
import Image from "next/image";

import Button from "@/components/buttons/Button";

function Header() {
  const routeMenu = [
    { value: "Home", href: "/" },
    { value: "Destinations", href: "/" },
    { value: "Blog", href: "/" },
    { value: "About", href: "/" },
    { value: "Contact", href: "/" },
  ];

  return (
    <header className="sticky top-0 bg-white transition-all duration-200">
      <nav className="flex items-center justify-between">
        <Link className="block py-2" href="/">
          <Image
            src="/assets/logo.webp"
            alt="Home"
            width={180}
            height={90}
            className="object-contain"
          />
        </Link>
        <ul className="h-16 flex items-center space-x-20 py-2 px-4 md:px-16 font-bold">
          {routeMenu.map((route, index) => (
            <li key={index}>
              <Link className="block py-2 text-[#816D87]" href={route.href}>
                {route.value}
              </Link>
            </li>
          ))}
          <li>
            <Button
              width="w-28"
              height="h-10"
              padding="px-5"
              color="text-[#fffbeb]"
              background="bg-[#ffa57b]">
              Book Trip
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;