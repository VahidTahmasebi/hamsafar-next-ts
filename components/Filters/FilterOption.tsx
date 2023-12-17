"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

interface Option {
  value: string;
  label: string;
  icon: string;
}

interface FilterOptionProps {
  options: Option[];
}

const FilterOption: React.FC<FilterOptionProps> = ({ options }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [locationFilter, setLocationFilter] = useState<string>("");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleChangeFilter = (value: string) => {
    setLocationFilter(value);
    router.push(pathname + "?" + createQueryString("location", value));
  };

  useEffect(() => {
    setLocationFilter(searchParams.get("location") || "");
  }, [searchParams]);

  return (
    <>
      {options.map(({ value, label, icon }) => {
        const isActive = value === locationFilter;

        return (
          <button
            key={value}
            disabled={isActive}
            onClick={() => handleChangeFilter(value)}
            className={`${
              isActive && "bg-c-primary-400/50 hover:bg-c-primary-400/50"
            } gap-x-2 flex flex-col xl:flex-row justify-between items-center p-1.5 rounded-lg hover:bg-c-primary-400/20 select-none`}>
            <Image
              src={icon}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="w-6 h-6"
            />
            <p className="text-sm">{label}</p>
          </button>
        );
      })}
    </>
  );
};

export default FilterOption;
