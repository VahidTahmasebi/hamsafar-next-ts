import Image from "next/image";

import heroImage from "@/public//assets/images/hero-image.webp";

import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

import Button from "@/common/buttons/Button";
import SearchForm from "./components/SearchForm";

interface HeroProps {
  lang: Locale;
}

const HeroSection: React.FC<HeroProps> = async ({ lang }: HeroProps) => {
  const { commonDic } = await getDictionary(lang);

  return (
    <div className="flex flex-col gap-y-5 xl:gap-y-0 transition-all duration-700 ease-out">
      <div className=" sm:h-4/6">
        <div className="flex justify-between items-center">
          <section className="flex flex-col gap-6 text-base">
            <h4 className="font-bold text-c-orange-500">{commonDic.explore}</h4>
            <h2 className="text-3xl lg:text-5xl font-bold">{commonDic.plan}</h2>
            <p className="hidden sm:block">{commonDic.description}</p>
            <div className="hidden sm:block">
              <Button
                width="w-32"
                height="h-12"
                padding="px-5"
                color="text-[#E4F4E7]"
                background="bg-c-primary-500">
                {commonDic.bookTrip}
              </Button>
            </div>
          </section>
          <Image
            src={heroImage}
            alt="Hero Image"
            width="0"
            height="0"
            sizes="100vw"
            className="w-1/2 hidden md:block h-[19rem] xl:h-[27rem]"
          />
        </div>
      </div>
      <SearchForm
      //  lang={lang}
      />
    </div>
  );
};

export default HeroSection;
