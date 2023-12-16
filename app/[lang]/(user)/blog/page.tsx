"use client";

import React, { FC } from "react";

import { Locale } from "@/i18n.config";

import { useGetHotels } from "@/hooks/useHotels";

import BlogSidebar from "../components/BlogSidebar";

interface IBlogProps {
  params: {
    lang: Locale;
    id: string;
  };
}

const Blog: FC<IBlogProps> = ({ params: { lang } }) => {
  const { isLoading, data } = useGetHotels();

  return (
    <div className="w-full flex justify-center items-center">
      <BlogSidebar lang={lang} data={data} />
    </div>
  );
};

export default Blog;
