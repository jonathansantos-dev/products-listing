import { useQuery } from '@tanstack/react-query';
import { productsServices } from '../services/products.services';

export const useGetProducts = () => {
    const { data, isFetching, error } = useQuery({
        queryKey: ['products'],
        queryFn: productsServices.getProducts,
        staleTime: 5 * 1000 * 60
    })

    return { data, isFetching, error }
}
