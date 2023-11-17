import React, { FC } from "react";
import Image from "next/image";

import { ICommonDic } from "@/types/IDictionaries";

import heroImage from "@/public/assets/images/hero-image.webp";

import Button from "@/common/buttons/Button";
import SearchForm from "./components/SearchForm";

interface HeroSectionProps {
  commonDic: ICommonDic;
}

const HeroSection: FC<HeroSectionProps> = ({ commonDic }) => {
  const { exploreWord, planWord, descriptionWord, bookTripWord } = commonDic;
  return (
    <div className="flex flex-col gap-y-5 xl:gap-y-0 transition-all duration-700 ease-out">
      <div className=" sm:h-4/6">
        <div className="flex justify-between items-center">
          <section className="w-4/6 flex flex-col gap-6 text-base">
            <h4 className="font-bold text-c-orange-500">{exploreWord}</h4>
            <h2 className="text-3xl lg:text-5xl font-bold">{planWord}</h2>
            <p className="hidden sm:block">{descriptionWord}</p>
            <div className="hidden sm:block">
              <Button
                type="button"
                className="w-32 h-12 px-5 text-[#E4F4E7] bg-c-primary-500 hover:bg-c-primary-600 focus-within:ring-offset-c-primary-500">
                {bookTripWord}
              </Button>
            </div>
          </section>
          <Image
            src={heroImage}
            priority
            alt="Hero Image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-1/2 hidden md:block h-[19rem] xl:h-[27rem]"
          />
        </div>
      </div>
      <SearchForm commonDic={commonDic} />
    </div>
  );
};

export default HeroSection;
