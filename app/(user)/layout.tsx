import "../globals.css";
import vazirFont from "@/constants/localFonts";

import type { Metadata } from "next";

import ProvidersTheme from "../ProvidersTheme";
import Providers from "../Providers";

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
      <body
        className={`${vazirFont.variable} font-sans text-c-main-900 bg-c-surface-50`}>
        <ProvidersTheme>
          <Providers>
            <div className="xl:max-w-7xl container mx-auto px-6">
              <Header />
              <div>{children}</div>
              <Footer />
            </div>
          </Providers>
        </ProvidersTheme>
      </body>
    </html>
  );
}
