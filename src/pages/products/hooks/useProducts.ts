import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../../../services/productService"

export const useProducts = () => {
  const { data, isFetching, error } = useQuery(
    { queryKey: ['products'], queryFn: getProducts, staleTime: (6 * 1000 * 60) }
  )

  return {
    data,
    isFetching,
    error
  }
}