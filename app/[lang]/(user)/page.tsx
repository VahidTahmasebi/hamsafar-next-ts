import React, { FC } from "react";

import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

import HeroSection from "./HeroSection";
import HotelsSection from "./HotelsSection";

interface HomepageProps {
  params: { lang: Locale };
}

const Homepage: FC<HomepageProps> = async ({
  params: { lang },
}: HomepageProps) => {
  const { commonDic } = await getDictionary(lang);

  return (
    <div className="flex flex-col gap-y-20 mt-7">
      <HeroSection commonDic={commonDic} />
      <HotelsSection lang={lang} />
    </div>
  );
};

export default Homepage;
