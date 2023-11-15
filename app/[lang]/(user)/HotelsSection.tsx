"use client";

import "swiper/css";
import "swiper/css/pagination";

import dynamic from "next/dynamic";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { Locale } from "@/i18n.config";

import starIcon from "@/public/assets/icons/star-icon.svg";

import { useGetHotels } from "@/hooks/useHotels";

import CartLazyLoad from "@/common/LazyLoads/CartLazyLoad";

const Swiper = dynamic(() => import("swiper/react").then((mod) => mod.Swiper), {
  ssr: false,
  loading: () => (
    <>
      <div className=" h-96 flex justify-between items-center gap-x-5 rounded-3xl shadow animate-pulse">
        <div className="wh-full--class cart-container__lazy--class">
          <CartLazyLoad />
        </div>
        <div className="hidden sm:flex wh-full--class cart-container__lazy--class">
          <CartLazyLoad />
        </div>
      </div>
    </>
  ),
});

interface Hotel {
  id: string;
  name: string;
  picture_url: {
    url: string;
  };
  price: number;
  review_scores_rating: number;
}

interface HotelsSectionProps {
  lang: Locale;
}

const HotelsSection = ({ lang }: HotelsSectionProps): JSX.Element => {
  const { isLoading, data: hotels } = useGetHotels();

  return (
    <>
      <div className="h-96">
        <Swiper
          // modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          // spaceBetween={30}
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
          {hotels?.map((hotel: Hotel) => (
            <SwiperSlide
              key={hotel.id}
              className="w-fit relative pe-5 last:pe-0">
              <Image
                src={hotel.picture_url.url}
                alt={hotel.name}
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
                    {hotel.review_scores_rating
                      ? hotel.review_scores_rating
                      : "-"}
                  </span>
                </div>
              </div>

              <div className="cart--class bottom-4 start-7 text-start">
                <span className="cart__text--class rounded-t-xl">
                  ${hotel.price}
                </span>
                <h5
                  className={`cart__text--class w-4/6 rounded-b-xl ${
                    lang === "en" ? "rounded-tr-xl" : "rounded-tl-xl"
                  }`}>
                  {hotel.name}
                </h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default HotelsSection;
