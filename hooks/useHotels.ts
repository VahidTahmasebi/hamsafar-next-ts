import { useQuery } from "@tanstack/react-query";

import { getAllHotels, getOneHotelsById } from "@/services/hotelServices";

export const useGetHotels = () =>
  useQuery({
    queryKey: ["get-hotels"],
    queryFn: ({ queryKey }) => {
      const [, qs, cookies] = queryKey;
      return getAllHotels(qs, cookies);
    },
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useGetHotelsById = (id: string) =>
  useQuery({
    queryKey: ["get-hotel", id],
    queryFn: () => getOneHotelsById(id),
    retry: false,
    refetchOnWindowFocus: true,
  });
