"use client";

import React, { FC, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useForm } from "react-hook-form";

import calendarSearchIcon from "@/public/assets/icons/calendar-search-icon.svg";
import placeIcon from "@/public/assets/icons/place-icon.svg";
import searchIcon from "@/public/assets/icons/search-icon.svg";

import { Locale } from "@/i18n.config";

import { dictionary } from "@/constants/dictionaries";

import useDebounce from "@/hooks/useDebounce";
import { useGetHotels } from "@/hooks/useHotels";

import Button from "@/common/buttons/Button";
import TextField from "@/common/Inputs/TextField";
import DatePickerComponent from "@/common/Inputs/DatePickerComponent";
import SelectorInput from "@/common/Inputs/SelectorInput";

interface Option {
  value: string;
}

interface SearchFormProps {
  lang: Locale;
}

interface FormData {
  whereValue: string;
  whenValue: any;
  travelTypeValue: string;
}

const SearchForm: FC<SearchFormProps> = ({ lang }: SearchFormProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const [search, setSearch] = useState<string>("");
  const [filteredTitle, setFilteredTitle] = useState<any[]>([]);

  const { isLoading, data } = useGetHotels();

  const initialOptions: Option[] = [
    { value: dictionary[lang]?.trainWord },
    { value: dictionary[lang]?.airplaneWord },
    { value: dictionary[lang]?.busWord },
  ];

  const {
    register,
    handleSubmit,
    control,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      whereValue: "",
      whenValue: "",
      travelTypeValue: dictionary[lang]?.trainWord,
    },
  });

  useDebounce(
    () => {
      setFilteredTitle(
        data?.filter((item: any) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    },
    [data, search],
    1200
  );

  const onFormSubmit = async (values: FormData) => {
    if (pathname === "/search") {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="sm:max-w-3xl sm:h-16 flex flex-col sm:flex-row justify-around items-start sm:items-center gap-y-8 gap-x-4 p-4 sm:px-3 rounded-3xl sm:rounded-full bg-c-surface-200/50 shadow-xl shadow-c-primary-500/10">
      <div className="w-4/6 h-full relative flex flex-col">
        <TextField
          register={register}
          type="text"
          name="whereValue"
          placeholder={dictionary[lang]?.whereWord}
          inputMode=""
          min={2}
          maxLength={8}
          icon={placeIcon}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="w-full h-fit max-h-56 absolute top-10 z-50 px-3 divide-y-2 divide-c-surface-300 rounded-xl bg-c-surface-100 overflow-hidden overflow-y-auto">
          {search &&
            filteredTitle.map((item: any) => (
              <div
                key={item.id}
                onClick={() => setValue("whereValue", item.name)}>
                <p className="py-2 text-xs line-clamp-2 text-c-surface-950 cursor-pointer">
                  {item.name}
                </p>
              </div>
            ))}
        </div>
      </div>

      <DatePickerComponent
        control={control}
        name="whenValue"
        placeholder={dictionary[lang]?.whenWord}
        icon={calendarSearchIcon}
      />

      <SelectorInput
        register={register}
        initialOptions={initialOptions}
        name="travelTypeValue"
      />

      <Button
        type="submit"
        className="w-32 h-12 px-6 text-[#E4F4E7] bg-c-primary-500 hover:bg-c-primary-600 focus-within:ring-offset-c-primary-500">
        <Image
          src={searchIcon}
          alt=""
          width="0"
          height="0"
          sizes="100vw"
          className="icon--class me-3"
        />
        <span>{dictionary[lang]?.searchWord}</span>
      </Button>
    </form>
  );
};

export default SearchForm;
