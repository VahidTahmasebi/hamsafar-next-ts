"use client";

import React, { FC } from "react";
import Image from "next/image";
import { Controller, FieldValues } from "react-hook-form";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { useTheme } from "next-themes";
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";
import "react-multi-date-picker/styles/colors/teal.css";

interface DatePickerComponentProps {
  control: any;
  name: string;
  placeholder: string;
  icon: string;
}

const DatePickerComponent: FC<DatePickerComponentProps> = ({
  control,
  name,
  placeholder,
  icon,
}) => {
  const { resolvedTheme } = useTheme();

  return (
    <div className="w-4/6 h-full relative flex justify-center items-center">
      <Controller
        control={control}
        name={name}
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
              placeholder={placeholder}
              minDate={new DateObject()}
              maxDate="2099/12/29"
              format={"YYYY/MM/DD"}
              mapDays={({ isSameDate, date, selectedDate }) => {
                let props: any = {};
                let isWeekend = date.weekDay.index === 6;

                if (Array.isArray(selectedDate)) {
                  selectedDate = selectedDate[0];
                }

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
              className={resolvedTheme === "dark" ? "bg-dark teal" : "teal"}
              calendarPosition="bottom-right"
              value={value || ""}
              inputClass="w-full p-2 pr-11 outline-none border-2 border-transparent hover:border-2 hover:border-c-primary-600/40 rounded-3xl focus:ring-1 focus:ring-offset-1 focus:ring-c-primary-600 bg-c-surface-50 shadow-sm transition ease-in duration-200"
              onChange={(date) => {
                if (date instanceof DateObject && date.isValid) {
                  onChange(date?.isValid ? date : "");
                }
              }}
            />
          </>
        )}
      />
      <span className="absolute right-3">
        <Image
          src={icon}
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
