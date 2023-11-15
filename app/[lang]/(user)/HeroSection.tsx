import React, { FC } from "react";
import Image from "next/image";

import { ICommonDic } from "@/types/IDictionaries";

import heroImage from "@/public//assets/images/hero-image.webp";

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
          <section className="flex flex-col gap-6 text-base">
            <h4 className="font-bold text-c-orange-500">{exploreWord}</h4>
            <h2 className="text-3xl lg:text-5xl font-bold">{planWord}</h2>
            <p className="hidden sm:block">{descriptionWord}</p>
            <div className="hidden sm:block">
              <Button
                width="w-32"
                height="h-12"
                padding="px-5"
                color="text-[#E4F4E7]"
                background="bg-c-primary-500 ring-offset-1 hover:bg-c-primary-600 outline-none focus-within:opacity-70 focus-within:ring-1 focus-within:ring-offset-c-primary-500 shadow-md transition ease-in duration-200">
                {bookTripWord}
              </Button>
            </div>
          </section>
          <Image
            src={heroImage}
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
