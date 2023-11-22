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
  const { isLoading, data: hotels } = useGetHotels();

  return (
    <div className="">
      <BlogSidebar lang={lang} hotels={hotels} />
    </div>
  );
};

export default Blog;
