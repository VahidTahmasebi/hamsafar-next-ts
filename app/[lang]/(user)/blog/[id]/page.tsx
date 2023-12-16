"use client";

import React, { FC } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { Locale } from "@/i18n.config";

import { useGetHotels, useGetHotelsById } from "@/hooks/useHotels";

import BlogIdSidebar from "../../components/BlogIdSidebar";

interface IBlogIdProps {
  params: {
    lang: Locale;
    id: string;
  };
}

const BlogId: FC<IBlogIdProps> = ({ params: { lang, id } }) => {
  const router = useRouter();

  const { data: hotels } = useGetHotels();
  const { isLoading, data } = useGetHotelsById(id);

  return (
    <div className="w-full flex gap-x-4">
      <div className="hidden sm:flex flex-col gap-y-3 p-2 border border-c-surface-100 rounded-2xl">
        <BlogIdSidebar lang={lang} data={hotels} />
      </div>
      {data && (
        <div className="w-full space-y-8">
          <div onClick={() => router.back()}>Go back</div>
          <Image
            src={data?.picture_url?.url}
            alt={data?.name}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-96 block rounded-2xl object-cover"
          />
          <div className="text-start space-y-5">
            <h2 className="w-full text-4xl font-bold">{data?.name}</h2>
            <p className="w-full">{data?.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogId;
