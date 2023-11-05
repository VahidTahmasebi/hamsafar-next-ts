import "../globals.css";
import vazirFont from "@/constants/localFonts";

import type { Metadata } from "next";

import Header from "../Header";
import Footer from "../Footer";

export const metadata: Metadata = {
  title: "Hamsafar",
  description: "Be My Companion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${vazirFont.variable} max-w-7xl container font-sans`}>
        <Header />
        <div className="pb-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
