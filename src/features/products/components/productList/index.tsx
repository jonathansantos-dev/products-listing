import React, { useState, useEffect } from 'react';
import * as _ from 'lodash'
import { useGetProducts } from '../../hook/products.hook';
import useProductsStore from '../../store/products.store';
import Input from '../../../../components/ui/input';

import * as S from './styles';

const ProductList: React.FC = () => {
    const [shouldGetProducts, setShouldGetProducts] = useState(true);
    const { isFetching, data } = useGetProducts({ getProducts: shouldGetProducts });
    const { products, productsSet, search, searchedProducts } = useProductsStore();

    useEffect(() => {
        if (isFetching) {
            setShouldGetProducts(false)
        }
    }, [isFetching])

    useEffect(() => {
        if (data?.length) {
            productsSet(data)
        }
    }, [data])

    const debouncedSearch = _.debounce((str: string) => search(str), 500);

    return (
        <S.Container>
            <Input 
                variant="outlined" 
                placeholder='Search...'
                onChange={({ target }) => debouncedSearch(target.value)} 
            />

            <S.List>

                {searchedProducts?.length ? (
                    <>
                        {searchedProducts.map((item, index) => (
                            <div key={index}>{item.title}</div>
                        ))}
                    </>
                ) : (
                    <>
                        {products.map((item, index) => (
                            <div key={index}>{item.title}</div>
                        ))}
                    </>
                )}
            </S.List>

        </S.Container>
    );
}

export default ProductList;