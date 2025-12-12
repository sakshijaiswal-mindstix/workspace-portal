import { useQuery } from "@tanstack/react-query";
import { getProducts } from "src/services/getProducts";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    staleTime: 0,
    refetchOnWindowFocus: false,
  });
};
