import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

import HeroSection from "./HeroSection";
import HotelsSection from "./HotelsSection";

const Homepage = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { page } = await getDictionary(lang);

  return (
    <div className="flex flex-col gap-y-20 mt-7">
      <HeroSection lang={lang} />
      <HotelsSection lang={lang} />
    </div>
  );
};

export default Homepage;
