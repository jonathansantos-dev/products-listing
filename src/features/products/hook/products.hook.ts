import { useQuery } from '@tanstack/react-query'
import { productsServices } from '../services/products.sevices';

export const useGetProducts = ({ getProducts }: { getProducts: boolean }) => useQuery({ queryKey: ['products'], queryFn: productsServices.getProducts, enabled: getProducts, staleTime: 5 * 1000 * 60 })