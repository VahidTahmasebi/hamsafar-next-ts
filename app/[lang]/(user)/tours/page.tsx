"use client";

import { FC, useState } from "react";
import Image from "next/image";

import eiffelIcon from "@/public/assets/icons/eiffel-icon.svg";
import sphinxIcon from "@/public/assets/icons/sphinx-icon.svg";
import statueLibertyIcon from "@/public/assets/icons/statue-liberty-icon.svg";
import tajMahalIcon from "@/public/assets/icons/taj-mahal-icon.svg";
import azadiTowerIcon from "@/public/assets/icons/azadi-tower-icon.webp";

import { dictionary } from "@/constants/dictionaries";

import { Locale } from "@/i18n.config";

import { useGetHotels } from "@/hooks/useHotels";

import ProduceContainer from "@/components/ProduceContainer";

interface IToursPageProps {
  params: { lang: Locale };
}

interface IData {
  id: string;
  name: string;
  picture_url: {
    url: string;
  };
  price: number;
  review_scores_rating: number;
}

const Tours: FC<IToursPageProps> = ({ params: { lang } }: IToursPageProps) => {
  const { isLoading, data: hotels } = useGetHotels();

  const [activeColor, setActiveColor] = useState("");
  
  const filterBar = [
    { icon: azadiTowerIcon, value: dictionary[lang]?.iranWord },
    { icon: tajMahalIcon, value: dictionary[lang]?.asiaWord },
    { icon: eiffelIcon, value: dictionary[lang]?.europeWord },
    { icon: sphinxIcon, value: dictionary[lang]?.africaWord },
    { icon: statueLibertyIcon, value: dictionary[lang]?.americanWord },
  ];

  return (
    <div className="w-full h-full sticky top-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 lg:gap-x-20">
      <div className="hidden sm:block ">
        <div className="sticky top-28 space-y-5">
          <h3 className="text-xl text-c-main-800">
            {dictionary[lang]?.suggested}
          </h3>
          {hotels &&
            hotels.slice(0, 2).map((item: IData) => (
              <div key={item.id} className="relative sm:text-sm">
                <ProduceContainer
                  data={item}
                  lang={lang}
                  containerClass="h-60"
                />
              </div>
            ))}
        </div>
      </div>

      <div className="grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 col-span-1 lg:col-span-2 xl:col-span-3 gap-4">
        <div className="sticky top-20 z-10 flex justify-center items-center">
          <div className="w-full lg:w-2/3 flex justify-around items-center mb-3 p-2 rounded-2xl bg-c-surface-100 overflow-x-auto">
            {filterBar.map((item) => (
              <div
                key={item.value}
                onClick={() =>
                  setActiveColor(activeColor === item.value ? "" : item.value)
                }
                className={`${
                  activeColor === item.value && "bg-c-primary-400/50"
                } gap-x-2 flex flex-col xl:flex-row justify-between items-center p-2 rounded-xl select-none`}>
                <Image
                  src={item.icon}
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-6 h-6"
                />
                <p className="text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 col-span-1 lg:col-span-2 xl:col-span-3 gap-4">
          {hotels &&
            hotels.map((item: IData) => (
              <div key={item.id} className="relative text-base sm:text-xs">
                <ProduceContainer
                  data={item}
                  lang={lang}
                  containerClass="sm:h-40"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Tours;
