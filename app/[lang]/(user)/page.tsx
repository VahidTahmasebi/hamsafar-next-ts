import React, { FC } from "react";

import { Locale } from "@/i18n.config";

import HeroSection from "./HeroSection";
import HotelsSection from "./HotelsSection";

interface HomepageProps {
  params: { lang: Locale };
}

const Homepage: FC<HomepageProps> = ({ params: { lang } }: HomepageProps) => {
  return (
    <div className="flex flex-col gap-y-20 mt-7">
      <HeroSection lang={lang} />
      <HotelsSection lang={lang} />
    </div>
  );
};

export default Homepage;
