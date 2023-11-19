import "../globals.css";
import vazirFont from "@/constants/localFonts";

import React, { ReactNode } from "react";
import { Metadata } from "next";

import { Locale, i18n } from "@/i18n.config";
import ProvidersTheme from "../ProvidersTheme";
import Providers from "../Providers";

import Header from "../Header";
import Footer from "../Footer";

interface RootLayoutProps {
  children: ReactNode;
  params: { lang: Locale };
}

export const metadata: Metadata = {
  title: "Hamsafar",
  description: "Be My Companion",
};

export async function generateStaticParams(): Promise<{ lang: Locale }[]> {
  return i18n.locales.map((locale: Locale) => ({ lang: locale }));
}

const RootLayout: React.FC<RootLayoutProps> = ({ children, params }) => {
  return (
    <html
      lang={params.lang === "en" ? "en" : "fa"}
      dir={params.lang === "en" ? "ltr" : "rtl"}>
      <body
        className={`${vazirFont.variable} font-sans text-c-main-900 bg-c-surface-50`}>
        <ProvidersTheme>
          <Providers>
            <div className="xl:max-w-7xl container mx-auto px-6">
              <Header lang={params.lang} />
              <div>{children}</div>
              <Footer lang={params.lang} />
            </div>
          </Providers>
        </ProvidersTheme>
      </body>
    </html>
  );
};

export default RootLayout;
