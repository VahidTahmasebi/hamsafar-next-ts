import { useMutation, useQuery } from "@tanstack/react-query";

import { getAllHotels } from "@/services/hotelServices";

export const useGetHotels = () =>
  useQuery({
    queryKey: ["get-hotels"],
    queryFn: getAllHotels,
    retry: false,
    refetchOnWindowFocus: true,
  });
