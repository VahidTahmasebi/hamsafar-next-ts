"use client";
import React, { FC } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { Controller, Control } from "react-hook-form";
import Image from "next/image";

import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";

interface DatePickerProps {
  control: Control;
}

const DatePickerComponent: FC<DatePickerProps> = (control) => {
  return (
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
              inputClass="w-full p-2 pr-11 placeholder:text-main-slate-400 outline-none border-2 border-transparent hover:border-2 hover:border-c-primary-600/40 rounded-3xl focus:ring-1 focus:ring-offset-1 focus:ring-c-primary-600 bg-c-surface-600 shadow-sm transition ease-in duration-200"
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
  );
};

export default DatePickerComponent;
