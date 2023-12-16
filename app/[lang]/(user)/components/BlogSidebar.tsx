"use client";

import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { Locale } from "@/i18n.config";

import { dictionary } from "@/constants/dictionaries";

import Button from "@/common/buttons/Button";

interface IData {
  id: string;
  picture_url: {
    url: string;
  };
  name: string;
  description: string;
}

interface IBlogSidebarProps {
  lang: Locale;
  data: IData[];
}

const BlogSidebar: FC<IBlogSidebarProps> = ({ lang, data }) => {
  return (
    <div className="w-full sm:w-8/12 flex flex-col gap-y-10">
      {data &&
        data?.map((item) => (
          <div key={item.id} className="flex flex-col gap-y-3">
            <Link href={`/blog/${item.id}`}>
              <Image
                src={item.picture_url.url}
                alt={item.name}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-80 block rounded-3xl object-cover"
              />
            </Link>
            <div className="flex justify-around items-center">
              <h5 className="w-8/12 line-clamp-3">{item.description}</h5>
              <Link href={`/blog/${item.id}`}>
                <Button
                  type="button"
                  className="w-32 h-9 px-5 text-c-primary-500 border-2 border-c-primary-500 focus-within:ring-offset-c-primary-500 hover:bg-[#E4F4E7]">
                  {dictionary[lang]?.readMore}
                </Button>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BlogSidebar;
