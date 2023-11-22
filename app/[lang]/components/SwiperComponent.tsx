import "swiper/css";
import "swiper/css/pagination";

import React, { FC } from "react";
import dynamic from "next/dynamic";
import { SwiperSlide } from "swiper/react";

import { Locale } from "@/i18n.config";

import CartLazyLoad from "@/common/LazyLoads/CartLazyLoad";

import ProduceContainer from "@/components/ProduceContainer";

const Swiper = dynamic(() => import("swiper/react").then((mod) => mod.Swiper), {
  ssr: false,
  loading: () => <CartLazyLoad count={2} />,
});

interface IData {
  id: string;
  name: string;
  picture_url: {
    url: string;
  };
  price: number;
  review_scores_rating: number;
}

interface ISwiperComponentProps {
  lang: Locale;
  data: IData[];
}

const SwiperComponent: FC<ISwiperComponentProps> = ({ lang, data }) => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        slidesPerView={1.1}
        breakpoints={{
          375: {
            slidesPerView: 1.1,
          },
          640: {
            slidesPerView: 2.2,
          },
          768: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 3.5,
          },
        }}
        className="wh-full--class rounded-3xl">
        {data &&
          data?.map((item: IData) => (
            <SwiperSlide
              key={item.id}
              className="w-fit relative pe-5 last:pe-0">
              <ProduceContainer data={item} lang={lang} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default SwiperComponent;
