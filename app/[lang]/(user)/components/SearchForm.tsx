"use client";

import React, { FC, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import DatePicker, { DateObject } from "react-multi-date-picker";

import Button from "@/common/buttons/Button";
import TextField from "@/common/Inputs/TextField";
import DatePickerComponent from "@/common/Inputs/DatePickerComponent";
import SelectorInput from "@/common/Inputs/SelectorInput";

import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";

interface Option {
  value: string;
}

const initialOptions: Option[] = [
  { value: `train` },
  { value: "airplane" },
  { value: "bus" },
];

const SearchForm = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [date, setDate] = useState<Date | undefined>();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<{
    where: string;
    when: string;
    date: string;
  }>({
    defaultValues: {
      where: "",
      when: "train",
    },
  });

  const onFormSubmit = async (values: {
    where: string;
    when: string;
    date: string;
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
        inputMode=""
        min={2}
        maxLength={8}
        icon="place"
      />

      <div className="w-4/6 h-full relative flex justify-center items-center">
        <Controller
          control={control}
          name="date"
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
                placeholder="When"
                minDate={new DateObject()}
                maxDate="2099/12/29"
                mapDays={({ date }) => {
                  let props: any = {};
                  let isWeekend = date.weekDay.index === 6;

                  if (isWeekend) props.className = "highlight highlight-red";

                  return props;
                }}
                containerStyle={{
                  width: "100%",
                }}
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
            src={`/assets/icons/calendar-search-icon.svg`}
            alt=""
            width="0"
            height="0"
            sizes="100vw"
            className="icon--class"
          />
        </span>
      </div>

      <SelectorInput register={register} initialOptions={initialOptions} />

      <Button
        width="w-32"
        height="h-12"
        padding="px-6"
        color="text-[#E4F4E7]"
        background="bg-c-primary-500">
        <Image
          src="/assets/icons/search-icon.svg"
          alt=""
          width="0"
          height="0"
          sizes="100vw"
          className="icon--class me-3"
        />
        <span>Search</span>
      </Button>
    </form>
  );
};

export default SearchForm;
