"use client";

import { FC } from "react";

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

  return (
    <div className="flex flex-col gap-y-20 mt-7">
      <div>
        {hotels &&
          hotels.map((item: IData) => (
            <ProduceContainer key={item.id} data={item} lang={lang} />
          ))}
      </div>
      <div>
        {/* <HotelsSection lang={lang} />
        <HotelsSection lang={lang} />
        <HotelsSection lang={lang} /> */}
      </div>
    </div>
  );
};

export default Tours;
