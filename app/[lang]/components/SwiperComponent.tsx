import React, { FC } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";

import { Locale } from "@/i18n.config";

import starIcon from "@/public/assets/icons/star-icon.svg";

import CartLazyLoad from "@/common/LazyLoads/CartLazyLoad";

import "swiper/css";
import "swiper/css/pagination";

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
        {data?.map((item: IData) => (
          <SwiperSlide key={item.id} className="w-fit relative pe-5 last:pe-0">
            <Image
              src={item.picture_url.url}
              alt={item.name}
              width="0"
              height="0"
              sizes="100vw"
              className="wh-full--class block rounded-3xl object-cover"
            />
            <div className="cart--class max-w-[7rem] top-4 end-7 text-end">
              <div className="cart__text--class rounded-xl grid place-items-center">
                <Image
                  src={starIcon}
                  alt=""
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-6 h-6"
                />
                <span>
                  {item.review_scores_rating ? item.review_scores_rating : "-"}
                </span>
              </div>
            </div>

            <div className="cart--class bottom-4 start-7 text-start">
              <span className="cart__text--class rounded-t-xl">
                ${item.price}
              </span>
              <h5
                className={`cart__text--class w-4/6 rounded-b-xl ${
                  lang === "en" ? "rounded-tr-xl" : "rounded-tl-xl"
                }`}>
                {item.name}
              </h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperComponent;
