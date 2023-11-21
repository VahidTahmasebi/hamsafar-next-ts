import React, { FC } from "react";
import Image from "next/image";

import starIcon from "@/public/assets/icons/star-icon.svg";

import { Locale } from "@/i18n.config";

interface ProduceContainerProps {
  data: {
    picture_url: {
      url: string;
    };
    name: string;
    review_scores_rating: number;
    price: number;
  };
  lang: Locale;
  containerClass?: string;
}

const ProduceContainer: FC<ProduceContainerProps> = ({
  data,
  lang,
  containerClass,
}) => {
  const { picture_url, name, review_scores_rating, price } = data;

  return (
    <>
      <Image
        src={picture_url.url}
        alt={name}
        width={0}
        height={0}
        sizes="100vw"
        className={`${containerClass} w-full h-96 block rounded-3xl object-cover`}
      />
      <div className="cart--class max-w-[7rem] top-4 end-7 text-end">
        <div className="cart__text--class rounded-xl grid place-items-center">
          <Image
            src={starIcon}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="w-6 h-6"
          />
          <span>{review_scores_rating ? review_scores_rating : "-"}</span>
        </div>
      </div>

      <div className="cart--class bottom-4 start-7 text-start">
        <span className="cart__text--class rounded-t-xl">${price}</span>
        <h5
          className={`cart__text--class w-4/6 rounded-b-xl ${
            lang === "en" ? "rounded-tr-xl" : "rounded-tl-xl"
          }`}>
          {name}
        </h5>
      </div>
    </>
  );
};

export default ProduceContainer;
