"use client";
import React, { FC, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useForm, Controller } from "react-hook-form";
import DatePicker, { DateObject } from "react-multi-date-picker";

import { ICommonDic } from "@/types/IDictionaries";

import placeIcon from "@/public/assets/icons/place-icon.svg";
import calendarSearchIcon from "@/public/assets/icons/calendar-search-icon.svg";
import searchIcon from "@/public/assets/icons/search-icon.svg";

import Button from "@/common/buttons/Button";
import TextField from "@/common/Inputs/TextField";
import DatePickerComponent from "@/common/Inputs/DatePickerComponent";
import SelectorInput from "@/common/Inputs/SelectorInput";

import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";
import "react-multi-date-picker/styles/colors/teal.css";

interface Option {
  value: string;
}

interface SearchFormProps {
  commonDic: ICommonDic;
}

const SearchForm: FC<SearchFormProps> = ({ commonDic }) => {
  const { trainWord, airplaneWord, busWord, searchWord, whenWord, whereWord } =
    commonDic;

  const router = useRouter();
  const pathname = usePathname();

  const { theme } = useTheme();

  const initialOptions: Option[] = [
    { value: trainWord },
    { value: airplaneWord },
    { value: busWord },
  ];

  const [date, setDate] = useState<Date | undefined>();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<{
    whereValue: string;
    whenValue: string;
    travelTypeValue: string;
  }>({
    defaultValues: {
      whereValue: "",
      whenValue: "",
      travelTypeValue: trainWord,
    },
  });

  const onFormSubmit = async (values: {
    whereValue: string;
    whenValue: string;
    travelTypeValue: string;
  }) => {
    if (pathname === "/search") {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <form
      onSubmit={() => handleSubmit(onFormSubmit)}
      className="sm:max-w-3xl sm:h-16 flex flex-col sm:flex-row justify-around items-start sm:items-center gap-y-8 gap-x-4 p-4 sm:px-3 rounded-3xl sm:rounded-full bg-c-surface-200/50 shadow-xl shadow-c-primary-500/30">
      <TextField
        register={register}
        type="text"
        name="whereValue"
        placeholder={whereWord}
        inputMode=""
        min={2}
        maxLength={8}
        icon={placeIcon}
      />

      <div className="w-4/6 h-full relative flex justify-center items-center">
        <Controller
          control={control}
          name="whenValue"
          rules={{ required: true }} //optional
          render={({
            field: { onChange, name, value },
            fieldState: { invalid, isDirty }, //optional
            formState: { errors }, //optional, but necessary if you want to show an error message
          }) => (
            <>
              <DatePicker
                calendar={gregorian}
                locale={gregorian_en}
                showOtherDays
                placeholder={whenWord}
                minDate={new DateObject()}
                maxDate="2099/12/29"
                mapDays={({ isSameDate, date, selectedDate }) => {
                  let props: any = {};
                  let isWeekend = date.weekDay.index === 6;

                  if (isSameDate(date, selectedDate))
                    props.style = {
                      ...props.style,
                      backgroundColor: "#4B9C57",
                      fontWeight: "bold",
                      border: "1px solid #777",
                    };

                  if (isWeekend) props.className = "highlight highlight-red";

                  return props;
                }}
                containerStyle={{
                  width: "100%",
                }}
                className={theme === "dark" ? "bg-dark teal" : "teal"}
                calendarPosition="bottom-right"
                value={value || ""}
                inputClass="w-full p-2 pr-11 outline-none border-2 border-transparent hover:border-2 hover:border-c-primary-600/40 rounded-3xl focus:ring-1 focus:ring-offset-1 focus:ring-c-primary-600 bg-c-surface-50 shadow-sm transition ease-in duration-200"
                onChange={(date) => {
                  onChange(date);
                }}
              />
            </>
          )}
        />
        <span className="absolute right-3">
          <Image
            src={calendarSearchIcon}
            alt=""
            width="0"
            height="0"
            sizes="100vw"
            className="icon--class"
          />
        </span>
      </div>

      <SelectorInput
        register={register}
        initialOptions={initialOptions}
        name="travelTypeValue"
      />

      <Button
        width="w-32"
        height="h-12"
        padding="px-6"
        color="text-[#E4F4E7]"
        background="bg-c-primary-500">
        <Image
          src={searchIcon}
          alt=""
          width="0"
          height="0"
          sizes="100vw"
          className="icon--class me-3"
        />
        <span>{searchWord}</span>
      </Button>
    </form>
  );
};

export default SearchForm;
