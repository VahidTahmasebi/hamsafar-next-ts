"use client";

import React, { FC } from "react";
import { Locale } from "@/i18n.config";

import { useGetHotels } from "@/hooks/useHotels";

import SwiperComponent from "../components/SwiperComponent";

interface IHotelsSectionProps {
  lang: Locale;
}

const HotelsSection: FC<IHotelsSectionProps> = ({ lang }) => {
  const { isLoading, data: hotels } = useGetHotels();

  return (
    <div className="h-96">
      <SwiperComponent lang={lang} data={hotels}/>
    </div>
  );
};

export default HotelsSection;
