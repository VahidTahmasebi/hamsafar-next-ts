import React, { FC } from "react";

import earthIcon from "@/public/assets/icons/earth-icon.svg";
import eiffelIcon from "@/public/assets/icons/eiffel-icon.svg";
import sphinxIcon from "@/public/assets/icons/sphinx-icon.svg";
import statueLibertyIcon from "@/public/assets/icons/statue-liberty-icon.svg";
import tajMahalIcon from "@/public/assets/icons/taj-mahal-icon.svg";
import azadiTowerIcon from "@/public/assets/icons/azadi-tower-icon.webp";

import { dictionary } from "@/constants/dictionaries";

import { Locale } from "@/i18n.config";

import FilterOption from "@/components/Filters/FilterOption";
import SuggestedTours from "./Components/SuggestedTours";
import ToursGrid from "./Components/ToursGrid";

interface IToursPageProps {
  params: { lang: Locale };
  searchParams: any;
}

const Tours: FC<IToursPageProps> = ({
  params: { lang },
  searchParams,
}: IToursPageProps) => {
  const filterOptions = [
    {
      value: "all",
      icon: earthIcon,
      label: "All",
    },
    {
      value: "iran",
      icon: azadiTowerIcon,
      label: dictionary[lang]?.iranWord,
    },
    {
      value: "asia",
      icon: tajMahalIcon,
      label: dictionary[lang]?.asiaWord,
    },
    {
      value: "europe",
      icon: eiffelIcon,
      label: dictionary[lang]?.europeWord,
    },
    {
      value: "africa",
      icon: sphinxIcon,
      label: dictionary[lang]?.africaWord,
    },
    {
      value: "american",
      icon: statueLibertyIcon,
      label: dictionary[lang]?.americanWord,
    },
  ];

  return (
    <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 lg:gap-x-20">
      <div className="hidden sm:block">
        <h3 className="text-xl text-c-main-800">
          {dictionary[lang]?.suggested}
        </h3>
        <SuggestedTours lang={lang} />
      </div>

      <div className="grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 col-span-1 lg:col-span-2 xl:col-span-3">
        <div className="sticky top-28 z-10 flex justify-center items-center overflow-x-auto">
          <div className="w-full lg:w-2/3 flex justify-between items-center mb-10 p-2 rounded-2xl bg-c-surface-100 overflow-x-auto">
            <FilterOption options={filterOptions} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 col-span-1 lg:col-span-2 xl:col-span-3 gap-4">
          <ToursGrid lang={lang} searchParams={searchParams} />
        </div>
      </div>
    </div>
  );
};

export default Tours;
