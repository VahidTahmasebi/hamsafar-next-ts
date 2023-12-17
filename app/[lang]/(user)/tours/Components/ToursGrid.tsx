import { cookies } from "next/dist/client/components/headers";
import queryString from "query-string";

import { Locale } from "@/i18n.config";

import { getAllHotels } from "@/services/hotelServices";

import { toStringCookies } from "@/utils/toStringCookies";

import ProduceContainer from "@/components/ProduceContainer";

interface IData {
  id: string;
  name: string;
  picture_url: {
    url: string;
  };
  price: number;
  review_scores_rating: number;
}

export const dynamic: string = "force-dynamic";

const ToursGrid = async ({
  lang,
  searchParams,
}: {
  lang: Locale;
  searchParams: any;
}): Promise<JSX.Element> => {
  const cookieStore: any = cookies();
  const strCookies: string = toStringCookies(cookieStore);

  const hotelsPromise = getAllHotels(
    queryString.stringify(searchParams),
    strCookies
  );

  const hotelsData: IData[] = await hotelsPromise;

  return (
    <>
      {hotelsData &&
        hotelsData.map((item: IData) => (
          <div key={item.id} className="relative text-base sm:text-xs">
            <ProduceContainer
              data={item}
              lang={lang}
              containerClass="sm:h-40"
            />
          </div>
        ))}
    </>
  );
};

export default ToursGrid;
