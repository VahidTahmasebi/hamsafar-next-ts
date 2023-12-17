"use client";

import { FC } from "react";

import { Locale } from "@/i18n.config";

import { useGetHotels } from "@/hooks/useHotels";

import ProduceContainer from "@/components/ProduceContainer";

interface IData {
  id: string;
  name: string;
  picture_url: {
    url: string;
  };
  price: number;
  review_scores_rating: number;
}

interface SuggestedToursProps {
  lang: Locale;
}

const SuggestedTours: FC<SuggestedToursProps> = ({ lang }) => {
  const { isLoading, data: hotels } = useGetHotels();

  return (
    <>
      {hotels &&
        hotels.slice(0, 2).map((item: IData) => (
          <div key={item.id} className="relative sm:text-sm">
            <ProduceContainer data={item} lang={lang} containerClass="h-56" />
          </div>
        ))}
    </>
  );
};

export default SuggestedTours;
