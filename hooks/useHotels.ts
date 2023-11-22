import { useMutation, useQuery } from "@tanstack/react-query";

import { getAllHotels, getOneHotelsById } from "@/services/hotelServices";

export const useGetHotels = () =>
  useQuery({
    queryKey: ["get-hotels"],
    queryFn: getAllHotels,
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
