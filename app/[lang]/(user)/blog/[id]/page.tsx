"use client";
import React, { FC } from "react";
import Image from "next/image";

import { useGetHotelsById } from "@/hooks/useHotels";

interface IBlogIdProps {
  params: {
    lang: string;
    id: string;
  };
}

const BlogId: FC<IBlogIdProps> = ({ params: { lang, id } }) => {
  const { isLoading, data } = useGetHotelsById(id);

  console.log(data?.picture_url?.url);
  console.log(data?.name);

  return (
    <div className="w-fit relative">
      <Image
        src={data?.picture_url?.url}
        alt={data?.name}
        placeholder="blur"
        blurDataURL={data?.picture_url?.url}
        width={0}
        height={0}
        sizes="100vw"
        className={`w-full h-96 block rounded-3xl object-cover`}
      />
      <div className="cart--class bottom-4 start-7 text-start">
        <h5
          className={`cart__text--class w-4/6 rounded-b-xl  ${
            lang === "en" ? "rounded-tr-xl" : "rounded-tl-xl"
          }`}>
          {data?.description}
        </h5>
      </div>
    </div>
  );
};

export default BlogId;
