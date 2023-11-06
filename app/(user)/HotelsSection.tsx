"use client";

import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { useGetHotels } from "@/hooks/useHotels";

interface Hotel {
  id: string;
  name: string;
  picture_url: {
    url: string;
  };
  price: number;
  review_scores_rating: number;
}

const HotelsSection = (): JSX.Element => {
  const { isLoading, data: hotels } = useGetHotels();

  return (
    <>
      <div className="h-96">
        <Swiper
          slidesPerView={3.5}
          // spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          // modules={[Pagination]}
          className="w-full h-full rounded-3xl">
          {hotels?.map((hotel: Hotel) => (
            <SwiperSlide key={hotel.id} className="w-fit relative px-3">
              <Image
                src={hotel.picture_url.url}
                alt={hotel.name}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-full block rounded-3xl object-cover"
              />
              <div className="max-w-[17rem] absolute top-4 right-7 space-y-1 text-lg font-bold text-left">
                <div className="py-1 px-2 bg-[rgba(255,255,255,0.8)] rounded-xl flex flex-col items-center">
                  <Image
                    src="/assets/icons/star-icon.svg"
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
              <div className="max-w-[17rem] absolute bottom-4 left-7 space-y-1 text-lg font-bold text-left">
                <span className="py-1 px-2 bg-[rgba(255,255,255,0.8)] rounded-t-xl">
                  ${hotel.price}
                </span>
                <h5 className="py-1 px-2 bg-[rgba(255,255,255,0.8)] rounded-b-xl rounded-tr-xl">
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
