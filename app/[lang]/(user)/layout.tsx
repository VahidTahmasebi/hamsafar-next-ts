import React, { FC, ReactNode } from "react";
import { Metadata } from "next";

import { Locale, i18n } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import ProvidersTheme from "../ProvidersTheme";
import Providers from "../Providers";

import Header from "../Header";
import Footer from "../Footer";

import "../globals.css";
import vazirFont from "@/constants/localFonts";

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

const RootLayout: FC<RootLayoutProps> = async ({ children, params }) => {
  const { commonDic, navigationDic } = await getDictionary(params.lang);

  return (
    <html
      lang={params.lang === "en" ? "en" : "fa"}
      dir={params.lang === "en" ? "ltr" : "rtl"}>
      <body
        className={`${vazirFont.variable} font-sans text-c-main-900 bg-c-surface-50`}>
        <ProvidersTheme>
          <Providers>
            <div className="xl:max-w-7xl container mx-auto px-6">
              <Header lang={params.lang} navigationDic={navigationDic} />
              <div>{children}</div>
              <Footer
                lang={params.lang}
                navigationDic={navigationDic}
                commonDic={commonDic}
              />
            </div>
          </Providers>
        </ProvidersTheme>
      </body>
    </html>
  );
};

export default RootLayout;
