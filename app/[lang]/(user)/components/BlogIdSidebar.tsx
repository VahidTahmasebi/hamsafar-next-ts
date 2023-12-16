"use client";

import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { Locale } from "@/i18n.config";

interface IData {
  id: string;
  picture_url: {
    url: string;
  };
  name: string;
  description: string;
}

interface IBlogIdSidebarProps {
  lang: Locale;
  data: IData[];
}

const BlogIdSidebar: FC<IBlogIdSidebarProps> = ({ lang, data }) => {
  return (
    <>
      {data &&
        data?.map((item) => (
          <Link
            key={item.id}
            className="w-full flex justify-center items-center gap-x-3 rounded-xl hover:bg-c-surface-200 cursor-pointer transition-all delay-50"
            href={`/blog/${item.id}`}>
            <Image
              src={item.picture_url.url}
              alt={item.name}
              width={0}
              height={0}
              sizes="100vw"
              className="w-4/12 h-20 block rounded-xl object-cover"
            />
            <h5 className="w-8/12 text-sm line-clamp-2">{item.name}</h5>
          </Link>
        ))}
    </>
  );
};

export default BlogIdSidebar;
