"use client";
import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { Locale } from "@/i18n.config";

interface Hotel {
  id: string;
  picture_url: {
    url: string;
  };
  name: string;
  description: string;
}

interface IBlogSidebarProps {
  lang: Locale;
  hotels: Hotel[];
}

const BlogSidebar: FC<IBlogSidebarProps> = ({ lang, hotels }) => {
  return (
    <div className="flex flex-col">
      {hotels &&
        hotels?.map((item) => (
          <div key={item.id} className="w-fit relative">
            <Link href={`/blog/${item.id}`}>
              <Image
                src={item.picture_url.url}
                alt={item.name}
                width={0}
                height={0}
                sizes="100vw"
                className={` w-full h-96 block rounded-3xl object-cover`}
              />
              <div className="cart--class bottom-4 start-7 text-start">
                <h5
                  className={`cart__text--class w-96 rounded-b-xl line-clamp-3 ${
                    lang === "en" ? "rounded-tr-xl" : "rounded-tl-xl"
                  }`}>
                  {item.description}
                </h5>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default BlogSidebar;
